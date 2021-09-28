/*****************Testing Objects for Properties */

let c ={zop:"f"};
c.hasOwnProperty("f");
console.log(c.hasOwnProperty("zop"));

/**
Modify the function checkObj to test if an object
 passed to the function (obj) contains a specific property (checkProp). 
 If the property is found, return that property's value.
  If not, return "Not Found".
 */
function checkObj(obj, checkProp) {
  // Only change code below this line
 if(obj.hasOwnProperty(checkProp)){
   return obj[checkProp]; 
 }else{return "Not Found"};
  // Only change code above this line
}



var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
    {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];


/*_______________________*Accessing Nested Objects */
var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  myStorage.car.inside
  var gloveBoxContents = myStorage.car.inside["glove box"];
  console.log(gloveBoxContents);



  /******************Accessing Nested Arrays____________ */
  var myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  var secondTree = myPlants[1].list[1];
  console.log(secondTree)




/***********_______Record Collection */


// Setup
var recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: [] //tracks
    },
    5439: {
      albumTitle: 'ABBA Gold'
      
    }
  };
 
  function updateRecords(records, id, prop, value) {
    
    if (value === '') {
      console.log("del");
      delete records[id][prop];
    } else if (prop === 'tracks') {
      records[id][prop] = records[id][prop] || []; // this is called shortcircuit evaluation, see below for explanation
      records[id][prop].push(value);
      console.log("push value")
    } else {
      console.log("records[id][prop] = value")
      records[id][prop] = value;
    }
    return records;
  }
  
  //updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  updateRecords(recordCollection, 5439,'artist','ABBA' );
  /**
   * function updateRecords(records, id, prop, value) {
records[id][prop] = recordCollection
 if([prop] != [id] && value != "" ){
value = [prop]; 
//return prop;
console.log(records[id][prop] + value);

 // }
 // console.log(records)
  return value;
}
return records;
}

   */



            
//Iterate with JavaScript While Loops----------------------------
var o = []; var i = 0;
while(i < 5){o.push(i); i++; 
 // console.log(o);
}



//Add the numbers 5 through 0 (inclusive) 
//in descending order to myArray using a while loop.

// Setup
var myArray = [];

// Only change code below this line

var i = 5;
while(i >= 0){
  myArray.push(i);
   i--; 
 // console.log(i);
}



/*******Iterate with JavaScript For Loops */
var r = []; for(var i = 0; i < 5; i++){
  r.push(i);
  //console.log(r)
};

var myArray = [];
for(var i =1; i <= 5; i++){
  myArray.push(i);
  //console.log(myArray); 
}



/****iterate Odd Numbers With a For Looppppppppppppppppp */
var oo = []; 
for(var i = 0; i < 10; i += 2){oo.push(i); 
 // console.log(oo);
}

//Push the odd numbers from 1 through 9 to myArray using a for loop.
var myArray= [];
for(var i = 1; i < 10; i += 2){
  myArray.push(i);
 // console.log(myArray);
}

//*********Count Backwards With a For Loop */
var irt = [];
for(var i = 10; i > 0; i -= 2){
  irt.push(i);
  //console.log(irt + " " );
}
//Push the odd numbers from 9 through 1 to myArray using a for loop.
var myArray = [];
for(var i = 9; i > 0; i -=2){
  myArray.push(i);
  //console.log(myArray); 9,7,5,3,1
}

//***********Iterate Through an Array with a For Loop */
/**Remember that arrays have zero-based indexing, 
 * which means the last index of the array is length - 1.
 *  Our condition for this loop is i < arr.length, 
 * which stops the loop when i is equal to length. 
 * In this case the last iteration is i === 4 i.e. 
 * when i becomes equal to arr.length - 1 and outputs 6 to the console.
 *  Then i increases to 5, and the loop terminates 
 * because i < arr.length is false. */


let ri = [10,9,8,7,6]; 
for(var i = 0; i < ri.length; i++){
 // console.log(ri[i], "---------");
}

var myArr = [2,3,4,5,6];

var total = 0;
for (var i = 0; i < myArr.length; i++){
  
  total += myArr[i];
 //console.log( total );
} 



/////////////////Nesting For Loops>>>>>>>>>>>>>>>>>>>>>>>>
var arr = [[1,2],[3,4],[5,6]];
for(var i =0; i < arr.length;i++){
  for(var j = 0; j < arr[i].length; j++){
  //  console.log(arr[i][j]);
  }
}
/**
multiplyAll([[1],[2],[3]]) should return 6

Passed
multiplyAll([[1,2],[3,4],[5,6,7]]) should return 5040

Passed
multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]]) should return 54
 */
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){ 
    product *=  arr[i][j] ;
    //console.log(product);
  }
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);



/****Iterate with JavaScript Do...While Loopsjjjjjjjjjjjj */
var ww =[]; 
var i =0;
do{ ww.push(i); i++; 
//console.log(ww);
}while(i < 4);


// Setup
var myArray = [];
var i = 10;

// Only change code below this line
 do{
  myArray.push(i);
  i++;
 // console.log(myArray);
}while (i < 5)



////////////////Replace Loops using Recursion___________________
//multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]

function mult (arr, n){
  //base case when returning without calling function again
  if(n <= 0){
    return 1;
  }else{
    return mult(arr, n-1) * arr[n - 1];
  }
}


function sum(arr, n){
  if(n <= 0){
    return 0;
  }else{
    return sum(arr, n - 1) + arr[n - 1]
  }
  /**sum([1], 0) should equal 0.
   sum([2, 3, 4], 1) should equal 2.
sum([2, 3, 4, 5], 3) should equal 9. */

}
 console.log(sum([2, 3, 4], 1));