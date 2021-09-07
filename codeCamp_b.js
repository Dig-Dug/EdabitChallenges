/***************Golf Code********************** */
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  switch(par, strokes){
case(1):
 return names[0];
case(4,2):
return names[1];
case(par-1):
return names[2];
case(par):
return names[3];
case(par + 1):
return names[4];
case(par + 2):
return names[5];
case( par + 3):
return names[6];
  }
return names[6];
  // Only change code above this line
}

golfScore(5, 4);

/******Selecting from Many Options with Switch Statements********** */
/**and default */

function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch(val){
        case 1: answer = "alpha";break;
        case 2: answer = "beta";break;
        case 3: answer = "gamma";break;
        case 4: answer = "delta"
    }
  // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);

  /**function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
 switch(val){
        case "a": answer = "apple";break;
        case "b": answer = "bird";break;
        case "c": answer = "cat";break;
        default: answer = "stuff";
    }
// Only change code above this line
  return answer;
}

switchOfStuff(1); */


/********Multiple Identical Options in Switch Statements */

/**
 * function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
switch(val){
     case 1: case 2: case 3:
     answer = "Low"; break; 
     case 4: case 5: case 6:
     answer = "Mid"; break;
     case 7: case 8: case 9:
     answer = "High"; break;   
        }
  // Only change code above this line
  return answer;
}

sequentialSizes(1);
 */

/***Replacing If Else Chains with Switch** */
function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line
     switch(val){
            case "bob": answer = "Marley";  break;
             case  42: answer = "The Answer";  break;
             case  1: answer = "There is no #1";  break;
             case  99: answer = "Missed me by this much!"; break; 
             case  7: answer = "Ate Nine";  break; 
       default: answer = "";
     }
     

   /* if (val === "bob") {
        answer = "Marley";
      } else if (val === 42) {
        answer = "The Answer";
      } else if (val === 1) {
        answer = "There is no #1";
    } else if (val === 99) {
        answer = "Missed me by this much!";
      } else if (val === 7) {
        answer = "Ate Nine";
      }*/
  
    // Only change code above this line
    return answer;
  }
  
  chainToSwitch(7);


  /*************Returning Boolean Values from Functions */
                      /**instead of if else  */

  function isLess(a, b) {
    return a < b;
  }
  
  isLess(10, 15);


  /****Return Early Pattern for Functionsoooooooooooooooooooo */
 

// Setup
    function abTest(a, b) {
    // Only change code below this line
        if(a < 0 || b < 0){
            return undefined;
        }
    // Only change code above this line
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  abTest(2,2);

  /********************Counting Cards*************** */
  /***********Counting Cards******************* */

var count = 0;
function cc(card) {
  // Only change code below this line 
  switch(card){
    case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      count++; break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
      count--; break;
    }
    if (count > 0) {
      return count + " Bet";
    } else {
      return count + " Hold";
    }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');



//***********Build JavaScript Objects****************** 
var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
var otherObj = {make:"foe", 5 : "five", model: "focus"};
var myDog = {"name": "Fido", legs: 3, tails: 1, friends:[]};

var k = cat.name;
 let ko = myDog.name;

console.log(k,ko);

//**Accessing Object Properties with Dot Notation */
// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
// Only change code below this line
var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line


//***Accessing Object Properties with Bracket Notation */
var ny ={ "q r" : "QR", "d f": "DF", "k w": "KW"};
console.log(ny["q r"]);
// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
// Only change code below this line
var entreeValue = testObj["an entree"];
var drinkValue = testObj['the drink'];  // Change this line


//*************Accessing Object Properties with Variables */
var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
//accessing props
var myDog = "Snoopie";
var myBreed = dogs[myDog];
console.log(myBreed);
//other way
var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name");
console.log(someObj[someProp]);

// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line

var playerNumber = 16;       // Change this line
var player = testObj[playerNumber];   // Change this line


//**************Updating Object Properties *
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
//changing
ourDog.name = "Happy Camper"; //or
ourDog["name"] = "Happy Camper";

// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";
// Only change code below this line


//*******Add New Properties to a JavaScript Object */


var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof";

////*************Delete Properties from a JavaScript Object */
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
delete myDog.tails;


//**************Using Objects for Lookups******************** */
var alpha = {1:"Z",2:"Y",3:"X",4:"W",24:"C",25:"B",26:"A"};
alpha[2];
alpha[24];

var value = 2;
alpha[value];
/**alpha[2] is the string Y,
  alpha[24] is the string C, 
and alpha[value] is the string Y. */

function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {"alpha": "Adams","bravo":"Boston",
  "charlie":"Chicago", "delta": "Denver","echo":"Easy",
  "foxtrot":"Frank"}
  /*switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "bravo":
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }*/
  result = lookup[val];
  console.log(result );
console.log(result);

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");