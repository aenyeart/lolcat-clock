var time = new Date().getHours();
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 8; // 8AM
var lunchTime = 12; // 12PM
var napTime = lunchTime + 3; // 3PM
var partyTime = 17; // 5PM
var isPartyTime = false;
var partyTimeButton = document.getElementById("partyTimeButton");
var partyBtnTxt;
var partyBtnColor;
var bgc;
var txtColor;
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var updateClock = function() {

  var messageText;
  var timeEvent = document.getElementById("timeEvent");
  var catImg = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
  var lolcat = document.getElementById("lolcat");

  if (time == partyTime) {
    messageText = "IZ PARTEE TIME!!";
    catImg = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
  } else if (time == napTime) {
    messageText = "IZ NAP TIME…";
    catImg = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
  } else if (time == lunchTime) {
    messageText = "IZ NOM NOM NOM TIME!!";
    catImg = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
  } else if (time == wakeupTime) {
    messageText = "IZ TIME TO GETTUP.";
    catImg = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
  } else if (time < noon) {
    messageText = "Good morning!";
  } else if (time >= evening) {
    messageText = "Good Evening!";
    catImg = "https://www.whycatwhy.com/wp-content/uploads/2016/03/psycho-cat-hiding-in-couch-300x173.jpg";
  } else {
    messageText = "Good afternoon!";
  }

  timeEvent.innerText = messageText;
  lolcat.src = catImg;

  var showCurrentTime = function() {
    // display the string on the webpage
    var clock = document.getElementById("clock");
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
    // The conditions below format the time variables for proper display.
    if (hours >= noon) meridian = "PM";
    if (hours > noon) hours = hours - 12;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
    clock.innerText = clockTime;

  }; // End showCurrentTime function

  showCurrentTime(); // Call it to make it run

}; // End updateClock function

updateClock(); // Call it to make it run

var oneSecond = 1000;
setInterval(updateClock, oneSecond); // Make it update every second

var partyEvent = function() {

  if (isPartyTime === false) {

    isPartyTime = true;
    time = partyTime;
    partyBtnTxt = "WOO! Funkiddup!";
    partyBtnColor = "#34eb9e";
    bgc = "#6a23db";
    txtColor = "#34eb9e";
  } else {

    isPartyTime = false;
    time = new Date().getHours();
    partyBtnTxt = "Iz partee time?";
    partyBtnColor = "#222";
    bgc = "#f16059";
    txtColor = "#222";
  }

  document.body.style.backgroundColor = bgc;
  document.body.style.color = txtColor;
  partyTimeButton.innerText = partyBtnTxt;
  partyTimeButton.style.backgroundColor = partyBtnColor;

}; // END partyEvent

var wakeUpEvent = function() {
  wakeupTime = wakeUpTimeSelector.value;
};

var lunchEvent = function() {
  lunchTime = lunchTimeSelector.value;
};

var napEvent = function() {
  napTime = napTimeSelector.value;
};

partyTimeButton.addEventListener("click", partyEvent);
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
napTimeSelector.addEventListener("change", napEvent);
