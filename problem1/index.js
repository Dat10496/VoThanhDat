var sum_to_n_a = function (n) {
  // your code here
  let value = 0;
  for (let i = 1; i <= n; i++) {
    value += i;
  }
  return value;
};

var sum_to_n_b = function (n) {
  // your code here
  const arrayInput = Array.from({ length: n }, (v, i) => i + 1);
  const result = arrayInput.reduce(
    (acc, currentValue) => acc + currentValue,
    0
  );
  return result;
};

var sum_to_n_c = function (n) {
  // your code here
  let result = 0;
  let arrayInput = new Array();
  for (let i = 1; i <= n; i++) {
    arrayInput.push(i);
  }

  for (let i = 0; i < arrayInput.length; i++) {
    result += arrayInput[i];
  }
};
