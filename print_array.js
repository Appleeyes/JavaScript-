// Build a simple loop, inside a function, that takes an array and prints the value of the array to the console.

function print_array(array){
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
}

let myArray = ['ball', 'basket', 'book', 'bar', 'boy'];
print_array(myArray);
