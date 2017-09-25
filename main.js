var arr = [6, 5, 8, 9, 2];

var bubbleSort = function(arr) {
  var swapped = false;
	do {
  arr.forEach(function (num, i) {
  	if (num > arr[i + 1]) {
    var temp = num;
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      swapped = true;
    }
  })
  } while (swapped === true) {
  	return arr;
  }
}

// bubbleSort(arr);
