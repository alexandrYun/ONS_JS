import Enemy from './enemy';

export default class Dwarf extends Enemy {
    name: string;
    
    constructor(name: string) {
        super(name, 50, 'grey', 12, 10);
    }
    ThrowAxe(dwarfTarget: number) {
        if(targets[dwarfTarget].targetRange <= 30) {
            targets[dwarfTarget].hp -= 50;
            console.log('Звучит свист топоров!!!');
            console.log(`${targets[dwarfTarget].name} убит!!!`);
        } else {
            console.log(`${targets[dwarfTarget].name} слишком далеко`);
        }
    }
}

let targets: any = [
    {name: 'target1', hp: 50, targetRange: 20, targetDamage: 5},
    {name: 'target2', hp: 50, targetRange: 30, targetDamage: 5},
    {name: 'target3', hp: 50, targetRange: 10, targetDamage: 5},
    {name: 'target4', hp: 50, targetRange: 20, targetDamage: 5},
    {name: 'target5', hp: 50, targetRange: 30, targetDamage: 5},
    {name: 'target6', hp: 50, targetRange: 30, targetDamage: 5},
    {name: 'target7', hp: 50, targetRange: 20, targetDamage: 5}
]