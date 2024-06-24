import {
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Card,
  CardBody,
  CardFooter,
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
    <VStack m="10">
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
        p="4"
        bg="gray.100"
        borderRadius="2xl"
      >
        <Avatar
          bg="teal.500"
          m="6"
          size="2xl"
          name={`${firstName} ${lastName}`}
        />

        <Stack>
          <CardBody>
            <Heading size="2xl">{`${firstName} ${lastName}`}</Heading>

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
      </Card>
    </VStack>
  );
}

export default ContactDetails;
