// Time complex -->  O( n )
// Space complex --> O( n ) - O( 1 ) 
// Aux space --> Space complex - input space = O(1)
let linearSearch = (array, key) => { //S-O(n)
  for (let index = 0; index < array.length; index++) {  //O(n) //S-O(1)
    if (array[index] === key) { // O(1) 
      return index; // O(1)
    }
  }
  return -1; // O(1)
};
