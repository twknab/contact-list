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
      onClick={handleNavigate}
      _hover={{ backgroundColor: 'gray.100', borderRadius: "15px", cursor: "pointer"}}
    >
      <Avatar bg="teal.500" name={`${firstName} ${lastName}`} />
      <Box ml="3">
        <Text fontSize="xl" fontWeight="bold">{`${firstName} ${lastName}`}</Text>
        <Text fontSize="sm">
          {email} | {phoneNumber}
        </Text>
      </Box>
    </Flex>
  );
}

export default ContactCard;
