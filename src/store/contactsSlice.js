import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ContactsService from '../services/contactsService';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, { dispatch }) => {
  try {
    const response = await ContactsService.getContacts();
    if (response.status === 200) {
      dispatch(getContacts(response.data));
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
        dispatch(createContactSuccess(response.data));
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
        dispatch(createContactSuccess(response.data));
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
        console.log(data);
      const { contact_id } = data;
      const response = await ContactsService.sendDeleteContact(contact_id);
      if (response.status === 200) {
        dispatch(createContactSuccess(response.data));
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
    contacts: [],
  },
  reducers: {
    getContacts(state, action) {
      state.contacts = action.payload;
    },
    createContactSuccess(state, action) {
      state.message = action.payload;
    },
    setContactId(state, action) {
      state.contactId = action.payload;
    },
  },
});

export const { getContacts, createContactSuccess, setContactId } = contactsSlice.actions;

export default contactsSlice.reducer;
