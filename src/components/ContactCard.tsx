import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { Contact } from "../views/ContactList";

interface ContactCardProps {
  contact: Contact;
}

function ContactCard({ contact }: ContactCardProps) {
  const navigate: NavigateFunction = useNavigate();

  const handleNavigate = () => {
    navigate(`/contact/${contact.id}`, { state: { contact } });
  };

  const { firstName, lastName, email, phoneNumber } = contact;

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
    >
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
  );
}

export default ContactCard;
