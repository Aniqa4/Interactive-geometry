//-----------calculation for triangle-----------
document.getElementById('triangle').addEventListener('click',function(){
    const base=firstParameter('triangleValue1');//---used function--
    const height=secondParameter('triangleValue2');//--used function--
    area=.5*base*height;
    
    
    calculatedValueList('1','name1');//--used function--
})
//--------------calculation for Rectangle-----------
document.getElementById('rectangle').addEventListener('click',function(){
    const width=firstParameter('rectangleValue1');
    const length=secondParameter('rectangleValue2');
    area=width*length;
    calculatedValueList('2','name2');
})
//------------calculation for parallelogram----------
document.getElementById('parallelogram').addEventListener('click',function(){
    const base=firstParameter('parallelogramValue1');
    const height=secondParameter('parallelogramValue2');
    area=base*height;
    calculatedValueList('3','name3');
})
//-------------------calculation for rhombus------------
document.getElementById('rhombus').addEventListener('click',function(){
    const diagonal1=firstParameter('rhombusValue1');
    const diagona2=secondParameter('rhombusValue2');
    area=0.5*diagonal1*diagona2;
    calculatedValueList('4','name4');
})
//---------------------calculation for pentagon-----------
document.getElementById('pentagon').addEventListener('click',function(){
    const p=firstParameter('pentagonValue1');
    const base=secondParameter('pentagonValue2');
    area=0.5*p*base;
    calculatedValueList('5','name5');
})
//----------------------ellipse-------------------------
document.getElementById('ellipse').addEventListener('click',function(){
    const a=firstParameter('ellipseValue1');
    const base=secondParameter('ellipseValue2');
    area=3.14*a*base;
    calculatedValueList('6','name6');
})