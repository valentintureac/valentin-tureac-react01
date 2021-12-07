import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export default uiSlice.reducer;

// export actions
export const { increment, decrement } = uiSlice.actions;
