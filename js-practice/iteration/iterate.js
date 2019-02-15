//while loop

var products = ["Chocolate", "Mint", "Cake", "Bubblegum"];

var hasBubbleGum = [false, false, false, true];

var i = 0;

while (i < hasBubbleGum.length) {
  if (hasBubbleGum[i])
  document.write(products[i] + " contains bubble gum");
  i = i + 1;
}
