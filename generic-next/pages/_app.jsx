import { useStore } from '../store';
import { Provider as ReduxProvider } from 'react-redux';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

export default MyApp;
