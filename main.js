song1="";
song2="";
scorerightwrist=0;
scoreleftwrist=0;
leftwristx=0;
leftwristy=0;
rightwristx=0;
rigthwristy=0;
function preload()
{
song1=loadSound("believer.mp3");
song2=loadSound("rule_the_world.mp3");
}
function setup()
{
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotPoses);
}
function modelloaded()
{
console.log("Model is loaded");
}
function gotPoses(results)
{
if(results.length>0)
{
console.log(results);
scorerightwrist=results[0].pose.keypoints[10].score;
scoreleftwrist=results[0].pose.keypoints[9].score;
leftwristx=results[0].pose.leftWrist.x;
leftwristy=results[0].pose.leftWrist.y;
rightwristx=results[0].pose.rightWrist.x;
rightwristy=results[0].pose.rightWrist.y;
}
}
function draw()
{
image(video,0,0,600,500);
fill("#FF0000");
stroke("#FF0000");
if(scorerightwrist>0.2)
{
circle(rightwristx,rightwristy,20);
}
if(scoreleftwrist>0.2)
{
circle(leftwristx,leftwristy,20);
}
}
function play()
{
song.play();
song.setVolume(1);
song.rate(1);
}