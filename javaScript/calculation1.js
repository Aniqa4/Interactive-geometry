function firstParameter(value1) {
    const firstParameter=document.getElementById(value1);
    const firstParameterString=firstParameter.value;
    const firstParameterNumber=parseFloat(firstParameterString);
    firstParameter.value='';
    
    return firstParameterNumber;
}
 function secondParameter(value2) {
    const secondParameter=document.getElementById(value2);
    const secondParameterString=secondParameter.value;
    const secondParameterNumber=parseFloat(secondParameterString);
    secondParameter.value='';

    return secondParameterNumber;
 }

 function getCalculatedValue() {
    
 }
 
document.getElementById('triangle').addEventListener('click',function(){
    const base=firstParameter('triangleValue1');
    const height=secondParameter('triangleValue2');
    area=.5*base*height;
    console.log(area);
    const makeList=document.getElementById('calculationList');
    const name=document.getElementById('name1');
    const inputName=name.innerText;
    
    const tr= document.createElement("tr");
    tr.innerHTML=`
    <td>${1}.</td>
    <td>${inputName}:&nbsp;&nbsp;&nbsp;</td>
    <td>${area}cm<sup>2</sup>&nbsp;&nbsp;&nbsp;</td>
    <td><button class="font-semibold text-white rounded px-2 bg-blue-400">Convert to m<sup>2</sup></button></td>
    `
    makeList.appendChild(tr);


})

