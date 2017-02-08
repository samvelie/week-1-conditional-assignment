console.log(yourFunction(3, 2));

console.log(comparer('86.7 taco', 92));

function comparer(a, b){
  var num1 = parseFloat(a);
  var num2 = parseFloat(b);

  if (num1===num2){
    return 'The numbers are the same!';
  } else if (num1>num2) {
      return 'The first number was bigger!';
    } else {
        return 'The second number was bigger!';}
}
