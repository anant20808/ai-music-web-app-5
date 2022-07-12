rightwristx="";
rightwristy="";
leftwristx="";
leftwristy="";
leftWristscore=0;
rightWristscore=0;
Song_status="";
Song_status_right="";
function preload(){
song1=loadSound("music.mp3");
song2=loadSound("music2.mp3");

}
song1="";
song2="";
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();

    Posenet=ml5.poseNet(video,Model_loaded);
    Posenet.on('pose',gotposes);
}
function draw(){
  image(video,0,0,600,500);
  
 Song_status = song1.isPlaying()
 Song_status_right = song2.isPlaying()
  
 if(leftWristscore > 0.2){
  circle(leftwristx,leftwristy,20)
  stroke("#FF0000")
  song2.stop()

 }
  if(Song_status = false){
    song1.play()
    document.getElementById("songname").innerHTML="Harry potter theme"
  }

  if(rightWristscore > 0.2){
    circle(rightwristx,rightwristy,20)
    stroke("#FF0000")
    song1.stop()
  }
  if(Song_status_right = false){
    song2.play()
    document.getElementById("songname").innerHTML="peter pan theme"
  }

}
function Model_loaded(){
  console.log("Model is loaded")
}
function gotposes(result,error){
  if(result.length>0){
    console.log(result);
    rightwristx=result[0].pose.rightWrist.x;
    rightwristy=result[0].pose.rightWrist.y;
    leftwristx=result[0].pose.leftWrist.x;
    leftwristy=result[0].pose.leftWrist.y;
    console.log(rightwristx,rightwristy,leftwristx,leftwristy);
    leftWristscore=result[0].pose.keypoints[9].score;
    rightWristscore=result[0].pose.keypoints[10].score;
    console.log("leftwristx="+ leftwristx + "leftwristy="+ leftwristy + "leftscore="+leftWristscore)
    console.log("rightwristx=" + rightwristx+"rightwristy="+ rightwristy+"rightscore="+ rightWristscore)
  }
  else{console.log(error)}
}

