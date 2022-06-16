/**************Learn About Functional Programming__________ */


// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTeaa = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTeaa(40);
console.log("s");
 ;
// Only change code above this line


/*******Understand Functional Programming Terminology:_::___-__________ */

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';


const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea,27)

const tea4BlackTeamFCC = getTea(prepareBlackTea,13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
/**[ 'greenTea',
  'greenTea',
  'greenTea',
 etc etc etc ]
   [ 'blackTea',
  'blackTea',
  'blackTea',
  etc etc etc
  'blackTea' ]
 */



/***Understand the Hazards of Using Imperative Code---------- */
// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  //{ tabs: [ 'Netflix', 'YouTube' ] }
//{ tabs: [ 'GMail', 'Docs', 'freeCodeCamp', 'new tab' ] }
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {

  // Only change code below this line

  const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  //[ 'Netflix', 'YouTube' ]
[ 'GMail' ]
const tabsAfterIndex = this.tabs.splice(1, index + 4); // Get the tabs after the tab
//[ 'GMail', 'Work mail', 'Docs', 'freeCodeCamp' ]
  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
//[ 'Netflix', 'YouTube' ][ 'GMail', 'Docs', 'freeCodeCamp' ]
  // Only change code above this line

  return this;
 };

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
/**
 *['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']
 */
  //Avoid Mutations and Side Effects Using Functional Programming___--------
  // The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line
let o = fixedValue;
o++;
console.log(o);
return o;

  // Only change code above this line
}

incrementer()

/********Pass Arguments to Avoid External Dependence in a Function ------ */
// The global variable
let fixedValueo = 4;

// Only change code below this line
function incrementer(fixedValueo) {
fixedValueo++
return fixedValueo;
  // Only change code above this line
}

/*  Refactor Global Variables Out of Functions -------------------------*/
/**If you’re having trouble with changing bookList, 
try using a copy of the array in your functions. */
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, o) {
  let newL = [...bookList];
    newL.push(o);
    console.log(newL);
    return newL;
  // Change code above this line
}

// Change code below this line
function remove(bookList, o) {
  //console.log(bookName);
  const book_index = bookList.indexOf(o); 
  if (book_index > 0) { 
 let z = [...bookList];
    z.splice(book_index , book_index);
   console.log(z);
    return z; 

    // Change code above this line
    }
}


add(bookList, "A Brief History of Time");
remove(bookList, "On The Electrodynamics of Moving Bodies");
remove(add(bookList, "A Brief History of Time"));
//["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]
//["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]
//["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]

//Use the map Method to Extract Data from an Array-----------------
//params(currentElement, indexOfElement, array) 3
/**
 * When the callback is used, it is passed three arguments. 
 * The first argument is the current element being processed.
 * the second is the index of that element and the 
 * third is the array upon which the map method was called.
 */
const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];
  
  const names = users.map(user => user.name);
  console.log(names); //[ 'John', 'Amy', 'camperCat' ]

// The global variable
const watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
  ];
  
  // Only change code below this line
  const ratings = watchList.map(item => ({
    title: item["Title"],
    rating: item["imdbRating"]
  }));
  
  console.log(ratings)
  // Only change code above this line
  



  //Implement map on a Prototype---------------------------------
//Array.prototype.myMap()  <- .this

// The global variable
const is = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  this.forEach(function(x) {
    if (callback(x) ) {
      newArray.push(x * 2);
    }
  });
  // Only change code above this line
  return newArray;
};

const new_is = is.myMap(function(item) {
  return item * 2;
});

/**
 * Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
};
person1.farewell();
*/
/*

 * const array1 = [1, 4, 9, 16];
 // pass a function to map
  const map1 = array1.map(x => x * 2);
  console.log(map1);
// expected output: Array [2, 8, 18, 32]


const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));

 */


//Use the filter Method to Extract Data from an Array------------
// The global variable
const watchList1 = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Only change code below this line


let filteredList;
let r = [...watchList];
 r.filter(el => el.rating > 8.0,
 );
 filteredList  = r.map(item => ({
  title: item["Title"],
  rating: item["imdbRating"]
 }));
filteredList = filteredList.filter(el => el.rating > 8.0,
 )
 
 /**
  [ { title: 'Inception', rating: '8.8' },
  { title: 'Interstellar', rating: '8.6' },
  { title: 'The Dark Knight', rating: '9.0' },
  { title: 'Batman Begins', rating: '8.3' } ]
  */
 
 // Only change code above this line

console.log(filteredList);

//Implement the filter Method on a Prototype----------------------
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
  // Only change code below this line

  let index = s.indexOf(98);
  if (index > - 1) {
    s.splice(index, 1)
  }
  const newArray = s;
  console.log(s, newArray)

  /**let newArray = [];
  this.forEach(function(x) {
    if (callback(x) == true) {
      newArray.push(x);
    }
  }); */
  /**for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) === true) {
      newArray.push(this[i]);
    }
  } */

  // Only change code above this line
  return newArray;
};

const new_s = s.myFilter(function (item) {
  return item % 2 === 1;
});

//Return Part of an Array Using the slice Method...................
function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line

let r = anim.slice(beginSlice, endSlice);
console.log(r)
return r
  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);


//Remove Elements from an Array Using slice Instead of splice-------
function nonMutatingSplice(cities) {
  // Only change code below this line
 
 
 let r = cities.slice(0,3);
 console.log(r)
  //return cities.splice(3);
return r  //[ 'Chicago', 'Delhi', 'Islamabad' ]
  // Only change code above this line
} 

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);


//Combine Two Arrays Using the concat Method------------------

function nonMutatingConcat(original, attach) {
  // Only change code below this line

let r = original.concat(attach);
console.log(r); //[ 1, 2, 3, 4, 5 ]
return r;
 // Only change code above this line
}
const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);


//Add Elements to the End of an Array Using concat Instead of push-------
function nonMutatingPush(original, newItem) {
  // Only change code below this line
  
  let r = original.concat(newItem)
  console.log(r); //[ 1, 2, 3, 4, 5 ]
  return r;

  // Only change code above this line
}

const first5 = [1, 2, 3];
const second5 = [4, 5];
nonMutatingPush(first, second);


//Use the reduce Method to Analyze Data----------------------
const watchList2 = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

function getRating(watchList) {
  // Only change code below this line
  let averageRating;
let r = [...watchList];

 averageRating  = r.map(item => ({
   title: item["Title"],
  director: item["Director"],
  rating: parseInt(item["imdbRating"])
 }));
  averageRating = averageRating.filter(el => el.director == "Christopher Nolan");
 
 console.log(averageRating)

/* averageRating.reduce(getSum, 0);
 let getSum = (rating, num) => { 
  console.log(rating + Math.round(num))
  return rating + Math.round(num)}
console.log(getSum); */


  // Only change code above this line
  return averageRating;
}

console.log(getRating(watchList));

/**PARSE
 * ['1','2','3'].map(function(num) { return parseInt(num, 10); });
 * myString = '129' 
console.log(parseInt(myString)) // expected result: 129
**PARSE
var arr = ["1", "2", "3"];
arr = arr.map(Number);
console.log(arr); // [1, 2, 3]

 * REDUCE
 * const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

 * AVERAGE:
const average = (array) => array.reduce((a, b) => a + b) / array.length;
console.log(average([1,2,3,4,5]));


let filteredList;
let r = [...watchList];

 filteredList  = r.map(item => ({
  title: item["Title"],
  rating: item["imdbRating"]
 }));
filteredList = filteredList.filter(el => el.rating > 8.0,
 )} arr 
*/

//Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
/**
 You will need to filter() the realNumberArray for 
positive integers (decimals are not integers).
Hint 2
You will need to map() the values from your filter()
 function to the variable squaredIntegers.
Hint 3
Remember the magic of chaining functions. */

const squareList = arr => {
  // Only change code below this line
  const io = arr.filter(i => i > 0);
  let squaredIntegers = io.map(i => i * i);   
  console.log(squaredIntegers); 
  return squaredIntegers;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);


/**Math.sqrt...............
 * function calcHypotenuse(a, b) {
  return (Math.sqrt((a * a) + (b * b)));
}

console.log(calcHypotenuse(3, 4));
// expected output: 5
 const roots = numbers.map((num) => Math.sqrt(num));

 parseInt(el, 10) === el)
*/

/**isInteger----------------
 * 
var arr = [2, 5, 5.5, 3, 6.8, 0 , -5];

function filtrate(el) {
  return (parseInt(el, 10) === el) && el > 0;
}

console.log(arr.filter(filtrate)); */


//Sort an Array Alphabetically using the sort Method--------------*****

function alphabeticalOrder(arr) {
  // Only change code below this line
  return arr.sort(function(a,b){  //callback function
    return a && b > 0 ? 1 : a < b ? -1:0;
  })
  // Only change code above this line
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
                //['a', 'a', 'c', 'd', 'g', 'z']


// a,b < 0 ? a,b  -1
// a,b > 0 ? b,a   1
// a,b = 0 ? a,b   0
/**function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 3, 4]); */



//Return a Sorted Array Without Changing the Original Array*************
//remember that slice and concat return a new array
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
let i = [...arr];
i.concat(arr)
return i.sort(function(a,b){
  return a - b;
})
  // Only change code above this line
}

console.log(nonMutatingSort(globalArray)); //2,3,5,6,9



//Split a String into an Array Using the split Method******************
function splitify(str) {
  // Only change code below this line
let o = str.split(/[- ,]/); 
console.log(o) //[ 'Hello', 'World', 'I', 'am', 'code' ]
// Only change code above this line
}

splitify("Hello World,I-am code"); 

/**
const otherString = "How9are7you2today"; 
const byDigits = otherString.split(/\d/); //["How", "are", "you", "today"]
 */


//Combine an Array into a String Using the join Method-----------------------

/**
Array.prototype.join() 
String.prototype.split() 
Regular Expressions 
**/

function sentensify(str) {
  // Only change code below this line
  let or = [];
  or.push(str);
  let u = or.join().split(/[-,.]/); 
  let g = u.join(' ')
  console.log(g)
  return g;

  // Only change code above this line
}

sentensify("May-the-force-be-with-you");


/**const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
 
var str = 'How are you';
var replaced = str.split(' ').join('_');

*/


//Apply Functional Programming to Convert Strings to URL Slugs***********

// Only change code below this line
function urlSlug(title) {
  let u = [];
  u.push(title.toLowerCase())
  let r = u.join('-'); 
  let o = r.split(' ').join('-'); 
  //(/\s+/)
  console.log(r, o);
  return o;
  }
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");