const generateBtn = document.getElementById("generateBtn");



const singleColorGenerator =()=>{
    const hex =[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
    let hexColor = "#";
    for(let i = 0; i < 6; i++){
        let random = Math.floor(Math.random()* hex.length);
        hexColor += hex[random]
        
    }
return hexColor;

}

const colorPalateGenerator =()=>{
    const colorPalate=[];
    for (let x =0; x<4; x ++){
        colorPalate.push(singleColorGenerator())

    }
    return colorPalate;
}

const renderColorPalate=()=>{
    const colorCont = document.querySelector(".colorContainer");
    colorCont.innerHTML =""
    const hexs = colorPalateGenerator();
    hexs.forEach((color,i)=>{
        const colorDiv= document.createElement("div");
    });
}
generateBtn.addEventListener("click",renderColorPalate);
