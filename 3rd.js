

 const Reverse = function(num) {
    var reversed_number = 0;
    while (num != 0) {
    reversed_number *= 10;
    reversed_number += number % 10;
    num -= num % 10;
    num /= 10;
    }
    return reversed_number;
    }


const string = prompt('Enter a number: ');

const result = Reverse(num);
console.log(result);