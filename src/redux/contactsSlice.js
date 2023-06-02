import { createSlice } from '@reduxjs/toolkit';
import {
  getContactsThunk,
  addContactsThunk,
  deleteContactsThunk,
} from './thunk';

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
    builder.addCase(getContactsThunk.pending, handlePending);
    builder.addCase(addContactsThunk.pending, handlePending);
    builder.addCase(deleteContactsThunk.pending, handlePending);
    builder.addCase(getContactsThunk.rejected, handleRejected);
    builder.addCase(addContactsThunk.rejected, handleRejected);
    builder.addCase(deleteContactsThunk.rejected, handleRejected);
    builder.addCase(getContactsThunk.fulfilled, handleFetchContactsSuccess);
    builder.addCase(addContactsThunk.fulfilled, handleAddContactSuccess);
    builder.addCase(deleteContactsThunk.fulfilled, handleDeleteContactSuccess);
  },
});
export const contactsReducer = contactsSlice.reducer;
