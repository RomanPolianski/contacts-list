/* eslint-disable no-console */
/* eslint-disable camelcase */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ContactsService from '../services/contactsService';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, { dispatch }) => {
  try {
    const response = await ContactsService.getContacts();
    if (response.status === 200) {
      dispatch(setContacts(response.data));
    }
  } catch (error) {
    console.log(error);
  }
});

export const sendNewContact = createAsyncThunk(
  'contacts/sendNewContact',
  async (data, { dispatch }) => {
    try {
      const { id, name, lastName, company, phone, email, adress, operator, os, tasksUser } = data;
      const response = await ContactsService.sendContact(
        id,
        name,
        lastName,
        company,
        phone,
        email,
        adress,
        operator,
        os,
        tasksUser
      );
      if (response.status === 200) {
        dispatch(setMessage(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const sendUpdateContact = createAsyncThunk(
  'contacts/sendUpdateContact',
  async (data, { dispatch }) => {
    try {
      const { id, name, lastName, company, phone, email, adress, operator, os, tasksUser } = data;
      const response = await ContactsService.sendUpdateContact(
        id,
        name,
        lastName,
        company,
        phone,
        email,
        adress,
        operator,
        os,
        tasksUser
      );
      if (response.status === 200) {
        dispatch(setMessage(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const sendDeleteContact = createAsyncThunk(
  'contacts/sendDeleteContact',
  async (data, { dispatch }) => {
    try {
      const { contact_id } = data;
      const response = await ContactsService.sendDeleteContact(contact_id);
      if (response.status === 200) {
        dispatch(setMessage(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactId: null,
    message: null,
    contacts: [],
  },
  reducers: {
    setContacts(state, action) {
      state.contacts = action.payload;
    },
    setMessage(state, action) {
      state.message = action.payload.message;
    },
    deleteMessage(state) {
      state.message = null;
    },
    setContactId(state, action) {
      state.contactId = action.payload;
    },
  },
});

export const { setContacts, setMessage, deleteMessage, setContactId } = contactsSlice.actions;

export default contactsSlice.reducer;
