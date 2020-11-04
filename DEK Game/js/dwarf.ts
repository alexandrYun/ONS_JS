import Enemy from './enemy';
import {knight, elf} from './script';

export default class Dwarf extends Enemy {
    name: string;
    
    constructor(name: string) {
        super(name, 200, 'grey', 12, 10);
    }
    throwAxe(dwarfTarget: string) {
        if(dwarfTarget === 'Рыцарь' && knight.range <= 30) {
            knight.hp -= 50;
            console.log('Звучит свист топоров!!!');
        } else if(dwarfTarget === 'Эльф' && elf.range <= 30) {
            elf.hp -= 50;
            console.log('Звучит свист топоров!!!');
        } else if(dwarfTarget === 'Пусто') {
            console.log('Нужно выбрать цель');
        } else {
            console.log('Слишком далеко');
        }
    }
}