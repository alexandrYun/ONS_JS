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
    Attack(target: number, range: number) {
        targets[target].hp -= this.damage;
        console.log(range);
    }
    getDamage(damage: number) {
        this.hp -= damage;
    }
    scream() {
        console.log(this.name);
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