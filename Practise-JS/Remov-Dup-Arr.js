// Remove Duplicate Values  Aarry
function removeDup(arr) {
  return [...new Set(arr)];
}
console.log(
  removeDup([1, 2, 1, 3, 4, 5, 2, 7, 6, 7, 6, 3, 1, 2, 3, 4, 3, 2, 1])
);

//Output :- (1 2 3 4 5 6 7)

