let os=document.getElementById('os')


function display(txt)
{
   os.value=os.value+txt;
}

function Clear()
{
    os.value="";
}

function del()
{
    os.value=os.value.slice(0,-1);
}

function cube()
{
   os.value=os.value*os.value*os.value
}

function sqrt()
{
    os.value=Math.sqrt(os.value);
}

function sqr()
{
    let s=prompt('enter the side')
    let res = s*s ;
    alert(`the area of square is ${res}`);
}

function tri()
{
    let b=prompt(`enter the base`)
    let h=prompt(`enter the height`)
    let res = 0.5*b*h;
    alert(`the area of triangle is ${res}`);
}

function calculate()
{
    os.value=eval(os.value);
}
function GST()
{
    let s=prompt(`enter the amount`)
    let G=prompt(`enter the the percentage`)
    let x = 100;
    let res = x/(s*G);
    alert(`the gst is ${res}`);
}