import { Avatar, Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { Contacts } from "../types/contact";
import { deleteContact } from "../features/contacts/contactSlice";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { Contact } from "../types/contact";

interface ContactCardProps {
  contact: Contact;
}

function ContactCard({ contact }: ContactCardProps) {
  const dispatch = useDispatch();
  const navigate: NavigateFunction = useNavigate();
  const contacts = useSelector(
    (state: { contacts: Contacts }) => state.contacts
  ).contacts;

  const handleNavigate = () => {
    navigate(`/contact/${contact.id}`, { state: { contact } });
  };

  const handleDelete = (e: React.SyntheticEvent, contactId: string) => {
    e.stopPropagation();

    dispatch(deleteContact(contactId));

    const updatedContacts = contacts.filter(c => c.id !== contactId);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };

  const { id: contactId, firstName, lastName, email, phoneNumber } = contact;

  return (
    <Flex
      p="4"
      maxW="600px"
      w="390px"
      pl="6"
      onClick={handleNavigate}
      _hover={{
        backgroundColor: "gray.100",
        borderRadius: "15px",
        cursor: "pointer",
      }}
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex alignItems="center">
        <Avatar name={`${firstName} ${lastName}`} ml="12" />
        <Box ml="3">
          <Text
            fontSize="xl"
            fontWeight="bold"
          >{`${firstName} ${lastName}`}</Text>
          <Text fontSize="sm">{email}</Text>
          <Text fontSize="sm">{phoneNumber}</Text>
        </Box>
      </Flex>
      <Box>
        <IconButton
          colorScheme="purple"
          aria-label="Delete"
          size="xs"
          icon={<DeleteIcon />}
          onClick={(e: React.SyntheticEvent) => handleDelete(e, contactId)}
          zIndex="100"
        />
        {/* colorScheme="purple"
        aria-label="Edit"
        size="xs"
        ml="2"
        mt="4"
        icon={<EditIcon />}
      /> */}
      </Box>
    </Flex>
  );
}

export default ContactCard;
