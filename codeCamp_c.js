/*****************Testing Objects for Properties */

let c ={zop:"f"};
c.hasOwnProperty("f");
console.log(c.hasOwnProperty("zop"));

/**Yakko
                                                  .mMMMMm.
                                               .mMMMMMMMMMMMm
          ....                               .mMMMMMMMMMMMMMM.
       .mMMMMMm.                           .mMMMMMMMMMMMMMMMM'
     .mMMMMMMMM)                          .MMMMMMMMMMMMMMM/'
   (MMMMMMMMMM/                          .MMMMMMMMMMMM"'
  mMMMMMMMMMM/                           (MMMMMMMMM"'
 /MMMMMMMMMM/                            |MMMMMMM/
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
      //artist, tracks
    }
  };
  //To access the value of a key in this
  // object, you will use records[id][prop].
  // Only change code below this line
  //obj literal"records" ,id, prop:artist|| track, value
  function updateRecords(records, id, prop, value) {
    //records[id][prop] = recordCollection
     if(prop != id.tracks && value != "" ){
    value = recordCollection.tracks;
    
    console.log(records[id][prop]);
    
    return records;
  }}
  
  //updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  updateRecords(recordCollection, 5439,'artist','ABBA' );



            
