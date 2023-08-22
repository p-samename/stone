import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'loginState',
  initialState: { value: null },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialState;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice;
