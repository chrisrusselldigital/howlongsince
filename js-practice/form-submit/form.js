
function mathsGame() {

  var text;
  var answer;

  answer = document.getElementById("input").value;

  if (answer == 2) {
    text = "<b> Correct! </b>";
  }

document.getElementById("response").innerHTML = text;

}
