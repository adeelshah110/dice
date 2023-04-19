import React, { useState } from "react";
import {Input,Box,Stack, Flex, Image, InputGroup, InputLeftElement, Text, useDisclosure, FormControl, FormLabel} from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react";
import { AddIcon, PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";


const ContactForm = ({AddNewcontent, onClose}) => {
    const [name, SetName]=useState("");
    const [email, SetEmail]=useState("");
    const onSubmit=()=>{
      AddNewcontent(name,email);
      onClose();
    }
  return (
    <>
    <Stack>
    <FormControl id ="Name">
    <FormLabel>Name</FormLabel>
    <Input
     value ={name} 
     type='text'
     onChange = {(e) => SetName(e.target.value)}
     /> 
  </FormControl>
  
  <FormControl>
  
    <FormLabel>Email address</FormLabel>
    <Input 
    value ={email}
    type='email' 
     onChange = {(e) => SetEmail(e.target.value)}/>
  </FormControl>
  <Button 
  onClick = {onSubmit}
  alignSelf={"self-end"} colorScheme="purple"> Add contact </Button>
  </Stack>
  </>
  );
}

export default ContactForm