//your JS code here. If required.
let element=document.getElementById('level');

let levelct=0;

while(element && element.nodeName!=='BODY')
{
    element= element.parentNode;

    levelct++;
}

alert(`The level of the element is: ${levelct}`)