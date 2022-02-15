
function preload(){

}

function setup(){

    canvas = createCanvas(300, 300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300, 300)
    video.hide()
    posenet=ml5.poseNet(video, modelLoded)
    posenet.on('pose', gotposes)
}

function modelLoded(){
    console.log("posenet is loaded")

}

function take_snapshot (){
    save("filter/number>.png")
}
function draw(){
   image(video, 0, 0, 300, 300)
    
}
function gotposes(results){

    if(results.length > 0){
        console.log(results)
        console.log("nosex="+results[0].pose.nose.x)
        console.log("nosey="+results[0].pose.nose.y)
    }
}
