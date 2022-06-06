song1="";
song2="";
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
function gotPoses(error,results)
{
if(error)
{
console.error(error);
}
if(results.length>0)
{
console.log(results);
}
}
function draw()
{
image(video,0,0,600,500);
}
function play()
{
song.play();
song.setVolume(1);
song.rate(1);
}