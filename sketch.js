var a= prompt("Enter the first no");
var b = prompt("Enter the second no");
var c


function setup() {
  createCanvas(400, 400);
  c= createButton("Swap");
  c.mousePressed(swap)
}

function draw() {
  background(220);
}
function swap()
{
  [a,b] = [b,a]
  console.log("The value of first no after swapping is- "+a);
  console.log("The value of second no after swapping is- "+b);
}