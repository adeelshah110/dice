import {Input,Box,Stack, Flex, Image, InputGroup, InputLeftElement, Text} from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react";
import { AddIcon, PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faUser } from "@fortawesome/free-solid-svg-icons"

const ContactCard = ({contact,onOpen}) => {
  return (
    <Flex justify={"space-between"} p ="4" 
        bg = "purple.600" 
        borderRadius={"xl"}
         boxShadow="xl"
        color = "white"
        mb ="4"
        >
      <Flex align={"center"}>
        <Box m="4">
           <FontAwesomeIcon  size ="3x" icon={faUser}/>
           </Box>
            <Stack>
            <Text>{contact.name}</Text>
            <Text>{contact.email}</Text>
           </Stack>
           </Flex>
           <Flex align={"center"}>
            <Box mr ="4" onClick={onOpen}>
            <FontAwesomeIcon size ="3x"icon={faEdit}/>
            </Box>
            <Box color = "red.300">
            <FontAwesomeIcon size ="3x" icon={faTrash}/>
            </Box>
           </Flex>
      </Flex>
  )
}

export default ContactCard