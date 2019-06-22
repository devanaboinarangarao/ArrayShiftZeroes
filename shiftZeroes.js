function shiftZeroes(array) {
  let count = 0;
  for(let i = 0; i < array.length; i++) {
    if(array[i] != 0) {
      array[count] = array[i];
      count++;
    }
  }
  for(let i = count; i< array.length; i++) {
    array[i] = 0;
  }
  console.log(array);
}

shiftZeroes([5, 0, 0 , 0, 5])
