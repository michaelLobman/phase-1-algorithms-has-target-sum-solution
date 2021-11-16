function hasTargetSum(array, target) {
  const seenNumbers = {};

  for(const number of array) {
    const complement = target - number;
    if (complement in seenNumbers) return true
    seenNumbers[number] = true;
  }

  return false

}

// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     // n steps
//     const complement = target - array[i];

//     for (let j = i + 1; j < array.length; j++) {
//       // n * n steps

//       if (array[j] === complement) return true;
//     }
//   }

//   return false;
// }

/* 
  Write the Big O time complexity of your function here
  
  Runtime: O(n^2)
  Space: 

*/

/* 
  hasTargetSum([1,2,3,4], 6)
  seenNumbers = {
    1: true,
    2: true,
    3: true,
  }



  create an object to keep track of numbers we've already seen

  check if any key on our object is the complement
  iterate through each number in the array
  for the current number, identify

*/

/*
  Add written explanation of your solution here
*/

/*
make a function hasTargetSum that checks if two numbers from
the array add up to some target. For example, if array
[1,2,3,4] and target is 6, i should return true b/c 2 and 4 add 
up to 6. if target had been 10, i should return false. for each
number check if there is another number that adds to the target

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, -2, 4], 2));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
