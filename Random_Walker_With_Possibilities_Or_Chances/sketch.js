var particle;
var choise;
var x = 683
var y = 338.5

function setup() {
	createCanvas(1366,677)
}

function draw() {
	stroke(255,0,0)
	point(x,y)

 choise = random(1)
 
 if(choise < 0.4){
 	x = x + 1
 } else if (choise < 0.6 && choise > 0.4){
 	y = y - 1
 } else if(choise < 0.8 && choise > 0.6){
 	x = x - 1
 } else {
 	y = y + 1
 }
}
