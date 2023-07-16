import { createSlice } from '@reduxjs/toolkit';
import { fetchContactsThunk, addContactThunk, deleteContactThunk } from './contactsThunks';
import { logOut } from 'redux/auth/authThunks';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContactsThunk.pending]: handlePending,
    [fetchContactsThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContactsThunk.rejected]: handleRejected,
    [addContactThunk.pending]: handlePending,
    [addContactThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContactThunk.rejected]: handleRejected,
    [deleteContactThunk.pending]: handlePending,
    [deleteContactThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContactThunk.rejected]: handleRejected,
    [logOut.fulfilled](state) {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
