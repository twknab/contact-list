import { configureStore } from "@reduxjs/toolkit";
import contactReducer, { ContactsState } from "../features/contacts/contactSlice";

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export interface RootState {
  contacts: ContactsState;
}

export default store;
