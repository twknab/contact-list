import { VStack } from "@chakra-ui/react";
import ContactCard from "../components/ContactCard";

function ContactList() {
  return (
    <VStack m="10">
      {/* Add "Add Contact" button */}
      {/* Clicking into Contact List shows Details */}
      {/* Optional: Add "Edit Contact" button */}
      {/* Optional: Add "Delete Contact" button */}
      <h1>Contact List</h1>
      {/* TODO: Iterate over data and render contact card for each */}
      <ContactCard />
      <ContactCard />
    </VStack>
  );
}

export default ContactList;
