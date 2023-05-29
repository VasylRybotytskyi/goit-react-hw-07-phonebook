import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, getContacts } from 'services/fetch';

export const getContactsThunk = createAsyncThunk('contacts/get', () =>
  getContacts()
);

export const addContactsThunk = createAsyncThunk('contacts/add', data =>
  addContacts(data)
);

export const deleteContactsThunk = createAsyncThunk('contacts/delete', id =>
  deleteContacts(id)
);
