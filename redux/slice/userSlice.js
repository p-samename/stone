import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'loginState',
  initialState: { value: null },
  reducers: {
    loggedIn: (state, action) => {
      state.value = action.payload;
    },
    loggedOut: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { loggedIn, loggedOut } = userSlice.actions;

export default userSlice;
