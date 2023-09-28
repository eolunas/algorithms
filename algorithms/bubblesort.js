// Time complex -->  O( n^2 )
// Space complex --> O( n )
// Aux space --> O(1)
let bubleSort = (array) => { //S- O( n ) 
  let length = array.length; // O(1)
  for (let i = 0; i < length; i++) { //O(n)
    for (let j = 0; j < length; j++) { //O(n)
      if (array[j] > array[j + 1]) { // O(1)
        let temp = array[j]; // O(1)
        array[j] = array[j + 1]; // O(1)
        array[j + 1] = temp; // O(1)
      }
    }
  }
  return array; // O(1)
};
