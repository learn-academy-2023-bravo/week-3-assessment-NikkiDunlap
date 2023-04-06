// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

  // Pseudocode:
    // - Create a function called fibArray that takes (length) as the paramter, which dictates the amount of numbers that should be in the Fibonacci sequence
    // - Use "result" as the variable.
    // - Set it equal to an array of [1, 1]
    // - Use "for" loop that starts with an index of 2 because it is the third element of the given array up to the length & then subtract 1
    // - In every iteration of the loop, calculate the next number of the sequence by adding the 2 previous numbers in the result array
    //  Use .push() to add the number to the end of the result array
    // Return 


  // a) Create a test with expect statements for each of the variables provided.
  describe("fibArray", () => {
    it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
      const ourArray = [1, 1, 2, 3, 5, 8]
      const fibLength1 = fibArray(6)
      expect(fibLength1).toEqual(ourArray.length)
    })
  })
    it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
      const ourArray1 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
      const fibLength2 = fibArray(10)
      expect(fibLength2).toEqual(ourArray1)
    }) 


// b) Create the function that makes the test pass.
   
    const fibArray = (length) => {
    const result = [1, 1];
        for (let i = 2; i < length; i++) {
    const nextNumber = result[i - 1] + result[i - 2];
        result.push(nextNumber);
      }
        return result;
    } // output: 
    //   PASS  ./jest.test.js
    //   fibArray
    //     ✓ returns an array that length containing the numbers of the Fibonacci sequence (2 ms)
    //     ✓ returns an array that length containing the numbers of the Fibonacci sequence
    
    // Test Suites: 1 passed, 1 total
    // Tests:       2 passed, 2 total
    // Snapshots:   0 total
    // Time:        0.157 s, estimated 1 s



// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

  // Pseudocode:
    // Create a function called objectValues that takes obj as the input
    // Return an array of the numbers in the same order as the obj's properties
    // Use .sort() to sort the elements within the array from smallest to largest
    // Create a function that compares all elements in the adjacent array
    // Function subtracts b from a and gives us the difference between the two.
    // If the difference is negative, a is sorted before b, and if the difference is positive, b is sorted before a. If the difference is zero, the order of the elements will not change.
    // The sorted array is our return
    // The return should be the first "length" numbers in the Fib sequence


// a) Create a test with expect statements for each of the variables provided.
describe("objectValues", () => {
  it("returns an array of the values sorted from least to greatest")
  expect(objectValues(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
  expect(objectValues(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])

})
const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

const objectValues = (obj) => {
  return Object.values(obj).sort((a, b) => a - b)
}   // output: 
    //   PASS  ./jest.test.js
    //   objectValues
    //     ✓ returns an array of the values sorted from least to greatest") (2 ms)
    //     ✓ "returns an array of the values sorted from least to greatest
    
    // Test Suites: 1 passed, 1 total
    // Tests:       2 passed, 2 total
    // Snapshots:   0 total
    // Time:        0.150 s, estimated 1 s

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

  // Pseudocode:
    // Create function called accumulatedSum
    // Create an empty array to hold the accumulated sums
    // Use "for" loop to loop through each element in the input array
    // Add the current elememnt's value to the current sum
    // Use .push() to push the current sum to the result array
    // Return the array of accumultd sums

// a) Create a test with expect statements for each of the variables provided.
describe('returns an array of the accumulating sum', () => {
  expect(accumulatedSum([100, -17, -23, -9])).toEqual([100, 83, 60, 51]);
  expect(accumulatedSum([250, -89, 100, -96])).toEqual([250, 161, 261, 165]);
  expect(accumulatedSum([])).toEqual([]);
})

// const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

// const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

// const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

const accumulatedSum = (array) => {
  let sum = 0
  return array.map = (number) => {
    sum += number
    return sum
  }
}