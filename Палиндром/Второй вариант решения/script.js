let word = prompt('Введите слово').toLowerCase();

// if(!isNaN(+word) && word !== '') {
//     alert('Число не подходит');
// } else if(word === '') {
//     alert('В строке пусто');
// } else if(word === word.split('').reverse().join('')) {
//     console.log(true);
// } else {
//     console.log(false);
// }

let val = '';

if(!isNaN(+word) && word != '') {
    alert('Число не подходит');
} else if(word === '') {
    alert('В строке пусто');
} else {
    for(let i = word.length - 1; i >= 0; i--) {
    val += word[i];
    }
    if(word === val) {
        console.log(true);
    } else {
        console.log(false);
    }
}
