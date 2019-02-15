function bake(degrees) {
  var message;
  if (degrees > 500) {
    message = "I'm not a nuclear reactor!";
  } else if (degrees < 100) {
    message = "I'm not a refridgerator!";
  } else {
    message = "Just right!";
  }


  console.log(message);
    return message;
}


bake(1);
