import Enemy from './enemy';
import {knight, dwarf} from './script';

export default class Elf extends Enemy {
    name: string;
    
    constructor(name: string) {
        super(name, 200, 'blue', 8, 30);
    }
    magicAttack(elfTarget: string) {
        if(elfTarget === 'Рыцарь' && knight.range <= 30) {
            knight.hp -= 50;
            console.log('Авада Кедавра!!!');
        } else if(elfTarget === 'Дварф' && dwarf.range <= 30) {
            dwarf.hp -= 50;
            console.log('Авада Кедавра!!!');
        } else if(elfTarget === 'Пусто') {
            console.log('Нужно выбрать цель');
        } else {
            console.log('Слишком далеко');
        }
    }
}

