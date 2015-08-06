var Animal = require("./animal");

var denverZoo = new Zoo("denver", vegas);

function Zoo(name, location){
  this.name = name;
  this.location = location;
  this.status = "closed";
  this.animals = [];
}

Zoo.prototype.changeLocation = function (newLocation) {
  this.location = newLocation;
  return newLocation;
};

Zoo.prototype.open = function() {
  if(this.status = "closed") {
    this.status = "open";
  }
  return this.status;
};

Zoo.prototype.close = function() {
  if(this.status = "open") {
    this.status = "closed";
  }
  return this.status;
};

Zoo.prototype.isOpen = function() {
  if(this.status = "open") {
    return "Open!";
  }
};


//work in progress
Zoo.prototype.addAnimal = function(animal) {
  if(this.status = "open") {
    for (var i = 0; i < this.animals.length; i++) {
      if(animal !== this.animals[i]) {
        this.animals.push(animal)
      }
    }
  }
};

Zoo.prototype.removeAnimal = function (animal) {
  if(this.status = "open") {

  }
};

module.exports = Zoo;
