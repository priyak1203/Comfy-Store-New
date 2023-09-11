import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
  user: { username: 'coder girl' },
  theme: 'winter',
};

const userSlice = createSlice({
  name: 'user',
  initialState: defaultState,
  reducers: {
    loginUser: (state, action) => {
      console.log('login user');
    },
    logoutUser: (state, action) => {
      console.log('logout user');
    },
    toggleTheme: (state, action) => {
      console.log('toggle theme');
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
