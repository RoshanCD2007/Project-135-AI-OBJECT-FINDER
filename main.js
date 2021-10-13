status = "";

function setup(){
    canvas = createCanvas(450 , 450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input = document.getElementById("object_name_input").value;
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
}

function draw(){
    image(video , 0 , 0 , 450 , 450);
}