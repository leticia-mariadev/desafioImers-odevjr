var maxDigit = parseInt(prompt("Digite um número:"));

function mostra(frase) {
  document.write(frase);
  document.write("<br>");
}

function number(maxDigit) {
  const numbers = [];
  for (var a = 0; a <= maxDigit; a++) {
    for (var b = 0; b <= maxDigit; b++) {
      for (var c = 0; c <= maxDigit; c++) {
        const d = 21 - a - b - c;
        if (d >= 0 && d <= maxDigit) {
          const numberString = `${a}${b}${c}${d}`;
          numbers.push(Number(numberString));
        }
      }
    }
  }
  return numbers;
}

const numbers = number(maxDigit);
console.log(numbers);

mostra(
  "Os números de até 4 digítos que resultam em 21 em sua soma e são menores ou iguais ao número digitado são: " +
    numbers
);
