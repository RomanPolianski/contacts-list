import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ContactsService from '../services/contactsService';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { dispatch }) => {
    try {
      const response = await ContactsService.getContacts();
      if (response.status === 200) {
        dispatch(getContacts(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    getContacts(state, action) {
      state.contacts = action.payload;
    },
  },
});

export const { getContacts } = contactsSlice.actions;

export default contactsSlice.reducer;
