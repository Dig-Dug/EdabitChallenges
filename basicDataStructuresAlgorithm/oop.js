/**Create a Basic JavaScript Object */


let dog = {
name : "fido",
numLegs : 2
};


/**Use Dot Notation to Access the Properties of an Object */

let dogg = {
    name: "Spot",
    numLegs: 4
  };
  // Only change code below this line
  console.log(dogg.name)
  console.log(dogg.numLegs)

/**Create a Method on an Object */
let doggg = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + doggg.numLegs + " legs.";}
  };
  
  doggg.sayLegs();


/**Make Code More Reusable with the this Keyword______ */
/**let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
}; */
let dogi = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dogi.sayLegs();

  /*******Define a Constructor Function */

class Dog {
    constructor() {
        this.name = "String";
        this.color = "String";
        this.numLegs = 0;
    }
}

/********Use a Constructor to Create Objects */
function Dogh() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  
  // Only change code below this line
  let hound = new Dogh();



/*****Extend Constructors to Receive Arguments */
function Doghh(name,color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
    }
    let terrier = new Doghh();
    terrier.name = "loco";
    terrier.color = "blue";
    
    console.log(terrier)

/*********Verify an Object's Constructor with instanceof */
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Only change code below this line
  let myHouse = new House();
  myHouse.numBedrooms = 2;
  myHouse instanceof House; //true

/////************Understand Own Properties */
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  for (let property in canary) {
    if(canary.hasOwnProperty(property)) {
      ownProps.push(property);
      console.log(ownProps);
    }
  }

  /****Use Prototype Properties to Reduce Duplicate Code */
//Add a numLegs property to the prototype of Dog

  function Dogk(name) {
    this.name = name;
  }
  Dogk.prototype.numLegs = 2;
  
  
  // Only change code above this line
  let beaglee = new Dogk("Snoopy");


//Iterate Over All Properties___________________________

  /**function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald"); */

/**Here is how you add duck's own properties to
 *  the array ownProps and prototype properties 
    to the array prototypeProps:

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);
console.log(ownProps) would display ["name"] in the console,
 and console.log(prototypeProps) would display ["numLegs"]. */

 function Dogp(name) {
    this.name = name;
  }
  
  Dogp.prototype.numLegs = 4;
  
  let beagle = new Dogp("Snoopy");
  
  let ownPropsz = [];
  let prototypeProps = [];
  
  // Only change code below this line
  for (let property in beagle) {
    if(beagle.hasOwnProperty(property)) {
      ownPropsz.push(property);
    } else {
      prototypeProps.push(property);
    }
  }

  /**Understand the Constructor Property________________ */
  function Dogz(name) {
    this.name = name;
  }
  // Only change code below this line
  function joinDogFraternity(candidate) {
  if (candidate.constructor === Dogz) {
      return true;
    } else {
      return false;
    }
  }

  /********Change the Prototype to a New Object_____ */
  /**A more efficient way is to set the prototype
   *  to a new object that already contains the properties.
   *  This way, the properties are added all at once:

Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
}; */
function Dogt(name) {
    this.name = name;
  }
  
  Dogt.prototype = {
    // Only change code below this line
   numLegs: 2, 
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

  /**Remember to Set the Constructor Property
   *  when Changing the Prototype _______________________*/

   function Dogt(name) {
    this.name = name;
  }
  
  // Only change code below this line
  Dogt.prototype = {
    //define new constructor property
    constructor: Dogt,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

  /**Understand Where an Object’s Prototype Comes From***** */
  function Dogn(name) {
    this.name = name;
  }
  
  let beagleu = new Dogn("Snoopy");
  
  // Only change code below this line
  Dogn.prototype.isPrototypeOf(beagleu); //true


  /**Understand the Prototype Chain ÜÜÜÜÜÜÜÜÜÜÜÜÜÜÜÜÜÜÜÜ */
  function Dogj(name) {
    this.name = name;
  }
  
  let beagleo = new Dogj("Snoopy");
  
  Dogj.prototype.isPrototypeOf(beagleo);  // yields true
  
  // Fix the code below so that it evaluates to true
  Object.prototype.isPrototypeOf(Dogj.prototype);


  //Use Inheritance So You Don't Repeat Yourself!!!!!!!!!!!!!!!!
  /**The eat method is repeated in both Cat and Bear.
   *  Edit the code in the spirit of DRY by moving 
   * the eat method to the Animal supertype. */

   function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat,
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear,
  };
  
  function Animal() { };
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  };

  //Inherit Behaviors from a Supertype************************
  function Animall() { }

Animall.prototype = {
  constructor: Animall,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animall.prototype); // Change this line
let beaglue = Object.create(Animall.prototype); // Change this line


/**Set the Child's Prototype to an Instance of the Parent******* */
function Animol() { }

Animol.prototype = {
  constructor: Animol,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Doiig() { }

// Only change code below this line
Doiig.prototype = Object.create(Animol.prototype);

let beuagle = new Doiig();


/*****Reset an Inherited Constructor Property***** */
function Aniimal() { }
function Biird() { }
function Dzog() { }

Biird.prototype = Object.create(Aniimal.prototype);
Dzog.prototype = Object.create(Aniimal.prototype);

// Only change code below this line

Biird.prototype.constructor = Biird;
Dzog.prototype.constructor = Dzog;


let duckk = new Biird();
let beaglle = new Dzog();


//Add Methods After Inheritance_____________________
function Aanimal() { }
Aanimal.prototype.eat = function() { console.log("nom nom nom"); };

function Dwog() { }

// Only change code below this line
Dwog.prototype = Object.create(Aanimal.prototype);
Dwog.prototype.constructor = Dwog;
Dwog.prototype.bark = function(){
  console.log("Woof!");
}


// Only change code above this line

let beeagle = new Dwog();


//Override Inherited Methods_____________________