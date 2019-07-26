

function validator(phoneNumber) {
  if (phoneNumber.length < 7 || !phoneNumber.match(/-/))  {
    console.log("Not a phone number");
  } else {
    console.log("This IS a phone number");
  }

}




var phoneNumber = "123-4567";
