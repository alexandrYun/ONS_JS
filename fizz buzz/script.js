let x = '1';

for(let i = 2; i <= 30; i++) {
    if(i % 3 === 0 && i % 5 !== 0) {
        x +=', Fizz';
    } else if(i % 3 !== 0 && i % 5 === 0) {
        x += ', Buzz';
    } else if(i % 3 === 0 && i % 5 === 0) {
        x += ', Fizz Buzz';
    } else {
        x += ', ' + i;
    }
}

console.log(x);