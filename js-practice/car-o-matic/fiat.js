var car = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  passengers: 2,
  convertible: false,
  mileage: 88000,
  started: false,
  fuel: 0,

  start: function() {
    if (this.fuel > 0) {
        this.started = true;
        alert("Car started!");
    } else {
      alert("The fuel tank is empty, please add fuel");
    }

  },

  stop: function() {
    this.started = false;
    alert("Car stopped");
  },

  drive: function() {
    if (this.started) {
      if (this.fuel > 0) {
        alert(this.make + " " + this.model + " goes vroooom!");
        this.fuel = this.fuel - 1;
      } else {
        alert("No fuel in the tank!");
        this.stop;
      }
    } else {
      alert("Please start engine before driving");
    }
  },

  addFuel: function(amount) {
    this.fuel = this.fuel + amount;
  }

};
