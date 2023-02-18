//---this is a function to generate random colors---
function randomColor(idName) {
const card=document.getElementById(idName);
card.addEventListener('mouseenter',function(){
    const generateColor=Math.floor(Math.random()*16777215).toString(16);
    card.style.backgroundColor="#"+generateColor;
})  
}

//---------triangle---------------
randomColor('random-color1');
//---------rectangle--------------
randomColor('random-color2');
//---------parallelogram----------
randomColor('random-color3');
//---------rhombus----------------
randomColor('random-color4');
//---------penatagon--------------
randomColor('random-color5');
//---------ellipse----------------
randomColor('random-color6');
