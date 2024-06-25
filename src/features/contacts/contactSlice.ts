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
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    },
    editContact(state, action: PayloadAction<Contact>) {
      const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
  },
});

export const { addContact, deleteContact, setContacts } = contactSlice.actions;
export default contactSlice.reducer;
