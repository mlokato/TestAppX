function sum(...args) { //Can take array as arguments
  const total = args.flat().reduce((a, b) => a + b)
  console.log(total);
}


const circle = {
  radius: 2,

  get area() {
    return (Math.PI * (this.radius * this.radius))
  }
}

circle.area = 4

const its = circle.area
console.log(its);

const numbers = [1, 8, 7, 3, 4, 5, 6, 8, 6, 8, 11]
let post = () => { }

try {
  const count = countOccurencesTwo([], 8)
  // console.log(count)
} catch (e) {
  console.error(e.message);
}


function countOccurencesTwo(array, searchElement) {
  if (!Array.isArray(array))
    throw new Error('first arg is not an array')
  return array.reduce((accumulator, current) => {

    const occurence = (current === searchElement) ? 1 : 0
    // console.log(accumulator, current, searchElement);
    return accumulator + occurence
  }, 0)
}