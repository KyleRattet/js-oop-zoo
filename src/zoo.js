var Animal = require("./animal");

//Zoo Class
function Zoo(name, location){
  this.name = name;
  this.location = location;
  this.status = "closed";
  this.animals = [];
}

//Zoo Methods
Zoo.prototype.changeLocation = function (newLocation) {
  this.location = newLocation;
  return newLocation;
};

Zoo.prototype.open = function() {
  if(this.status === "closed") {
    this.status = "open";
  }
  return this.status;
};

Zoo.prototype.close = function() {
  if(this.status === "open") {
    this.status = "closed";
  }
  return this.status;
};

Zoo.prototype.isOpen = function() {
  if(this.status === "open") {
    return "Open!";
  } else {
    return "Closed.";
  }
};


Zoo.prototype.addAnimal = function(animal) {
  if(this.status === "open" && animal instanceof Animal === true && this.animals.indexOf(animal) === -1) {
    this.animals.push(animal);
  }
  return this.animals;
};

Zoo.prototype.removeAnimal = function (animalArray, animal) {
  if(this.status === "open") {
    for (var i = 0; i < animalArray.length; i++) {
      if(animal === animalArray[i]) {
        animalArray.splice(animalArray[i], 1);
      }
    }
  }
  return animalArray;

};

module.exports = Zoo;




