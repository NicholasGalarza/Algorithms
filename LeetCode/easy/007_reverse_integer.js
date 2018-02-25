/**
 * @param {number} x
 * @return {number}
 */
// const reverse = (x) => {
//   if (x === 0) return 0

//   const MAX = 2147483647

//   let positive = (x > 0) ? true : false,
//     number = Math.abs(x).toString().split("").reverse()

//   const removeLeadingZeros = (x) => {
//     if (x[0] === '0') {
//       x.shift()
//       removeLeadingZeros(x)
//     }
//     return x
//   }

//   number = Number.parseInt(removeLeadingZeros(number).join(""))
//   number = (positive) ? number : -1 * number
//   return (Math.abs(number) < MAX) ? number : 0
// };

/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  const isNegative = (x < 0)
  const MAX_RANGE = 2147483647
  
  if (isNegative) x = x * -1
  
  let reversedValue = 0
  
  while (x > 0) {
    reversedValue = (reversedValue * 10) + (x % 10)
    x = Math.floor(x / 10)
  }
  
  reversedValue = (isNegative) ? reversedValue * -1 : reversedValue
  return (Math.abs(reversedValue) <= MAX_RANGE) ? reversedValue : 0
};