/**
 * 
 * 
         * Hints
        Hint 1
        The arguments object is Array-like object
        that only inherits Array.length property.
        Hence consider converting it to an actual Array.

        Hint 2
        Deem writing a helper function that returns
        the symmetric difference of two arrays on
        each call instead of attempting to difference 
        all sets simultaneously.

        Hint 3
        Apply helper function against the created
        arguments array reducing its elements 
        pairwise recursively to form the expected output.

        Note
        In the event of odd number of sets the
        symmetric difference will include 
        identical elements present in all given sets. For instance;

        A = {1, 2, 3}
        B = {2, 3, 4}
        C = {3, 4, 5}

        (A &Intersection; B) &Intersection; C = {1, 4} &Intersection {3, 4, 5}
        A &Intersection; B = {1, 3, 5}
 */

/**Find the Symmetric Difference */
function sym(...args) {
            let uu = args;
        //console.log(uu)
        broke(uu);
        
            //return args;
}
        
let broke = (a) => {
        let j = a[1];
        let i = 0;
        let ro = a;
        ro.filter(e => e === e.includes[j])
        console.log(ro);
        /* for(i in ro){
        ro.filter(e => e.includes(j[i]));
            console.log( ro );
            
        }  */  
        
}
  
sym([1, 2, 3], [5, 2, 1, 4]);

