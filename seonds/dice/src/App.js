
import {Flex,Box,  Stack, Heading, List, ListItem, Text}  from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { useState } from "react";

//Begins
const App=() =>{
  const [gameStarted,setGameStarted]= useState(false);
  const [selectedNumber,setSelectedNumber]=useState();
  const [error,setError]= useState(null);
  const [dice,setDice]= useState(1);
  const [score,setScore]=useState(0)
  const numbers =[1,2,3,4,5,6]

  const gameStartHandler= ()=>{
setGameStarted(true);
  }

const onNumberedClicked=(value)=>{
  setSelectedNumber(value)
}
const getRandomNumber =()=>{
  if (selectedNumber){
    const generateNo = Math.ceil(Math.random()*6);
    setDice(generateNo)

    if (selectedNumber===generateNo){
        setScore((prev)=> prev + generateNo)
    }
      else{ 
        setScore((prev)=> prev-2)
      }
      }
  else{
    setError("Select number")
  }

}
      return(
        <>
        { gameStarted ? (
          <>
          <Stack maxW ="1300px" h="100vh" justy="center" align ="center" mx="auto">
            <Heading as ="h1" fontSize="6xl" mb="8" color ={error ? "red": "green"} > 
            {error ? error : "Select number!"}

            </Heading>

            <Flex pb="10">
              {
              numbers && numbers.map((value)=>

            <Flex
            align="center"
            justify="center"
            h="50px"
            w ="50px"
            color  ="white"
            bg ={selectedNumber===value ? "grey": "black"}
            mr="4"
            borderRadius="md"
            fontSize="2xl"
            key = {value} 
            onClick={()=>onNumberedClicked(value)}
            >
              {value}

            </Flex>
)}
            </Flex>
            <Box
            h ="150px"
            w ="150px" 
            onClick ={getRandomNumber}>
              <Image src = {`/dice/dice${dice}.png`}/>
              
              </Box>
            <Text as ="p" fontSize={"xl"}>Click on dice to roll</Text>
            <Text color={score> 0 ? "green":"red"} fontWeight="bold" fontSize="8xl">{score}</Text>
            <Text fontWeight="bold" fontSize="6xl">{score>=5 ? "You Won": "Total Score"}</Text>
            <Button onClick={()=>setScore(0)}>Reset Score</Button>
          </Stack>

          <Stack>
          </Stack>

        
</>
    
) :(
    
    <Flex justify= "center"
    align ="center">

      <Image width="50%" src ="dices.png"/>
      <Stack>
      <Heading mb="4" as ="h1" fontSize="7xl">Dice Game</Heading>
              <Button
         bg="black" color ="white" 
         alignSelf= "flex-end"
         _hover={{bg:"grey"}}
        onClick ={gameStartHandler}
        
        >Start Game</Button>
      </Stack>
      </Flex>    
      
        
      )}
      </>
);

};
export default App;   