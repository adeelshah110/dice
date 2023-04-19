import { Box, Button, Container, Flex, Heading, Stack , Text} from '@chakra-ui/react'
import { Image } from '@chakra-ui/image'
import React from 'react'

const Hero = () => {
  return (
    <Container
    maxW ="1300px"
    boxShadow={"lg"}
    borderRadius="lg"
   
    h= "100vh"
    
    justifyItems="center"
    alignItems= "center"
    display="flex"
    flexDirection={{base:'column-reverse', md:"row"}}


>
        <Stack
        height="350px"
        justify="space-around"
        mt ={{base:"8", md:"0"}}
        >
            <Heading
            as = "h1"
            fontSize={{base:"2xl", sm:"3xl", md:"6xl"}}
            >  Keyword Extraction      </Heading>
            <Text
            as = "p"
            fontSize={{base:"sm", sm:"md", md:"lg"}}
            maxW={{base:"100",md:"80"}}

            >  #Keyword extraction uses machine learning with natural language processing (NLP) to break down human language so that it can be 
            understood and analyzed by machines. <br/>

            #Its used to find keywords from all manner of text: 
            webpages, regular documents and business reports, social media comments, 
            online forums and reviews, news reports, and more.

            </Text>
            <Box mt ="8">
                <Button
                colorScheme= "yellow" color= "gray.500">
                    Check Posts

                </Button>
            </Box>
        </Stack>
        <Flex 
        justifyContent={"center"}
        mt = {{base:"8", md:"0"}}>
            <Image
            src = "/images/images/keywords_main.jpg"
            mr ="4"
            width={{base:"80%",md:"auto"}}
            />
        </Flex>
  
    </Container>
  )
}

export default Hero