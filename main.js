leftWristX = 0;
rightWristX = 0;
noseX = 0;
noseY = 0;
dif = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(480, 480);
    canvas.position(650, 120);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#969A97');
    textSize(dif);
    fill(255, 0, 0);
    text("Rikin", noseX, noseY);
}

function modelLoaded(){
    console.log('PoseNet has been Initialized');
    
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        dif = floor(leftWristX - rightWristX);
    }
}