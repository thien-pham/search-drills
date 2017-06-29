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

/*function linearSearch2 (arr, value) {
//loop over entire length of array
  for (let i=0; i<arr.length; i++) {
    //if you find value, return index where it's found
    if(arr[i] == value && ) {

    }
      return i;
  }
  //otherwise return false if value isn't in the array
  return false;
}*/

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
  //console.log(item);
      //console.log(start, end);
  if (item == value) {
    return index;
  }
  else if (item < value) {
    return binarySearch(arr, value, index + 1, end);
  }
  else if (item > value) {
    return binarySearch(arr, value, start, index - 1);
  }
}



const searchArr = [1, 3, 4, 6, 8, 10, 12, 20];

// console.log(binarySearch(searchArr,12,0,searchArr.length));
class BinaryTree {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(key, value){
  //node is null
    //make the inserted key the current key
    if(this.key === null) {
      this.key = key;
      this.value = value;
    }

  //key < current key
    //insert key using binary tree constructor
    else if(key < this.key){
      if(this.left === null){
        this.left = new BinaryTree(key, value, this);
      }
      else {
        this.left.insert(key, value);
      }
    }
  //key > current key
    else {
      if(this.right === null){
        this.right = new BinaryTree(key, value, this);
      }
      else {
        this.right.insert(key, value);
      }
    }
  }

  inOrder(){
    //if a left node exists, set node.left as this.node 
    //call inOrder
    if(this.left){
      inOrder(this.left);
    }
    else{
      //this.right
    }

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

const numArr = [89, 30, 25, 32, 72, 70, 51, 42,
  25, 24, 53, 55, 78, 50, 13, 40,
  48, 32, 26, 2, 14, 33, 45, 72, 56,
  44, 21, 88, 27, 68, 15, 93, 98, 73,
  28, 16, 46, 87, 28, 65, 38, 67, 16,
  85, 63, 23, 69, 64, 91, 9, 70, 81,
  27, 97, 82, 6, 88, 3, 7, 46, 13, 11,
  64, 31, 26, 38, 28, 13, 17, 69, 90,
  1, 6, 7, 64, 43, 9, 73, 80, 98, 46,
  27, 22, 87, 49, 83, 6, 39, 42, 51,
  54, 84, 34, 53, 78, 40, 14, 5, 76, 62];
//console.log(linearSearch(numArr, 70));
let sortedArr = numArr.sort();
// console.log(sortedArr);
// console.log(binarySearch(sortedArr, 2));

//Exercise 4 Dewey Decimal 

const library = [
  '005.133 Mike Cowlishaw: The REXX Language',
  '005.133 Sams: Teach Yourself C++ In 21 Days',
  '005.133 Bjarne Stroustrup: The C++ Programming Language',
  '005.2762 Douglas Crockford: JavaScript: The Good Parts',
  '005.2762 David Flanagan: JavaScript: The Definitive Guide',
  '005.44684 Meinhard Schmidt: Windows Vista for Dummies',
  '220.52081 Zondervan: NIV Study Bible',
  '231.7652 Dr Russell Humphries: Starlight and Time',
  '623.82509051 Frederick Thomas Jane: Jane\'s Fighting Ships',
  '796.8092 Chuck Norris: The Official Chuck Norris Fact Book',
];

const library2 = [
      {dewey: '005.133', title: 'Mike Cowlishaw: The REXX Language'},
      {dewey: '005.133', title: 'Sams: Teach Yourself C++ In 21 Days'},
      {dewey: '005.133', title: 'Bjarne Stroustrup: The C++ Programming Language'},
      {dewey: '005.2762', title: 'Douglas Crockford: JavaScript: The Good Parts'},
      {dewey: '005.2762', title: 'David Flanagan: JavaScript: The Definitive Guide'},
      {dewey: '005.44684', title: 'Meinhard Schmidt: Windows Vista for Dummies'},
      {dewey: '220.52081', title: 'Zondervan: NIV Study Bible'},
      {dewey: '231.7652', title: 'Dr Russell Humphries: Starlight and Time'},
      {dewey: '623.82509051', title: 'Frederick Thomas Jane: Jane\'s Fighting Ships'},
      {dewey: '796.8092', title: 'Chuck Norris: The Official Chuck Norris Fact Book'}
];
//halve the array, the book you want is at that test case index, return that index
//greater than
//less than

// else if (item < value) {
//     return binarySearch(arr, value, index + 1, end);
// }
// else if (item > value) {
//     return binarySearch(arr, value, start, index - 1);
// }
function searchLib(lib, dewey, title, start, end) {
    //  var start = 0;
    //  var end = lib.length;
    //if start is undefined it's 0, otherwise it's the inputted start, then assign to variable start
  var start = start === undefined ? 0 : start;
    //same as above but with end
  var end = end === undefined ? arr.length : end;
    //  loop through entire length of library
  const index = Math.floor((start+end) / 2);
//if dewey is duplicate, then check title
  if (lib[index].dewey == dewey) {
    if (lib[index].title == title) {
         return index;
       }
  }
  else if (lib[index].dewey < dewey) {
    return searchLib(lib, dewey, title, index + 1, end);
  }

  else if (lib[index].dewey > dewey) {
    return searchLib(lib, dewey, title, start, index - 1);
  }
  else {
    return -1;
  }
}

//console.log(searchLib(library2, "005.133",
//     "Bjarne Stroustrup: The C++ Programming Language", 0, library2.length));
let ex4Array = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
