function makePhrases() {
//local variables, only available to the function
  var words1 = ["24/7", "multi-tier", "30,000 feet", "B-2-B", "win-win"];
  var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
  var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];

//selects a random item from within each array
  var rand1 = Math.floor(Math.random() * words1.length);
  var rand2 = Math.floor(Math.random() * words2.length);
  var rand3 = Math.floor(Math.random() * words3.length);

//joins the random item using the above value
  var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
  // alert(phrase);
  // output to page instead
  document.write(phrase);
}

makePhrases();
