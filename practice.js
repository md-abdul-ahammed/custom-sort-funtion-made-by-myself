// made custom funtion for sort number array (ascending)
const sort = (arr) => {
  let sortedArray = [arr[0]];
  let lowestNumber = arr[0];
  let highestNumber = 0;
  for (let i = 1; i < arr.length; i++) {
    if (lowestNumber < arr[i]) {
      if (highestNumber < arr[i]) {
        sortedArray.push(arr[i]);
        highestNumber = arr[i];
      } else {
        for (let j = 0; j < sortedArray.length; j++) {
          if (sortedArray[j] > arr[i]) {
            sortedArray.splice(j, 0, arr[i]);
            break;
          }
        }
      }
    } else {
      lowestNumber = arr[i];
      sortedArray.unshift(arr[i]);
    }
  }
  return sortedArray;
};

const array = [2, 23, 45, 12, 33, 1, 2, 33, 3, 923, 12];
const sortedValue = sort(array);
console.log(sortedValue);
