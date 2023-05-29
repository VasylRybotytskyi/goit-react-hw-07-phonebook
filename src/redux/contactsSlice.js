import { createSlice } from '@reduxjs/toolkit';

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
    builder.addCase();
  },
});
export const contactsReducer = contactsSlice.reducer;

// [fetchContacts.pending]: handlePending,
// [addContact.pending]: handlePending,
// [deleteContact.pending]: handlePending,
// [fetchContacts.rejected]: handleRejected,
// [addContact.rejected]: handleRejected,
// [deleteContact.rejected]: handleRejected,
// [fetchContacts.fulfilled]: handleFetchContactsSuccess,
// [addContact.fulfilled]: handleAddContactSuccess,
// [deleteContact.fulfilled]: handleDeleteContactSuccess,
