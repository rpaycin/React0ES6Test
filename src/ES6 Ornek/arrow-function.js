/*
function fn(param1, param2) {
  console.log(param1);
  console.log(param2);
}

fn(1, 2);
*/

const fn = (param1 = 'value', ...rest) => ({
  param1,
  rest,
});

const result = fn('value1', 'value3', 'value4', 'value5', 'value6', 'value7');
console.log(JSON.stringify(result, null, 2));

//...rest bildiğimiz params

//benim testlerim. parametreye default değer verilebiliyor
const add = (number1,number2=3) => {
  return number1+number2;
};

console.log(add());
