import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import ContactCard from "../components/ContactCard";
import { useSelector, useDispatch } from "react-redux";
import { Contact, Contacts } from "../types/contact";
import { useEffect, useState } from "react";
import { createContact, setContacts } from "../features/contacts/contactSlice";
import initialContactsData from "../data/contact-data.json";
import AddContactModal from "../components/AddContactModal";

function ContactList() {
  const contacts = useSelector(
    (state: { contacts: Contacts }) => state.contacts
  ).contacts;
  const dispatch = useDispatch();
  const [isAddContactModalOpen, setIsAddContactModalOpen] = useState(false);

  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts");

    if (savedContacts) {
      const parsedContacts = JSON.parse(savedContacts) as Contact[];
      dispatch(setContacts(parsedContacts));
    } else {
      dispatch(setContacts(initialContactsData));
      localStorage.setItem("contacts", JSON.stringify(initialContactsData));
    }
  }, [dispatch]);

  const handleOnModalSave = (newContact: Contact) => {
    setIsAddContactModalOpen(false);
    dispatch(createContact(newContact));

    // Update local storage with new contact
    const updatedContacts = [...contacts, newContact];
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };

  return (
    <>
      <VStack my="10" align="center" w="full">
        {/* TODO: Add "Edit Contact" button */}
        <Heading mb="6">Contact List</Heading>
        <Button
          size="lg"
          colorScheme="purple"
          mb="4"
          onClick={() => setIsAddContactModalOpen(true)}
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
      {isAddContactModalOpen && (
        <AddContactModal
          isOpen={isAddContactModalOpen}
          onSave={handleOnModalSave}
          onClose={() => setIsAddContactModalOpen(false)}
        />
      )}
    </>
  );
}

export default ContactList;
