let input;
let analyzer;
let distribution = new Array(360);



function setup() {
  createCanvas(700, 500);
  for (let i = 0; i < distribution.length; i++) {
     distribution[i] = floor(randomGaussian(200, 150));
   }
  
  input = new p5.AudioIn();
  input.start();
}



function draw(){
  background(190);
  
  
  translate(340,250);
  
  let volume = input.getLevel();
  
  
  let threshold = 0.1;
  
  if (volume > threshold) {
    for (let i = 0; i < distribution.length; i++) {
     rotate(TWO_PI / distribution.length);
     stroke(0);
     let dist = abs(distribution[i])
     line(0, 0, dist, 0);
      
    stroke(100);
    fill(255, 255, 255);
    rect(random(width), random(height), volume * 40, volume * 40);
    }
   } 
  
  
}  
  