var mouseEvent="empty";
var lastpx,lastpy;
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color="black";
widthline=10;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
     mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    current_x = e.clientX-canvas.offsetLeft;
    current_y = e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthline;
        ctx.moveTo(lastpx,lastpy);
        ctx.lineTo(current_x,current_y);
        ctx.stroke();
    }
    lastpx=current_x;
    lastpy=current_y;
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
mouseEvent="mouseleave";
}
function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}