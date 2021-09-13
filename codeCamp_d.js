/////*****Profile Lookup       ****** */

/**Yakko
                                                  .mMMMMm.
                                               .mMMMMMMMMMMMm
          ....                               .mMMMMMMMMMMMMMM.
       .mMMMMMm.                           .mMMMMMMMMMMMMMMMM'
     .mMMMMMMMM)                          .MMMMMMMMMMMMMMM/'
   (MMMMMMMMMM/                          .MMMMMMMMMMMM"'
  mMMMMMMMMMM/                           (MMMMMMMMM"'
 /MMMMMMMMMM/                            |MMMMMMMM/
 MMMMMMMMMM/                             MMMMMMMM/
(MMMMMMMMMM(                            /MMMMMMM/                        
 MMMMMMMMMM|                            |MMMMMM"
 \MMMMMMMMM\              .mmmm..      |MMMMM`
  \MMMMMMMMMM.          .mMMMMMMMMm..mMMMm.MM/
   \MMMMMMMMM\.       mMMMMMMMMMMMMMMMMMMMMMm`
     \MMMMMMMMM.    .mMMMMMMMM"""MMMMMMMMMMMMMm
      `?MMMMMMMMm  mMMMMMMMM"'    "MMMMMMMMMMMMm.
        `"MMMMMMMm/MMMMMMM/'        \MMMMMMMMMMMM.
          `\MMMMM/MMMMMM"'           `MMMMMMM"""Mm.
            `\MM/MMMMMM/             `MMMM"'   '\M.
              ./MMMMMM/'               `"'        '\
              /MMMMMMM'                             \
             /MMMMMMM/                              `,
            /MMMMMMMM                                |
           .MMMMMMMMM                                )
           (MMMMMMMM|                                |
           |MMMMMMMM|.                               )
           |MMMMMMMMM|          oOo    oOo.         .'                  
           |MMMMMMMMM|         (OOOo   OOOO.        /
           (MMMMMMMMM\          OOOO.  OOOO).      '
           \MMMMMMMMMM         `OOOO   `OOO'      /
     x..   `\MMMMMMMMMm         `OO"    _"'__    ./Mm._______
     \MMMmm.MM"'     '\           ..**"""""***. <"""",MMMM/'  .
      \MMMMMM'                   .**"     ,'****        ')mMMMM'
       `\MMM(                    (**.__.******"'         )MMM/
      xmm>MMM\                   `********""'           )M/'
       `\MMMMMm,                    """                ,'M'
            `-"Mm.                                   ./"'
                  `\.                              ,/'
                     `\.                       _,/'
                        `.        /`     _,-/"'
                         M\      ( \   /'
                         MMm.     `'  /
                         MMMMm.     ,'
                         MMMMMMMmmmMM                                                                                   
                         MMMMMMMmmmMM
                         MMMMMMMMMMMM */

// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
  // Only change code below this line
for( var i =0; i < contacts.length -1; i++){
    if(name = contacts[i].hasOwnProperty("firstName")){
        if(name = prop[i]) { 
            console.log("@@@")
        return contacts[i];
        
        }
   
    }
}
console.log(name, prop);
return "No such property";
  // Only change code above this line
}

lookUpProfile("Akira", "likes");
/*
if(name[i].hasOwnProperty("firstName")){
    console.log("@@@")
return contacts[i];
}*/