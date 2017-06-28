function linearSearch (arr, value) {
//loop over entire length of array
  for (let i=0; i<arr.length; i++) {
    //if you find value, return index where it's found
    if(arr[i] == value) {
      return i;
    }
  }
  //otherwise return false if value isn't in the array
  return false;
}
[1, 3, 4, 6, 8, 10, 12, 20]
function binarySearch(arr, value, start, end) {
  //if start is undefined it's 0, otherwise it's the inputted start, then assign to variable start
  let start = start === undefined ? 0 : start;
  //same as above but with end
  let end = end === undefined ? 0 : end;

//out of bounds of array
  if (start > end) {
    return false;
  }
//halve the array
  const index = Math.floor((start + end)/2);
  const item = arr[index];
  
}
