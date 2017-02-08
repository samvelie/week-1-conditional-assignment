console.log(comparer(3, 2)); //Example 1
console.log(comparer(2, 7)); //Example 2
console.log(comparer(7, 7)); //Example 3

console.log(comparer('86.7 taco', 92)); //Pro Example

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
