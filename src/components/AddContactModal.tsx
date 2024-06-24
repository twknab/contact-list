import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
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

interface AddContactModalProps {
  isOpen: boolean;
  onSave: (contact: Contact) => void;
  onClose: () => void;
}

function AddContactModal({ isOpen, onClose, onSave }: AddContactModalProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [notes, setNotes] = useState("");

  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  const handleOnSave = () => {
    const contact: Contact = {
      /* NOTE: ID increments by array length + 1
      in production this would be handled by our backend. */
      id: (contacts.length + 1).toString(),
      firstName,
      lastName,
      email,
      phoneNumber,
      notes,
    };

    onSave(contact);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Contact</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input
              placeholder="Danny"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired mt="5">
            <FormLabel>Last name</FormLabel>
            <Input
              placeholder="Tanner"
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired mt="5">
            <FormLabel>Email</FormLabel>
            {/* TODO: Add enforcement for proper email formatting */}
            <Input
              type="email"
              placeholder="dtanner@fullhouse.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired mt="5">
            <FormLabel>Phone Number</FormLabel>
            {/* TODO: Add enforcement for phone numbers only in correct formatting */}
            <Input
              placeholder="(415) 420-1234"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired mt="5">
            <FormLabel>Notes</FormLabel>
            <Textarea
              placeholder="Some cool notes"
              onChange={(e) => setNotes(e.target.value)}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="purple" mr={3} onClick={handleOnSave}>
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

export default AddContactModal;
