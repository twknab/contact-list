import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "../../types/contact";

export interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [],
};


export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts: (state, action: PayloadAction<Contact[]>) => {
      state.contacts = action.payload;
    },
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    // TODO: add more reducers here for other actions like delete, update, etc
  },
});

export const { setContacts, addContact } = contactSlice.actions;
export default contactSlice.reducer;
