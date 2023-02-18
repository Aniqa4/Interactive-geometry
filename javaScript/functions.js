//-------this is a function to get 1st parameter from 1st input field-----
function firstParameter(value1) {
    const firstParameter=document.getElementById(value1);
    const firstParameterString=firstParameter.value;
    const firstParameterNumber=parseFloat(firstParameterString);
    firstParameter.value='';
    
    return firstParameterNumber;
}

//----this is a function to get 1ns parameter from 2nd input field------
 function secondParameter(value2) {
    const secondParameter=document.getElementById(value2);
    const secondParameterString=secondParameter.value;
    const secondParameterNumber=parseFloat(secondParameterString);
    secondParameter.value='';

    return secondParameterNumber;
 }
//------this is a function to get calculated values-------------------
 function calculatedValueList(serial,idOfName) {
    const makeList=document.getElementById('calculationList');
    const name=document.getElementById(idOfName);
    const inputName=name.innerText;
    
    const tr= document.createElement("tr");
    tr.innerHTML=`
    <td>${serial}</td>
    <td>${inputName}:&nbsp;&nbsp;&nbsp;</td>
    <td>${area}cm<sup>2</sup>&nbsp;&nbsp;&nbsp;</td>
    <td><button class="font-semibold text-white rounded px-2 bg-blue-400">Convert to m<sup>2</sup></button></td>
    `
    makeList.appendChild(tr);
    
 }

