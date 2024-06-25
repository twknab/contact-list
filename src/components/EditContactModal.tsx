import { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import { Contact } from "../types/contact";

interface EditContactModalProps {
  contact: Contact;
  isOpen: boolean;
  onSave: (contact: Contact) => void;
  onClose: () => void;
}

function EditContactModal({ contact, isOpen, onClose, onSave }: EditContactModalProps) {
  const [firstName, setFirstName] = useState(contact.firstName);
  const [lastName, setLastName] = useState(contact.lastName);
  const [email, setEmail] = useState(contact.email);
  const [phoneNumber, setPhoneNumber] = useState(contact.phoneNumber);
  const [notes, setNotes] = useState(contact.notes);

  const handleOnSave = () => {

    const updatedContact: Contact = {
      id: contact.id,
      firstName,
      lastName,
      email,
      phoneNumber,
      notes,
    };

    onSave(updatedContact);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Contact</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input
              placeholder="Danny"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired mt="5">
            <FormLabel>Last name</FormLabel>
            <Input
              placeholder="Tanner"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired mt="5">
            <FormLabel>Email</FormLabel>
            {/* TODO: Add enforcement for proper email formatting */}
            <Input
              type="email"
              placeholder="dtanner@fullhouse.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired mt="5">
            <FormLabel>Phone Number</FormLabel>
            {/* TODO: Add enforcement for phone numbers only in correct formatting */}
            <Input
              placeholder="(415) 420-1234"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired mt="5">
            <FormLabel>Notes</FormLabel>
            <Textarea
              placeholder="Some cool notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="purple"
            mr={3}
            onClick={handleOnSave}
            isDisabled={!firstName || !lastName || !email || !phoneNumber}
          >
            Save
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default EditContactModal;
