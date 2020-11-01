import Enemy from './enemy';

export default class Elf extends Enemy {
    name: string;
    
    constructor(name: string) {
        super(name, 50, 'blue', 8, 30);
    }
    MagicAttack(elfTarget: number) {
        if(targets[elfTarget].targetRange <= 20) {
            targets[elfTarget].hp -= 50;
            console.log('Авада Кедавра!!!');
            console.log(`${targets[elfTarget].name} убит!!!`);
        } else {
            console.log(`${targets[elfTarget].name} слишком далеко`);
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