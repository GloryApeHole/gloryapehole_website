import Web3EthContract from 'web3-eth-contract';
import Web3 from 'web3';
import abi from '../../utils/abi.json';

const CONFIG = {
  CONTRACT_ADDRESS: '0x6d0B629513dF007C7933f1D09dE7ef45e7F37b1F',
  SCAN_LINK:
    'https://polygonscan.com/token/0x6d0b629513df007c7933f1d09de7ef45e7f37b1f',
  NETWORK: {
    NAME: 'Polygon',
    SYMBOL: 'Matic',
    ID: 137,
  },
  NFT_NAME: 'Glory Ape Hole',
  SYMBOL: 'GAH',
  WEI_COST: 55000000000000000000,
  GAS_LIMIT: 285000,
};

export const connect = () => {
  return async (dispatch) => {
    const { ethereum } = window;
    const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
    dispatch({ type: 'METAMASK_CONNECT', payload: metamaskIsInstalled });
    if (metamaskIsInstalled) {
      Web3EthContract.setProvider(ethereum);
      let web3 = new Web3(ethereum);
      try {
        const accounts = await ethereum.request({
          method: 'eth_requestAccounts',
        });
        const networkId = await ethereum.request({
          method: 'net_version',
        });
        //polygon network id
        if (networkId == CONFIG.NETWORK.ID) {
          const SmartContractObj = new Web3EthContract(
            abi,
            '0x6d0b629513df007c7933f1d09de7ef45e7f37b1f'
          );
          dispatch({
            type: 'CONNECTION_SUCCESS',
            payload: {
              account: accounts[0],
              smartContract: SmartContractObj,
              web3: web3,
            },
          });
          // // Add listeners start
          ethereum.on('accountsChanged', (accounts) => {
            dispatch({
              type: 'UPDATE_ACCOUNT',
              payload: accounts[0] ? accounts[0] : { account: null },
            });
          });
          ethereum.on('chainChanged', () => {
            window.location.reload();
          });
          // Add listeners end
        } else {
          dispatch({
            type: 'CONNECTION_FAILED',
            payload: 'Change network to Polygon',
          });
        }
      } catch (err) {
        console.log(err);
        dispatch({
          type: 'CONNECTION_FAILED',
          payload: 'Something went wrong',
        });
      }
    } else {
      dispatch({
        type: 'CONNECTION_FAILED',
        payload: 'Install MetaMask',
      });
      console.log('Install metamask');
    }
  };
};

export const claimNFTs = (smartContract, account, mintAmount, callback) => {
  let cost = CONFIG.WEI_COST;
  let gasLimit = CONFIG.GAS_LIMIT;
  let totalCostWei = String(cost * mintAmount);
  let totalGasLimit = String(gasLimit * mintAmount);
  console.log('Cost: ', totalCostWei);
  console.log('Gas limit: ', totalGasLimit);
  callback(`Minting your Glory Ape...`);
  smartContract.methods
    .mint(mintAmount)
    .send({
      gasLimit: String(totalGasLimit),
      to: CONFIG.CONTRACT_ADDRESS,
      from: account,
      value: totalCostWei,
    })
    .once('error', (err) => {
      console.log(err);
      callback('Sorry, something went wrong please try again later.');
      setTimeout(() => {
        callback('');
      }, 4000);
    })
    .then((receipt) => {
      console.log(receipt);
      callback(`WOW, the Glory Ape is yours! go visit Opensea.io to view it.`);
    });
};
