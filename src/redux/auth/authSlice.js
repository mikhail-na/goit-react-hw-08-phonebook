import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authThunks'

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleRegisterFullfield = (state, {payload}) => {
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
};

const handleLogInFullfield = (state, { payload }) => {
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
};

const handleLogOutFullfield = (state, { payload }) => {
    state.user = { name: '', email: '' };
    state.token = null;
    state.isLoggedIn = false;
};

const handleRefreshPending = (state, { payload }) => {
    state.isRefreshing = true;
};

const handleRefreshFullfield = (state, { payload }) => {
    state.user = payload.user;
    state.isLoggedIn = true;
}

const handleRefreshRejected = (state, { payload }) => {
    state.isLoggedIn = false;
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
