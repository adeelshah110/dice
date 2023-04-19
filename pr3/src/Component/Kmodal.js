import {Input,Box,Stack, Flex, Image, InputGroup, InputLeftElement, Text, Modal, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter} from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react";
import { AddIcon, PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faUser } from "@fortawesome/free-solid-svg-icons"


const Kmodal = ( {isOpen, onOpen,onClose,children,title}) => { 
  return (
       <>     

      <Modal  isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          
          <ModalBody>
            {children}
         
          </ModalBody>

       
        </ModalContent>
      </Modal>
    </>
  )
  
}

export default Kmodal