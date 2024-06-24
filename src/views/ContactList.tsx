import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import ContactCard from "../components/ContactCard";
import { useSelector, useDispatch } from "react-redux";
import { Contact, Contacts } from "../types/contact";
import { useEffect, useState } from "react";
import { addContact, setContacts } from "../features/contacts/contactSlice";
import contactsData from "../data/contact-data.json";
import AddContactModal from "../components/AddContactModal";

function ContactList() {
  const contacts = useSelector((state: { contacts: Contacts }) => state.contacts).contacts;
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(setContacts(contactsData));
  }, [dispatch]);

  const handleOnModalSave = (newContact: Contact) => {
    setIsModalOpen(false);
    dispatch(addContact(newContact));
  };

  return (
    <>
      <VStack my="10" align="center" w="full">
        {/* Optional: Add "Edit Contact" button */}
        {/* Optional: Add "Delete Contact" button */}
        <Heading mb="6">Contact List</Heading>
        <Button
          size="lg"
          colorScheme="purple"
          mb="4"
          onClick={() => setIsModalOpen(true)}
        >
          Add Contact
        </Button>
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
      {isModalOpen && (
        <AddContactModal
          isOpen={isModalOpen}
          onSave={handleOnModalSave}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}

export default ContactList;
