//-----------calculation for triangle-----------
document.getElementById('triangle').addEventListener('click',function(){
    const base=firstParameter('triangleValue1');//---used function--
    const height=secondParameter('triangleValue2');//--used function--
    area=.5*base*height;
    /* const makeList=document.getElementById('calculationList');
    const name=document.getElementById('name1');
    const inputName=name.innerText;
    
    const tr= document.createElement("tr");
    tr.innerHTML=`
    <td>${1}.</td>
    <td>${inputName}:&nbsp;&nbsp;&nbsp;</td>
    <td>${area}cm<sup>2</sup>&nbsp;&nbsp;&nbsp;</td>
    <td><button class="font-semibold text-white rounded px-2 bg-blue-400">Convert to m<sup>2</sup></button></td>
    `
    makeList.appendChild(tr); */
    calculatedValueList('name1');
    
})
//--------------calculation for Rectangle-----------
document.getElementById('rectangle').addEventListener('click',function(){
    const width=firstParameter('rectangleValue1');
    const length=secondParameter('rectangleValue2');
    area=width*length;
    calculatedValueList('name2');
})
