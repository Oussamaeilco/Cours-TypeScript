function add(n1: number, n2: number, showResult?: boolean) {
  return n1 + n2;
}

const number1 = 5;
const number2 = 4.5;
const printResult = true;

const result1 = add(number1, number2);

const result2 = add(number1, number2, printResult);
