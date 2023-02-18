let serial=0;//---for dynamic serial number--
//-----------calculation for triangle-----------
document.getElementById('triangle').addEventListener('click',function(){
    
    const base=firstParameter('triangleValue1');//---used function--
    const height=secondParameter('triangleValue2');//--used function--
    //---------------validation----------------------
    if (isNaN(base)||isNaN(height)||base<=0||height<=0) {
        alert("invalid parameter.     (parameters of real life objects can't be zero, negative numbers, string or empty.)")
    }
    else{
        serial+=1;
        calculatedArea=.5*base*height;
        area=calculatedArea.toFixed(2);
        calculatedValueList(serial,'name1')//--used function--
    }
})
//--------------calculation for Rectangle-----------
document.getElementById('rectangle').addEventListener('click',function(){
    const width=firstParameter('rectangleValue1');
    const length=secondParameter('rectangleValue2');
    //-----------------validation-----------------------
    if (isNaN(width)||isNaN(length)||width<=0||length<=0) {
        alert("invalid parameter.     (parameters of real life objects can't be zero, negative numbers, string or empty.)")
    }
    else{
        serial+=1;
        calculatedArea=width*length;
        area=calculatedArea.toFixed(2);
        calculatedValueList(serial,'name2');//--used function--
    }
})
//------------calculation for parallelogram----------
document.getElementById('parallelogram').addEventListener('click',function(){
    const base=firstParameter('parallelogramValue1');//--used function--
    const height=secondParameter('parallelogramValue2');//--used function--
    calculatedArea=base*height;
    area=calculatedArea.toFixed(2);
    serial+=1;
    calculatedValueList(serial,'name3');//--used function--
})
//-------------------calculation for rhombus------------
document.getElementById('rhombus').addEventListener('click',function(){
    const diagonal1=firstParameter('rhombusValue1');//--used function--
    const diagona2=secondParameter('rhombusValue2');//--used function--
    calculatedArea=0.5*diagonal1*diagona2;
    area=calculatedArea.toFixed(2);
    serial+=1;
    calculatedValueList(serial,'name4');//--used function--
})
//---------------------calculation for pentagon-----------
document.getElementById('pentagon').addEventListener('click',function(){
    const p=firstParameter('pentagonValue1');//--used function--
    const base=secondParameter('pentagonValue2');//--used function--
    calculatedArea=0.5*p*base;
    area=calculatedArea.toFixed(2);
    serial+=1;
    calculatedValueList(serial,'name5');//--used function--
})
//----------------------ellipse-------------------------
document.getElementById('ellipse').addEventListener('click',function(){
    const a=firstParameter('ellipseValue1');//--used function--
    const base=secondParameter('ellipseValue2');//--used function--
    calculatedArea=3.14*a*base;
    area=calculatedArea.toFixed(2);
    serial+=1;
    calculatedValueList(serial,'name6');//--used function--
})