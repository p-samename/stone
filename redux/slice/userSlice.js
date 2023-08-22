import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'loginState',
  initialState: { user: null },
  reducers: {
    loggedIn: (state, action) => {
      state.user = action.payload;
    },
    loggedOut: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { loggedIn, loggedOut } = userSlice.actions;

export default userSlice;
