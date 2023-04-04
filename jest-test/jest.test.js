// describe("fibArray", () => {
//     it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
//       const ourArray = [1, 1, 2, 3, 5, 8]
//       const fibLength1 = fibArray(6)
//       expect(fibLength1).toEqual(ourArray.length)
//     })
//   })
//     it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
//       const ourArray1 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//       const fibLength2 = fibArray(10)
//       expect(fibLength2).toEqual(ourArray1.length)
//     })

// describe("fibArray", () => {
//     it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
//       const ourArray = [1, 1, 2, 3, 5, 8]
//       const fibLength1 = fibArray(6)
//       expect(fibLength1).toEqual(ourArray)
//     })
  
//     it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
//       const ourArray1 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//       const fibLength2 = fibArray(10)
//       expect(fibLength2).toEqual(ourArray1)
//     })
// })

//   const fibArray = (length) => {
//     const result = [1, 1];
//         for (let i = 2; i < length; i++) {
//     const nextNumber = result[i - 1] + result[i - 2];
//         result.push(nextNumber);
//       }
//           return result;
//     }

// describe("objectValues", () => {
//   it("returns an array of the values sorted from least to greatest")
//   expect(objectValues(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
//   expect(objectValues(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])

// })

// const objectValues = (obj) => {
//   return Object.values(obj).sort((a, b) => a - b)
// }

// describe('returns an array of the accumulating sum', () => {
//   expect(accumulatedSum([100, -17, -23, -9])).toEqual([100, 83, 60, 51]);
//   expect(accumulatedSum([250, -89, 100, -96])).toEqual([250, 161, 261, 165]);
//   expect(accumulatedSum([])).toEqual([]);
// })
// const accumulatedSum = (array) => {
//   let sum = 0
//   return array.map = (number) => {
//     sum += number
//     return sum
//   }
// }