import {knight, elf, dwarf} from './script';

export default class Enemy {
    name: string;
    hp: number;
    color: string;
    damage: number;
    range: number;
    
    constructor(name: string, hp: number, color: string, damage: number, range: number) {
        this.name = name;
        this.hp = hp;
        this.color = color;
        this.damage = damage;
        this.range = range;
    }
    attack(target: string) {
        if(target === 'Рыцарь' && this.range >= 20) {
            knight.getDamage(this.damage);
        } else if(target === 'Эльф' && this.range >= 30) {
            elf.getDamage(this.damage);
        } else if(target === 'Дварф' && this.range >= 10) {
            dwarf.getDamage(this.damage);
        } else if(target === 'Пусто') {
            console.log('Нужно выбрать цель');
        } else {
            console.log('Слишком далеко');
        }
    }
    getDamage(damage: number) {
        this.hp -= damage;
    }
    scream() {
        console.log(this.name);
    }
}

