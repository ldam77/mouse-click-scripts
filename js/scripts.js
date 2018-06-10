function showRock(event) {
    $("#user-selection").text("You chose Rock!!!");
}

function showPaper(event) {
    $("#user-selection").text("You chose Paper!!!");
}

function showScissor(event) {
    $("#user-selection").text("You chose Scissor!!!");
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
