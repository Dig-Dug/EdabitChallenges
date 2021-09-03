/*(((((((Create Strings using Template Literals))))))) */
const person = {
    name: "Zodiac Hasbro",
    age: 66
  };
  //you can include other expressions
  //in your string literal, for example ${a + b}.

  const greeting = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`;
  
  console.log(greeting);


  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
   //-> const failureItems = [];
   const failureItems = [`<li class="text-warning">${result.failure[0]}</li>`,
   
                         `<li class="text-warning">${result.failure[1]}</li>`,
                         `<li class="text-warning">${result.failure[2]}</li>`
                        ];
    failureItems.forEach(arr => console.log(arr));
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);

  /**((Write Concise Object Literaloooooooooooooooooooooooooooooooooooooooo
 Declarations Using Object Property Shorthand)) */


 const getMousePosition = (x, y) => ({
    x: x,
    y: y
  });  
  //rewritten
  // const getMousePosition = (x,y) => ({x,y});


   const createPerson = (name,age,gender) =>{
        // Only change code below this line
       return {
               name,age,gender
                }; 
      {          
                   
       // Only change code below this line
   }}



   /*//((((((Write Concise Declarative Functions with ES6
W)))))) iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii*///






