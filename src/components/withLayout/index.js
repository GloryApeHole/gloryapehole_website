import Header from 'components/header';
import Footer from 'components/footer';

export default function withLayout(Component) {
  return (props) => {
    return (
      <div className='bg-black'>
        <Header />
        <Component {...props} />
        <Footer />
      </div>
    );
  };
}
