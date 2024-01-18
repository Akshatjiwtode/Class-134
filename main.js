noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(560, 500);
    canvas = createCanvas(600, 600);
    canvas.position(1000, 150);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);

}

function gotPoses(results)
{
    if(results.length > 0){

        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x:" + noseX + "nose y:" + noseY)
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX : " + leftWristX + "rightWristX : " + rightWristX + "difference : " + difference);
    }
}

function draw()
{
    background('#969A97');
      fill('#F90093');
      stroke('#F90093');
      document.getElementById("square").innerHTML = "Width and height of the square will be :" + difference;
      square(noseX, noseY, difference);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}






