let w = 3 // width of each bar
let arr = [];
let sorting = false;
function setup() {
  createCanvas(screen.width,screen.height - 280);
  fillArr((width / w) - w) // fills the array n times
  stroke(0);
  //frameRate(60); // speed of the drawing
}
function fillArr(times){
	for (let i = 0; i < times; i++){
		arr.push(random(1, height - 50));
	}
}
function sortArr(){
	for(let i = 0; i < arr.length; i++){
		if(arr[i] > arr[i + 1]){
			swap(i, i + 1);
		}
	}
}
function swap(pos1, pos2){
	let tmp = arr[pos1];
	arr[pos1] = arr[pos2];
	arr[pos2] = tmp;
}
function drawArr(){
	let posx = w;
	for(let i = 0; i < arr.length; i++){
		rect(posx, height, w, arr[i] * -1);
		posx += w;
	}
}
function mousePressed(){
	sorting = true;
}
function draw() {
	background(255);
	drawArr();
	if (sorting){
		sortArr();
	}
}