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
    return -1;
  }
//halve the array
  const index = Math.floor((start + end)/2);
  const item = arr[index];
  console.log(item);
      console.log(start, end);
    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
};
  


const searchArr = [1, 3, 4, 6, 8, 10, 12, 20];

// console.log(binarySearch(searchArr,12,0,searchArr.length));
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

 depthFirst(values=[]){
  if(this.left){
    values = this.left.depthFirst(values);
  }
  //this just pushed in the root node
    values.push(this.value);
  if(this.right) {
  //then search through right branch
    values = this.right.depthFirst(values);
  }
  return values; 
}
}

 /*const library = [
    "005.133 Mike Cowlishaw: The REXX Language",
    "005.133 Sams: Teach Yourself C++ In 21 Days",
    "005.133 Bjarne Stroustrup: The C++ Programming Language",
    "005.2762 Douglas Crockford: JavaScript: The Good Parts",
    "005.2762 David Flanagan: JavaScript: The Definitive Guide",
    "005.44684 Meinhard Schmidt: Windows Vista for Dummies", //It certainly is...
    "220.52081 Zondervan: NIV Study Bible",
    "231.7652 Dr Russell Humphries: Starlight and Time",
    "623.82509051 Frederick Thomas Jane: Jane's Fighting Ships", //So far, the ships are winning.
    "796.8092 Chuck Norris: The Official Chuck Norris Fact Book",
    ] 
    */

