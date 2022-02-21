
img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;



function preload() {
	world_start = loadSound("world_start.wav");
  mario_gameover = loadSound("gameover.wav");
  mario_jump = loadSound("jump.wav");
  mario_coin = loadSound("coin.wav");
  mario_hit = loadSound("kick.wav");
  mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
 canvas = createCanvas(1240,336);
 canvas.parent("canvas");
  video = createCapture(VIDEO);
  video.size(600,300);
  video.parent("game_console");
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
	instializeInSetup(mario);
}


function draw() {
	game()
}


//our previous code//


function modelLoaded() {
  console.log('Model Loaded!');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
	  console.log(results)
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
   
  }
}





