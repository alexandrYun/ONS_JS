import Enemy from './enemy';

export default class Knight extends Enemy {
    name: string;
    
    constructor(name: string) {
        super(name, 50, 'red', 10, 20);
    }
    AttackAll() {
        for(let knightTar of targets) {
            if(knightTar.targetRange <= 20) {
                knightTar.hp -= 30;
                console.log(`${knightTar.name}, к рыцарю лучше не подходить!!!`);
            } else {
                console.log(`${knightTar.name} cлишком далеко`);
            }
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