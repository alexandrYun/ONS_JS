import Enemy from './enemy';

export default class Knight extends Enemy {
    name: string;
    
    constructor(name: string) {
        super(name, 200, 'red', 10, 20);
    }
    attackAll(targets: Array<any>) {
        for(let knightTar of targets) {
            if(knightTar.range <= 20) {
                knightTar.hp -= 30;
                console.log(`${knightTar.name}, к рыцарю лучше не подходить!!!`);
            } else {
                console.log(`${knightTar.name} cлишком далеко`);
            }
        }
    }
}