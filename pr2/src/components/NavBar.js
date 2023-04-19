import { Container, Flex, Input, InputGroup, InputLeftElement, Text} from '@chakra-ui/react'
import { Image } from '@chakra-ui/image'
import React from 'react'
import { PhoneIcon, SearchIcon } from '@chakra-ui/icons'
import { createMotionComponent } from 'framer-motion'

const NavBar = () => {
  return (

      <Container
      as ="nav"
        maxW ="1300px"
        algin ="center"
        padding="4"
        
        display ="flex"
        justifyContent="space-between"
        boxShadow="lg"
        borderRadus ="lg"
        
        pos={"sticky"}
        top="0"
        bg = "white"
        zIndex="50"

      >
        <Flex algin = "center">
            <Image mr ="4" h="50px" w ="50px" src ="/images/images/keywords.jpg"/>
            <Text m= "2">Home </Text>
        </Flex>
        <Flex>
            <Text m="2">Post</Text><Text m ="2">Topic</Text>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<SearchIcon color='gray.300' />}
                    />
                        <Input 
                        w={{base:"100px", sm:"160px", md:"auto"}}
                        type='tel' placeholder='Search' />
               </InputGroup>

        </Flex>
        
        </Container>
  )
}

export default NavBar