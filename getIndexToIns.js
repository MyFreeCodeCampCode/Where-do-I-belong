
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
     return a - b;
  });
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= num)
      return i;
  }
  
   return i; //returns index if num is greater then all elements in arr
}

//testcase
//getIndexToIns([5, 3, 20, 3], 5);
