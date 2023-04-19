


import NavBar from "./components/NavBar.js"
import Hero from "./components/Hero.js"
import RecentPost from "./components/RecentPosts/RecentPost.js";
import Footer from "./components/RecentPosts/Footer.js";


//Begins
const App=() =>{
  
      return(
    <>
    
    <NavBar></NavBar>
       <Hero></Hero>
       <RecentPost></RecentPost>
       <Footer/>
      
        </>
  );

};

export default App;   