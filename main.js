function setup(){
    canvas = createCanvas(500,500);
    canvas.position(530,100);
    video = createCapture(VIDEO);
    video.size(550,500);
    posenet  = ml5.poseNet(video,modelloded)
    posenet.on("pose",gotposes)
}

function preload(){
    
}

function modelloded(){
    console.log("modelloded");
}

function draw(){
    background("#ECECEC");
}

function gotposes(resultes){
    if(resultes.length > 0 ){
        console.log(resultes);
    }
}