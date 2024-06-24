import { Heading, VStack } from "@chakra-ui/react";
import ContactCard from "../components/ContactCard";

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  notes: string;
}

// export interface Contacts {
//   contacts: Contact[];
// }

const contact = {
  id: "1",
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phoneNumber: "1234567890",
  notes: "Qui ea duis fugiat cupidatat elit sit."
};

function ContactList() {
  return (
    <VStack m="10">
      {/* Add "Add Contact" button */}
      {/* Clicking into Contact List shows Details */}
      {/* Optional: Add "Edit Contact" button */}
      {/* Optional: Add "Delete Contact" button */}
      <Heading mb="6">Contact List</Heading>
      {/* TODO: Iterate over data and render contact card for each */}
      {/* TODO: Handle a no data state */}
      <ContactCard contact={contact} />
      <ContactCard contact={contact} />
    </VStack>
  );
}

export default ContactList;
