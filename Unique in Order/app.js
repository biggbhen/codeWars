/* Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.*/

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B'];
// uniqueInOrder('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D'];
// uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3];

var uniqueInOrder = function (iterable) {
  let strArr;
  let newOrder = [];

  if (typeof iterable === 'string') {
    strArr = iterable.split('');
  } else {
    strArr = iterable;
  }
  for (let i = 0; i < strArr.length; i++) {
    const element = strArr[i];
    const nextIndex = i + 1;
    // console.log(element);
    if (newOrder[newOrder.length - 1] != element) {
      newOrder.push(strArr[i]);
    }
  }
  return newOrder;
  // console.log(newOrder);
};
// uniqueInOrder([1, 2, 2, 3, 3]);
// uniqueInOrder('AAAABBBCCDAABBB');
// uniqueInOrder('ABBCcAD');
