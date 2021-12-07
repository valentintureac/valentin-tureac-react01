import { useStore } from '../store';
import { Provider as ReduxProvider } from 'react-redux';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initalReduxState);

  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

export default MyApp;

export const getServerSideProps = async () => {
  let pageProps = {};

  // feed redux state on the backend
  pageProps.initalReduxState = {
    ui: {
      count: 36,
    },
  };

  return {
    pageProps,
  };
};
