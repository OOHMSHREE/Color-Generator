let colorDisplay = document.getElementById('colorDisplay');
let btn =  document.getElementById('btn');

const hexColor = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

btn.addEventListener("click" ,()=>{
    let color = "#";
    for(i=0; i<6; i++){
        color += hexColor[randomColor()]
    }
    console.log(color) 
    colorDisplay.style.background = color;
    colorDisplay.textContent = color;

})

function randomColor(){
   return Math.floor(Math.random()*hexColor.length)
}

