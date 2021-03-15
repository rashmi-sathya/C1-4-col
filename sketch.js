var colour = ["red","blue","green","purple","yellow","orange","black"];
function draw() {
background("#E0F9FB");

var x=220;
var y=30;
for (var k = 0; k < colour.length; k++) {
  fill(colour[k]);
  
  ellipse(x, y, 50, 50);
  y=y+50;
}

}