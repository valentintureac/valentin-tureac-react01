import { useDispatch, useSelector } from 'react-redux';
import { clickClicker, decrementClicker } from './actions/creators/ui';
import { initializeGoogleAuth } from './api';
import { Footer, Header } from './components/common';

initializeGoogleAuth();

export const App = () => {
  const clicker = useSelector((state) => {
    const { ui } = state;

    return ui.clicker;
  });

  const dispatch = useDispatch();

  return (
    <>
      <Header></Header>
      <main>
        <div>Value is: {clicker}</div>
        <button
          onClick={() => {
            dispatch(clickClicker());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(decrementClicker());
          }}
        >
          Decrement
        </button>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;

// actions -> {type: '', payload: {}}  /types /creators
// reducers
