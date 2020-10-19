let arrLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arrUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let text = 'javascript is awesome'.split('');
let rot = [];

for(let charT of text) {
    for(let charL of arrLower) {
        if(charT === charL && arrLower.indexOf(charL) < 13) {
            rot.push(arrLower[arrLower.indexOf(charL) + 13]);
        } else if(charT === charL && arrLower.indexOf(charL) > 12){
            rot.push(arrLower[arrLower.indexOf(charL) - 13]);
        } 
    }
    for(let charU of arrUpper) {
        if(charT === charU && arrUpper.indexOf(charU) < 13) {
            rot.push(arrUpper[arrUpper.indexOf(charU) + 13]);
        } else if(charT === charU && arrUpper.indexOf(charU) > 12){
            rot.push(arrUpper[arrUpper.indexOf(charU) - 13]);
        }
    }
    if(charT === ' ') {
        rot.push(' ');
    }
}

console.log(rot.join(''));