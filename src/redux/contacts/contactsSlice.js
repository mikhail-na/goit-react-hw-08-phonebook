import { createSlice } from '@reduxjs/toolkit';
import { fetchContactsThunk, addContactThunk, deleteContactThunk } from './contactsThunks';
import { logOut } from 'redux/auth/authThunks';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, {payload}) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFetchingFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

const handleAddContactFulfilled = (state, {payload}) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(payload);
};

const handleDeleteContactFulfilled = (state, {payload}) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(contact => contact.id === payload.id);
  state.items.splice(index, 1);
};

const handleLogOutFullfield = (state, { payload }) => {
  state.items = [];
  state.error = null;
  state.isLoading = false;
};


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContactsThunk.pending, handlePending)
      .addCase(fetchContactsThunk.fulfilled, handleFetchingFulfilled)
      .addCase(fetchContactsThunk.rejected, handleRejected)
      .addCase(addContactThunk.pending, handlePending)
      .addCase(addContactThunk.fulfilled, handleAddContactFulfilled)
      .addCase(addContactThunk.rejected, handleRejected)
      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, handleDeleteContactFulfilled)
      .addCase(deleteContactThunk.rejected, handleRejected)
      .addCase(logOut.fulfilled, handleLogOutFullfield),
});

export const contactsReducer = contactsSlice.reducer;
