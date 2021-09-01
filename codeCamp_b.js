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
    case card = 2, 3, 4, 5, 6 : return 5 + " Bet";  
        case card = 7, 8, 9 : return 0 + " Hold";
        case card = 10, 'J', 'Q', 'K', 'A' : return -5 +  "Hold"; break; 
      }
  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');