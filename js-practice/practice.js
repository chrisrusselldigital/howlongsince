//makeTea

function makeTea(cups, tea) {
  console.log("Brewing " + cups + " cups of " + tea);
}

makeTea(3);

//barkAtTheMoon

function barkAtTheMoon() {
  console.log("Ahhhooooooooooo!");
}

//calculateArea

function calculateArea(r) {
  var area;
  if (r <= 0) {
    return 0;
  } else {
    area = Math.PI * r * r;
    return area;
  }
}

var radius = 5.2;

var theArea = calculateArea(radius);
//rounded up to a whole number
console.log("The area is: " + Math.round(theArea));

//Thing-a-ma-jig

function clunk(times) {
  var num = times;
  while (num > 0) {
    display("clunk");
    num = num + 1;
  }
}

function thingamajig(size) {
  var facky = 1;
  clunkCounter = 0;
  if (size == 0) {
    display("clank");
  }else if (size == 1) {
    display("thunk");
  } else {
    while (size > 1) {
      facky = facky * size;
      size = size - 1;
    }
    clunk(facky);
  }
}

function display(output) {
  console.log(output);
  clunkCounter = clunkCounter + 1;
}
var clunkCounter = 0;
thingamajig(5);
console.log(clunkCounter);

// Sherlock - solution p.122

var balance = 10500;
var cameraOn = true;

function steal(balance, amount) {
  cameraOn = false;
  if (amount < balance) {
    balance = balance - amount;
  }
  return amount;
  cameraOn = true;
}

var amount = steal(balance, 1250);
alert("Criminal: you stole " + amount + "!");

//
