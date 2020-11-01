import Elf from './elf';
import Dwarf from './dwarf';
import Knight from './knight';

// class Enemy {
//     constructor(name, hp, color, damage, range) {
//         this.name = name;
//         this.hp = hp;
//         this.color = color;
//         this.damage = damage;
//         this.range = range;
//     }
//     Attack(target, range) {
//         targets[target].hp -= this.damage;
//         console.log(range);
//     }
//     getDamage(damage) {
//         this.hp -= damage;
//     }
//     scream() {
//         console.log(this.name);
//     }
// }

let targets: any = [
    {name: 'target1', hp: 50, targetRange: 20, targetDamage: 5},
    {name: 'target2', hp: 50, targetRange: 30, targetDamage: 5},
    {name: 'target3', hp: 50, targetRange: 10, targetDamage: 5},
    {name: 'target4', hp: 50, targetRange: 20, targetDamage: 5},
    {name: 'target5', hp: 50, targetRange: 30, targetDamage: 5},
    {name: 'target6', hp: 50, targetRange: 30, targetDamage: 5},
    {name: 'target7', hp: 50, targetRange: 20, targetDamage: 5}
]

// class Knight extends Enemy {
//     constructor(name) {
//         super(name, 50, 'red', 10, 20);
//     }
//     AttackAll() {
//         for(let knightTar of targets) {
//             if(knightTar.targetRange <= 20) {
//                 knightTar.hp -= 30;
//                 console.log(`${knightTar.name}, к рыцарю лучше не подходить!!!`);
//             } else {
//                 console.log(`${knightTar.name} cлишком далеко`);
//             }
//         }
//     }
// }

// class Elf extends Enemy {
//     constructor(name) {
//         super(name, 50, 'blue', 8, 30);
//     }
//     MagicAttack(elfTarget) {
//         if(targets[elfTarget].targetRange <= 20) {
//             targets[elfTarget].hp -= 50;
//             console.log('Авада Кедавра!!!');
//             console.log(`${targets[elfTarget].name} убит!!!`);
//         } else {
//             console.log(`${targets[elfTarget].name} слишком далеко`);
//         }
//     }
// }

// class Dwarf extends Enemy {
//     constructor(name) {
//         super(name, 50, 'grey', 12, 10);
//     }
//     ThrowAxe(dwarfTarget) {
//         if(targets[dwarfTarget].targetRange <= 30) {
//             targets[dwarfTarget].hp -= 50;
//             console.log('Звучит свист топоров!!!');
//             console.log(`${targets[dwarfTarget].name} убит!!!`);
//         } else {
//             console.log(`${targets[dwarfTarget].name} слишком далеко`);
//         }
//     }
// }

let knight: object = new Knight('knight');

let elf: object = new Elf('elf');

let dwarf: object = new Dwarf('dwarf');