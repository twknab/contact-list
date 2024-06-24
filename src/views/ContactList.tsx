import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ContactCard from "../components/ContactCard";
import contacts from "../data/contact-data.json";

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

function ContactList() {
  return (
    <VStack my="10" align="center" w="full">
      {/* Add "Add Contact" button */}
      {/* Update data store? */}
      {/* Optional: Add "Edit Contact" button */}
      {/* Optional: Add "Delete Contact" button */}
      <Heading mb="6">Contact List</Heading>
      <Box>
        {contacts.length ? (
          contacts.map((contact) => (
            <ContactCard contact={contact} key={contact.id} />
          ))
        ) : (
          <Text as="i" fontSize="xl">
            No contacts found
          </Text>
        )}
      </Box>
    </VStack>
  );
}

export default ContactList;
