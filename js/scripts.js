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
    rockPaperScissorResult("Rock");
}

function showPaper(event) {
  changeImage('img/Paper.png', 'your-pick');
    rockPaperScissorResult("Paper");
}

function showScissor(event) {
  changeImage('img/Scissor.png', 'your-pick');
    rockPaperScissorResult("Scissor");
}

// get a random number between 0 and max-1
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var fightSound = new Audio("audio/Fight.mp3");

function rockPaperScissorResult(userPick){
  var result = "";
  var rpsChoices = ["Rock", "Paper", "Scissor"];
  var cpuPick = rpsChoices[getRandomInt(3)];

  fightSound.play();

  if(cpuPick === "Rock"){
    changeImage('img/Rock.png', 'cpu-pick');
    if(userPick === "Rock"){
      result = "It's a tie!";
    } else if(userPick === "Paper"){
      result = "You win!!!";
    } else {
      result = "You lose!!!";
    };
  } else if(cpuPick === "Paper"){
    changeImage('img/Paper.png', 'cpu-pick');
    if(userPick === "Rock"){
      result = "You lose!!!";
    } else if(userPick === "Paper"){
      result = "It's a tie!";
    } else {
      result = "You win!!!";
    };
  }else {
    changeImage('img/Scissor.png', 'cpu-pick');
    if(userPick === "Rock"){
      result = "You win!!!";
    } else if(userPick === "Paper"){
      result = "You lose!!!";
    } else {
      result = "It's a tie!";
    };
  };

  $("#output1").text("You chose " + userPick + ". I chose " + cpuPick + ".");
  $("#output2").text(result);
  $("#output-area").fadeIn(100).fadeOut(100).fadeIn(100);
  $("#versus").effect("shake");
  // $("#output-area").toggle("pulsate");
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
