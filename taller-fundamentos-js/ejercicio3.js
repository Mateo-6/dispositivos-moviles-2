const factorial = [1, 2, 3, 4, 5];

let factorial2 = 5;
for (let key of factorial) {
  factorial2 = factorial2 * key;
}

console.log(factorial2);

// 0 + 1 + 2 + 3 + 4
const initialValue = 5;
const sumWithInitial = factorial.reduce(
  (accumulator, currentValue) => accumulator * currentValue,
  initialValue
);

console.log(sumWithInitial);
