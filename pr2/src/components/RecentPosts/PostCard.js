import { Avatar, Button, Flex, Heading, Stack, Tag, Text } from "@chakra-ui/react"
import { Image } from "@chakra-ui/image"

const PostCard = ({post}) => {
  return (
    <Stack
    w ="20rem" boxShadow="lg" borderRadius="lg"
   overflow="hidden">
        <Image  src ={post.imageURL}/>
        <Stack  p="4">
        <Heading mb ="8" justify = "center" color = "blue.900" align={"center"} fontSize={"4xl"}>{post.title}</Heading>
        <Flex  align ="center">

        <Text fontSize={"md"} fontWeight="bold"  >{post.Author1}</Text>         
            <Avatar ml="4" align = "center" justify ="center" size ="sm" src = {post.avatar}></Avatar>         </Flex>

            <Flex align="center"  >

            <Text  fontSize={"md"} fontWeight="bold" >{post.Author2}</Text>
            <Avatar ml="4" align = "center" justify ="center" size ="sm" src = {post.avatar2}></Avatar>        </Flex>

            <Flex  justify ="space-between" align ="center" >
        <Text  fontSize={"md"} fontWeight="bold" >{post.Author3}</Text>         
            <Avatar ml="4" align = "center" justify ="center" size ="sm" src = {post.avatar3}></Avatar>         </Flex>
          
            <Text fontSize={"md"}>{post.Published_Date}</Text>
      
        
         

        <Text color ="GrayText" m ="8">{post.Discription} </Text>

        <Flex mt="8"> <Tag>#Tag</Tag></Flex>
        <Button alignSelf={"self-end"} colorScheme={"yellow"} color= "gray.500">Read More</Button>
       
            
        </Stack>
    </Stack>
  )
}

export default PostCard