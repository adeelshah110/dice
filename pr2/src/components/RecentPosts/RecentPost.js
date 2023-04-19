import { Container, Grid, GridItem, Heading } from "@chakra-ui/react"
import PostCard from "./PostCard"
import {blogData}  from "../../Data"


const RecentPost = () => {
  return (
    <Container maxW ="1300px" boxShadow={"lg"} borderRadius="lg">
        <Heading fontSize="2xl" m="8">Recent Papers </Heading>
    <Grid gridGap="4" gridTemplateColumns="repeat(auto-fit,minmax(20rem,1fr))">
       
        {blogData.map((post)=>(
             <GridItem key={post.title} display ="flex" justifyContent="center">

             <PostCard post ={post} />   
             
         </GridItem>
        
        )      )}
    </Grid>

    <Heading fontSize="2xl" align ="center" m="8">Read More....</Heading>
    </Container>
  )
}

export default RecentPost