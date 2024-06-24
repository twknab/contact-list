import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ContactCard from "../components/ContactCard";
import { useSelector, useDispatch } from "react-redux";
import { Contacts } from "../types/contact";
import { useEffect } from "react";
import { setContacts } from "../features/contacts/contactSlice";
import contactsData from "../data/contact-data.json";

function ContactList() {
  const contacts = useSelector((state: { contacts: Contacts }) => state.contacts).contacts;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setContacts(contactsData));
  }, [dispatch]);

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
