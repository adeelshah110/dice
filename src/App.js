
import {Flex,Box,  Stack, Heading, List, ListItem, Text}  from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { useState } from "react";

//Begins
const App=() =>{
  // use effect hook controls th
      const [gameStarted, setGameStarted]= useState(false)
      
      const [selectedNumber, setSelectedNumber]= useState()
      const [err, setErr]= useState(null);
      const [score, setScore]= useState(0); 

      const [dice, setDice]= useState(1);       
      const numbers =[1,2,3,4,5,6];
  
  


      const startGameHandler = ()=>{
      setGameStarted(true)
      }

    
      const onNumberedClicked= (value)=>{
      setSelectedNumber(value)
      setErr(null)
      }
      

      const genRandomNo=()=>{
        if (selectedNumber){
          const generateNo = Math.ceil(Math.random()*6);
         
          setDice(generateNo)

          if (selectedNumber=== generateNo)
          {
             setScore((prev) => prev + generateNo)
          }
          else      
          {
            setScore((prev) => prev - 2)
          }
        }
       else{
            setErr("Please select number")
          }   
        }



      return(
    <>
    
        {gameStarted ? (        
          <> 
          <Stack justify= "center" align = "center" maxW="1300px" mx= "auto" h ="100vh"> 
            <Heading as ="h1" fontSize="6xl" mb= "8" color={err ? "red" : "green"}
            >
              {err ? err : "Select Number"}
              
              </Heading>
          
            <Flex pb="10">

              {
              
                <Flex      
                    justify = "center"
                    align = "center"
                    w ="50px"
                    h="50px"
                    
                    bg={selectedNumber===value ? 'green':'black'}
                    color="white"
                    fontSize = "2xl"
                    key ={value}
                    mr={4}
                    borderRadius="md"
                    onClick={()=>onNumberedClicked(value)}              
                  >  {value}
                
                </Flex>
              )}
            </Flex>
 
          <Box h='150px' w="150px" on onClick={genRandomNo}>
            <Image src ={`/dice/dice${dice}.PNG`}/>
          </Box> 

          <Text as = "p" fontSize="xl">Click on dice to roll</Text>

          <Text color= {score>0 ? "green": "red"}fontSize={"8xl"} fontWeight ="bold">{score}</Text>
          
          <Text fontSize={"6xl"} fontWeight ="bold">Total Score </Text>
          
          <Button onClick={()=> setScore(0)}>Reset Score</Button>

  </Stack>
  
<Stack maxW= "900px" mx = "auto" >
  
  <Heading as= "h2">Game Rules:-</Heading>
<List>
  <ListItem>Select number as a any of number</ListItem>
  <ListItem>Click on dice to roll it </ListItem>
  <ListItem>Select number is equal to obtain results
    then you will get the same points of the dice
  </ListItem>
  <ListItem>Select number is equal to obtain results
    then you will get the same points of the dicef</ListItem>
  </List>  
  
  </Stack>
</>
    
    ):(  
   <Flex 
    align={"center"}
    justify="center"
    >
    <Image 
     src ="dices.PNG"
     widh = "50%"
     />
    <Stack>
      <Heading 
      as ="h1"
      fontSize= "7xl"
      
      >Dice Game</Heading>
      <Button
      bg ="black"
      color = "white"
      alignSelf="flex-end"
      _hover={{bg:"grey"}}
      onClick={startGameHandler}
      
      >Start Game</Button>
    </Stack>
   </Flex>
   
    )}
        </>
  );

};

export default App;   