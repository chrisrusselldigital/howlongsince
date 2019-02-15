
  var scores = [60, 50, 60, 58, 54, 54,
                  58, 50, 52, 54, 48, 69,
                  34, 55, 51, 52, 44, 51,
                  69, 64, 66, 55, 52, 61,
                  46, 31, 57, 52, 44, 18,
                  41, 53, 55, 61, 51, 44];

  function bubbleScores() {


    //while loop -----
    //empty output
    var output;
    //iteration varible
    var i = 0;
    //while i is less than the number of scores
    while (i < scores.length) {
      //output the string, the array location (using i) and the score array value
      output = "Bubble solution #" + i + " score: " + scores[i] + " <br> ";
      document.write(output);
      // increment i, WITHIN the loop!
      i = i + 1;
    }


    var totalScores = scores.length;
    var highestScore = Math.max(...scores);
    var bestSolutions = [];

    // array-specfic iterator:
    for (var i = 0; i < scores.length; i++) {

      //this if statement searches for highestScores
      if (scores[i] == highestScore) {
        // crucially, these push the array index, NOT value into bestSolutions
        bestSolutions.push(i);
      }

    }

    document.write("Bubble tests: " + totalScores + " <br> ");
    document.write("Highest bubble score: " + highestScore + " <br> ");
    document.write("Solutions with highest score: " + bestSolutions + " <br> ");

}

bubbleScores();
