import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authThunks'

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleRegisterFullfield = (state,action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
};

const handleLogInFullfield = (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
};

const handleLogOutFullfield = (state, action) => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
};

const handleRefreshPending = (state, action) => {
     state.isRefreshing = true;
};

const handleRefreshFullfield = (state, action) => {
     state.user = action.payload;
     state.isLoggedIn = true;
     state.isRefreshing = false;
}

const handleRefreshRejected = (state, action) => {
   state.isRefreshing = false;
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
        builder
          .addCase(register.fulfilled, handleRegisterFullfield)
            .addCase(logIn.fulfilled, handleLogInFullfield)
            .addCase(logOut.fulfilled, handleLogOutFullfield)
            .addCase(refreshUser.pending, handleRefreshPending)
            .addCase(refreshUser.fulfilled, handleRefreshFullfield)
            .addCase(refreshUser.rejected, handleRefreshRejected)
    }
});
export const authReducer = authSlice.reducer;
