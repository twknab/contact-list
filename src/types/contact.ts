export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  notes: string;
}

export interface Contacts {
  contacts: Contact[];
}