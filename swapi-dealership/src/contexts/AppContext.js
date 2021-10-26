import { createContext } from 'react';

export const AppContext = createContext();

export const appState = {
  currentScreen: 'home',
  selected: null,
  searchResults: [],
  cart: [],
  order: {
    address: {},
    items: [],
  },
};

export const appStateReducer = (appState, { type, payload }) => {
  if (type === 'setScreen') {
    // payload commits to being something like 'home', 'products, etc...
    return {
      ...appState,
      currentScreen: payload,
    };
  }

  if (type === 'setSelected') {
    return {
      ...appState,
      selected: payload,
    };
  }

  if (type === 'setSearchResults') {
    return {
      ...appState,
      searchResults: payload,
    };
  }

  if (type === 'addToCart') {
    return {
      ...appState,
      cart: [...appState.cart, payload],
    };
  }

  if (type === 'removeFromCart') {
    const cart = appState.cart.filter((cartItem) => {
      return cartItem.name !== payload.name;
    });

    return {
      ...appState,
      cart,
    };
  }

  if (type === 'setOrder') {
    return {
      ...appState,
      order: payload,
    };
  }

  if (type === 'emptyCart') {
    return {
      ...appState,
      cart: [],
    };
  }

  return appState;
};
