import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    getContacts(state, action) {
      state.projects = action.payload.contacts;
    },
  },
});

export const { getContacts } = contactsSlice.actions;

export default contactsSlice.reducer;
