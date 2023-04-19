import React, { useState,useEffect } from "react";
function Clock(){
    const [time, setTime]= useState(new Date().toString())
    const [flag, setFlag]= useState(true);
useEffect (()=>{
console.log("components update or mounted");

},[flag]);
    function showdate(){
   //console.log(new Date().toString());
        setTime (new Date().toString());
    }
    setInterval(showdate,1000);
    return <div> {time } </div>;
}
export default Clock;
