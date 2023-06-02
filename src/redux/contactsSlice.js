import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  getContactThunk,
} from 'services/fetch';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  return {
    ...state,
    isLoading: true,
  };
};

const handleRejected = (state, { payload }) => {
  return {
    ...state,
    isLoading: false,
    error: payload,
  };
};

const handleFetchContactsSuccess = (state, { payload }) => {
  return { ...state, isLoading: false, error: null, items: payload };
};

const handleAddContactSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: [action.payload, ...state.items],
  };
};

const handleDeleteContactSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: state.items.filter(item => item.id !== action.payload.id),
  };
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder.addCase(getContactThunk.pending, handlePending);
    builder.addCase(addContactThunk.pending, handlePending);
    builder.addCase(deleteContactThunk.pending, handlePending);
    builder.addCase(getContactThunk.rejected, handleRejected);
    builder.addCase(addContactThunk.rejected, handleRejected);
    builder.addCase(deleteContactThunk.rejected, handleRejected);
    builder.addCase(getContactThunk.fulfilled, handleFetchContactsSuccess);
    builder.addCase(addContactThunk.fulfilled, handleAddContactSuccess);
    builder.addCase(deleteContactThunk.fulfilled, handleDeleteContactSuccess);
  },
});
export const contactsReducer = contactsSlice.reducer;
