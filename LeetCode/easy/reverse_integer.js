/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  if (x === 0) return 0

  const MAX = 2147483647

  let positive = (x > 0) ? true : false,
    number = Math.abs(x).toString().split("").reverse()

  const removeLeadingZeros = (x) => {
    if (x[0] === '0') {
      x.shift()
      removeLeadingZeros(x)
    }
    return x
  }

  number = Number.parseInt(removeLeadingZeros(number).join(""))
  number = (positive) ? number : -1 * number
  return (Math.abs(number) < MAX) ? number : 0
};