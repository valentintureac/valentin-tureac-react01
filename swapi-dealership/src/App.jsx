import { useReducer } from 'react';
import { AppContext, appState, appStateReducer } from './contexts/AppContext';
import Search from './legacy/Search';
import Screen from './components/Screen';

const App = () => {
  const [state, dispatch] = useReducer(appStateReducer, appState);

  const contextValue = {
    state: state,
    dispatch: dispatch,
  };

  const { currentScreen } = state;

  return (
    <AppContext.Provider value={contextValue}>
      <header className="navbar-dark fixed-top bg-dark border-bottom border-warning">
        <nav className="container d-flex justify-content-between align-items-center">
          <h1 className="display-6 text-warning">Swapi Vehicles</h1>

          <Search></Search>
        </nav>
      </header>

      <main className="container mt-7 mb-4">
        {/* <button
          onClick={() => {
            dispatch({ type: 'setScreen', payload: 'productPage' });
          }}
        >
          to product
        </button> */}
        <Screen screen={currentScreen}></Screen>
      </main>

      <footer className="container mb-4">footer</footer>
    </AppContext.Provider>
  );
};

export default App;
