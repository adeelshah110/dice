import React, { useState } from "react";
import {Input,Box,Stack, Flex, Image, InputGroup, InputLeftElement, Text, useDisclosure, FormControl, FormLabel} from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react";
import { AddIcon, PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import ContactCard from "./Component/ContactCard";
import Kmodal from "./Component/Kmodal";
import ContactForm from "./Component/ContactForm";
import { v4 as uuidv4 } from 'uuid';



const App = () => {
  const {isOpen, onOpen, onClose } = useDisclosure();
  const {isOpen: isOpenEdit, onOpen: onOpenEdit, onClose:onCloseEdit } = useDisclosure();

  const [contacts, setContacts] = useState([ {id:1, name:"Himat shah", email: "himat@gmail.com"},])


  const AddNewcontent =(name, email)=>{
    if (contacts.findIndex((contact)=> contact.email===email)=== -1){
    setContacts([...contacts,{name,email,id:(uuidv4)}]);
  };
}

  return (
<>
<Kmodal
 isOpen={isOpen} 
 onOpen={onOpen} 
 title ={"Add New Contact"}
 onClose={onClose}
 > 
 
  <ContactForm AddNewcontent={AddNewcontent} onClose = {onClose} />
  </Kmodal>

  <Kmodal
 isOpen={isOpenEdit} 
 onOpen={onOpenEdit} 
 title ={"Add New Contact"}
 onClose={onCloseEdit}
 > 
 
  <ContactForm AddNewcontent={AddNewcontent} onClose = {onClose} />
  </Kmodal>


  <Box>
    <Flex p ="4" justify="center" >
       <Image w= "150px" h ="100px" src = "/images/banner.webp"/>
    <Heading as ="h1" textTransform = "uppercase" >
      contact Application
      </Heading>
    </Flex >

    <Box p="4" >
      <Button 
      w= "full" bg = "purple.700" 
      colorScheme = "purple.700" 
      color = "white" fontSize ="xl" 
      fontWeight ="bold"
      onClick = {onOpen}
      > 
      <AddIcon mr ="4" w= "20px" h ="20px"/>Add contact
      </Button>
    </Box>
  
  <Box p="4">
    <InputGroup>
      <InputLeftElement
          pointerEvents='none'
         children={<SearchIcon color='gray.300' />}
      />
    <Input focusBorderColor="purple.300" type='tel' placeholder='Search Contact...' />
  </InputGroup>
  </Box>
  <Box p ="4">
{contacts.map((contact)=>(
<ContactCard onOpen={onOpenEdit} contact ={contact} key ={contact.id}/>
))}

  </Box>

  </Box>
  </>
  
  )

};

export default App;
