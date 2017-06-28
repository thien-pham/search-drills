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

function binarySearch(arr, value, start, end) {
  //if start is undefined it's 0, otherwise it's the inputted start, then assign to variable start
  var start = start === undefined ? 0 : start;
  //same as above but with end
  var end = end === undefined ? arr.length : end;


//out of bounds of array
  if (start > end) {
    return false;
  }
//halve the array
  const index = Math.floor((start + end)/2);
  const item = arr[index];
  console.log(item);
  
}

const searchArr = [1, 3, 4, 6, 8, 10, 12, 20];

// console.log(binarySearch(searchArr,12,0,searchArr.length));

function depthFunc(values=[], tree){
   
  if(tree.left){
    if(node.left){
    depthFunc(values.push(node.left));
    }
    //values [node.left1, node.left2, node.left3]
  }   
  //if all values of tree.left are in array search 
  //through tree.right branch
  else {
    depthFunc(values.push(node.right));
  }
  
}

  
  //then search through right branch

