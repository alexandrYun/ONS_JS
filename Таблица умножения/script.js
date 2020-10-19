let table = [];
let mult1 = [];
let mult2 = [];
let mult3 = [];
let mult4 = [];
let mult5 = [];
let mult6 = [];
let mult7 = [];
let mult8 = [];
let mult9 = [];

for(let i = 1; i < 10; i++) {
    for(let j = 1; j < 10; j++) {
        if(i == 1) {
            mult1.push(i * j);
        } else if(i == 2) {
            mult2.push(i * j);
        } else if(i == 3) {
            mult3.push(i * j);
        } else if(i == 4) {
            mult4.push(i * j);
        } else if(i == 5) {
            mult5.push(i * j);
        } else if(i == 6) {
            mult6.push(i * j);
        } else if(i == 7) {
            mult7.push(i * j);
        } else if(i == 8) {
            mult8.push(i * j);
        } else {
            mult9.push(i * j);
        }
    };
};
table.push(mult1, mult2, mult3, mult4, mult5, mult6, mult7, mult8, mult9);

console.log(table);

