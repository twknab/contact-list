import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

function ContactCard() {
  return (
    // TODO: Make clickable and render the details
    // TODO: May have to setup react router?
    // TODO: Turn the values into props
    <Flex m="2">
      <Avatar name="Segun Adebayo" />
      <Box ml="3">
        <Text fontWeight="bold">Segun Adebayo</Text>
        <Text fontSize="sm">UI Engineer</Text>
      </Box>
    </Flex>
  );
}

export default ContactCard;
