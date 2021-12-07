// https://github.com/vercel/next.js/tree/canary/examples/with-redux
// https://github.com/vercel/next.js/tree/canary/examples/with-redux-toolkit
import { isBrowser } from './../shared';
import { compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer, { ui } from './reducer';
import { useMemo } from 'react';

let store;
let composeEnhancer;

const initialState = {
  ui,
};

if (isBrowser() && process.env.NEXT_PUBLIC_ENV === 'dev') {
  composeEnhancer = composeWithDevTools;
} else {
  composeEnhancer = compose;
}

const initStore = (preloadedState = initialState) => {
  return createStore(rootReducer, preloadedState);
};

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });

    store = undefined;
  }

  if (!isBrowser()) {
    return _store;
  }

  if (!store) {
    store = _store;
  }

  return _store;
};

export const useStore = (initialState) => {
  const store = useMemo(() => {
    return initializeStore(initialState);
  }, [initialState]);

  return store;
};
