import { ConfigureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';

export default ConfigureStore({
    reducer: {
        contacts: contactsReducer,
    },
})