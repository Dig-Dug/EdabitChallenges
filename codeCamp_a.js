/*******Understanding Boolean Values */
function welcomeToBooleans() {
/**Modify the welcomeToBooleans function so that it returns true
 *  instead of false when the run button is clicked. */

    return true; // Change this line
  
    // Only change code above this line
  }


  /*********Use Conditional Logic with If Statements */

  function trueOrFalse(wasThatTrue) {
    // Only change code below this line
   
  if(wasThatTrue == true){
      return "Yes, that was true";
  }
      return "No, that was false";
  
  // Only change code above this line
  
  }

  /***********Comparison with the Equality Operator**************** */
  // Setup
  // Setup
function testEqual(val) {
  if (val==12) { 
    return "Equal";
  }
  return "Not Equal";
}

testEqual(12);

/**********Comparison with the Strict Equality Operator********************* */
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(7);

/*********Practice comparing different values*************** */
// Setup
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, 10);


/*******Comparison with the Inequality Operator************* */
// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

/********Comparison with the Strict Inequality Operator************* */
// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

/*******Comparison with the Greater Than Operator*********** */

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10 ) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

/**********Comparison with the Greater Than Or Equal To Operator***************** */
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

/**********Comparison with the Less Than Operator*********** */

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);


/**********Comparison with the Less Than Or Equal To Operator**************** */
/**
 * function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

 */


/**Comparisons with the Logical And Operator******************** */
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
   
      return "Yes";
    
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

/**Comparisons with the Logical Or Operator=================== */
function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }
// Only change code above this line
  return "Inside";
}

testLogicalOr(15);

/**Introducing Else Statements:::::::::::::::::::::::::::: */
function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }else {
    result = "5 or Smaller";
  }
// Only change code above this line
  return result;
}

testElse(4);

/******Introducing Else If Statements================= */
/**
 * function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }
else if (val < 5) {
    return "Smaller than 5";
  }
else{
return "Between 5 and 10";
}
  }
testElseIf(7);
 */

/**Logical Order in If Else Statements;;;;;;;;;;;;;;;;;;;;;;; */

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
    
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

/*******Chaining If Else Statements************ */
function testSize(num) {
  // Only change code below this line
if (num < 5){return "Tiny"}
else if(num < 10){return "Small"}
else if(num < 15){return "Medium"}
else if(num < 20){return "Large"}
else if(num >= 20){return "Huge"}

return "Change Me";
  // Only change code above this line
}

testSize(7);

