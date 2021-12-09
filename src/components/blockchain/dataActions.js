export const fetchData = (smartContract) => {
  return async (dispatch) => {
    try {
      let name = await smartContract.methods.name().call();
      let totalSupply = await smartContract.methods.totalSupply().call();
      let cost = await smartContract.methods.cost().call();
      let maxSupply = await smartContract.methods.maxSupply().call();
      dispatch({
        type: 'FETCH_DATA_SUCCESS',
        payload: {
          name,
          totalSupply,
          cost,
          maxSupply,
        },
      });
      dispatch({ type: 'FETCH_DATA_FAILED', payload: '' });
    } catch (err) {
      console.log(err);
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: {} });
      dispatch({
        type: 'FETCH_DATA_FAILED',
        payload: 'Could not load data from contract.',
      });
    }
  };
};
