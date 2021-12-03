img="";
status="";
function preload(){
    img=loadImage("images (9).jpg");
}

   function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function modelLoaded(){
    console.log('Model Loaded');
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    if(results){
        console.log(results);
    }
}

function draw(){
    image(img,0,0,800,600);
    fill("#FF0000");
    text("Fruits",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);
  
}