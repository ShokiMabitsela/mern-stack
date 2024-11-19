import { createSlice } from '@reduxjs/toolkit';

// Initial state setup based on localStorage
const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Set credentials to both Redux store and localStorage
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      // Set the user info in localStorage
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    
    // Logout user by clearing userInfo from Redux and localStorage
    logout: (state) => {
      state.userInfo = null;
      // Remove user info from localStorage on logout
      localStorage.removeItem('userInfo');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
