
var socket = null;
var locked = true; // lock state
var shakeMin = 75; // minimum shake acceleration in m/s2

if (document.readyState != 'loading') ready();
else document.addEventListener('DOMContentLoaded', ready);

window.addEventListener("load", function () {
  document.body.style.backgroundColor = "red";
});

window.addEventListener("devicemotion", onDeviceMotion);

// if device shaking is intense enough, send message to all connected clients
function onDeviceMotion(event) {
  if (event.acceleration.y >= shakeMin) {
    socket.send();
  }
}

function ready() {
  // Note the resource URL should match the config in app.js
  const url = 'ws://' + location.host + '/ws';
  socket = new ReconnectingWebsocket(url);

  // Connection has been established
  socket.onopen = function (evt) {
    console.log('Web socket opened: ' + url);
  };

  // Received a message
  socket.onmessage = function (evt) {
    console.log("shaken");
    // change background color and lock state
    if (locked == true) {
      document.body.style.backgroundColor = "green";
      locked = false;
    } else {
      document.body.style.backgroundColor = "red";
      locked = true;
    }
  }
}
