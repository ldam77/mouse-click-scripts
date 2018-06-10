// function showImage(src, location) {
//     var img = document.createElement("img");
//     img.src = src;
//     img.alt = src;
//     document.getElementById(location).appendChild(img);
// }

function changeImage(source, location){
  document.getElementById(location).src = source;
}

function showRock(event) {
  changeImage('img/Rock.png', 'your-pick');
    rockPaperScissorResult("rock");
}

function showPaper(event) {
  changeImage('img/Paper.png', 'your-pick');
    rockPaperScissorResult("paper");
}

function showScissor(event) {
  changeImage('img/Scissor.png', 'your-pick');
    rockPaperScissorResult("scissor");
}

// get a random number between 0 and max-1
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function rockPaperScissorResult(userPick){
  var result = "You Win!!!";
  var rpsChoices = ["Rock", "Paper", "Scissor"];
  var cpuPick = rpsChoices[getRandomInt(3)];

  if(cpuPick === "Rock"){
    changeImage('img/Rock.png', 'cpu-pick');
  } else if(cpuPick === "Paper"){
    changeImage('img/Paper.png', 'cpu-pick');
  }else {
    changeImage('img/Scissor.png', 'cpu-pick');
  };

  $("#output1").text("You chose " + userPick + ". I chose " + cpuPick + ".");
  $("#output2").text(result);
}

function showCoords1(event) {
    var cX = event.clientX;
    var sX = event.screenX;
    var cY = event.clientY;
    var sY = event.screenY;
    var coords1 = "client - X: " + cX + ", Y coords: " + cY;
    var coords2 = "screen - X: " + sX + ", Y coords: " + sY;
    document.getElementById("demo").innerHTML = coords1 + "<br>" + coords2;
}

function showCoords2(event) {
    var cX = event.clientX;
    var sX = event.screenX;
    var cY = event.clientY;
    var sY = event.screenY;
    var coords1 = "client - X: " + cX + ", Y coords: " + cY;
    var coords2 = "screen - X: " + sX + ", Y coords: " + sY;
    document.getElementById("demo2").innerHTML = coords1 + "<br>" + coords2;
}
