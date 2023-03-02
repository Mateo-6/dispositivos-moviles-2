const factorial = [1, 2, 3, 4, 5];

// 0 + 1 + 2 + 3 + 4
const initialValue = 5;
const sumWithInitial = factorial.reduce(
  (accumulator, currentValue) => accumulator * currentValue,
  initialValue
);

console.log(sumWithInitial);