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

 choise = round(random(0,3)) 
 
 if(choise === 0){
 	x = x + 1
 } else if (choise === 1){
 	y = y - 1
 } else if(choise === 2){
 	x = x - 1
 } else if(choise ===3) {
 	y = y + 1
 }
}
