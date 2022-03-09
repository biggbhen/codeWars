// Failed Sort - Bug Fixing #4

var sortArray = function (value) {
  return value
    .split('')
    .sort((c, p) => c - p)
    .join('');
};
sortArray('34251');
