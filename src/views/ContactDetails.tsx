import {
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Link as ChakraLink,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Contact } from "../views/ContactList";
import { useLocation, useNavigate, Link as ReactRouterLink } from "react-router-dom";
import { ArrowBackIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";

interface LocationState {
  contact: Contact;
}

function ContactDetails() {
  // deconstruct `location.state.contact`
  const { state: { contact } } = useLocation() as { state: LocationState };
  const navigate = useNavigate();

  const { firstName, lastName, email, phoneNumber, notes } = contact;
  // TODO: Add API call via useEffect

  const handleContactsClick = () => {
    navigate("/");
  };

  return (
    <VStack m={{ base: "4", sm: "10" }}>
      <Breadcrumb mb="4">
        <BreadcrumbItem>
          <BreadcrumbLink onClick={handleContactsClick}>
            Contacts
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage fontWeight="bold">
          <BreadcrumbLink href="#">{`${firstName} ${lastName}`}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="filled"
        p={{ base: "0", md: "5" }}
        bg="gray.100"
        borderRadius="2xl"
        maxW="700px"
        w="100%"
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          align="center"
          spacing="24px"
          w="100%"
        >
          <Flex
            align="flex-start"
            h="100%"
            mt={{ base: "4", md: "10" }}
            ml={{ base: "0", md: "6" }}
          >
            <Avatar size="2xl" name={`${firstName} ${lastName}`} />
          </Flex>

          <Stack flex="1" spacing="4">
            <CardBody>
              <Heading size="2xl" flexWrap="wrap">{`${firstName} ${lastName}`}</Heading>
              <Text py="2">{notes}</Text>
              <List spacing={3} py="2">
                <ListItem>
                  <ListIcon as={EmailIcon} color="teal.500" />
                  {email}
                </ListItem>
                <ListItem>
                  <ListIcon as={PhoneIcon} color="teal.500" />
                  {phoneNumber}
                </ListItem>
              </List>
            </CardBody>
            <CardFooter>
              <ChakraLink as={ReactRouterLink} to={`/`}>
                <ArrowBackIcon mr="1" />
                Back to Contacts
              </ChakraLink>
            </CardFooter>
          </Stack>
        </Stack>
      </Card>
    </VStack>
  );
}

export default ContactDetails;
