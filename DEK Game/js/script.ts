import Elf from './elf';
import Dwarf from './dwarf';
import Knight from './knight';
import { ClassElement } from '../node_modules/typescript/lib/typescript';

let knightName: HTMLInputElement = <HTMLInputElement> (document.querySelector('.knight-name'));
let dwarfName: HTMLInputElement = <HTMLInputElement> (document.querySelector('.dwarf-name'));
let elfName: HTMLInputElement = <HTMLInputElement> (document.querySelector('.elf-name'));

let knightCreate: HTMLButtonElement = <HTMLButtonElement> (document.querySelector('.knight-create'));
let dwarfCreate: HTMLButtonElement = <HTMLButtonElement> (document.querySelector('.dwarf-create'));
let elfCreate: HTMLButtonElement = <HTMLButtonElement> (document.querySelector('.elf-create'));

let knightAtkSelect: HTMLSelectElement = <HTMLSelectElement> (document.querySelector('.knight-atk-select'));
let knightAttack: HTMLButtonElement = <HTMLButtonElement> (document.querySelector('.k-atk'));
let knightScream: HTMLButtonElement = <HTMLButtonElement> (document.querySelector('.k-scr'));
let knightUlt: HTMLButtonElement = <HTMLButtonElement> (document.querySelector('.k-ult'));

let dwarfAtkSelect: HTMLSelectElement = <HTMLSelectElement> (document.querySelector('.dwarf-atk-select'));
let dwarfAttack: HTMLButtonElement = <HTMLButtonElement> (document.querySelector('.d-atk'));
let dwarfScream: HTMLButtonElement = <HTMLButtonElement> (document.querySelector('.d-scr'));
let dwarfSelect: HTMLSelectElement = <HTMLSelectElement> (document.querySelector('.dwarf-select'));
let dwarfUlt: HTMLButtonElement = <HTMLButtonElement> (document.querySelector('.d-ult'));

let elfAtkSelect: HTMLSelectElement = <HTMLSelectElement> (document.querySelector('.elf-atk-select'));
let elfAttack: HTMLButtonElement = <HTMLButtonElement> (document.querySelector('.e-atk'));
let elfScream: HTMLButtonElement = <HTMLButtonElement> (document.querySelector('.e-scr'));
let elfSelect: HTMLSelectElement = <HTMLSelectElement> (document.querySelector('.elf-select'));
let elfUlt: HTMLButtonElement = <HTMLButtonElement> (document.querySelector('.e-ult'));


export let knight: any;
export let dwarf: any;
export let elf: any;

// создание персонажа
knightCreate.onclick = () => {
    knight = new Knight(knightName.value);
    console.log(knight);
}

dwarfCreate.onclick = () => {
    dwarf = new Dwarf(dwarfName.value);
    console.log(dwarf);
}

elfCreate.onclick = () => {
    elf = new Elf(elfName.value);
    console.log(elf);
}

// атака
knightAttack.onclick = () => {
    knight.attack(knightAtkSelect.value);
    knightAtkSelect.selectedIndex = 0;
    console.log(dwarf);
    console.log(elf);
}

dwarfAttack.onclick = () => {
    dwarf.attack(dwarfAtkSelect.value);
    dwarfAtkSelect.selectedIndex = 0;
    console.log(knight);
    console.log(elf);
}

elfAttack.onclick = () => {
    elf.attack(elfAtkSelect.value);
    elfAtkSelect.selectedIndex = 0;
    console.log(dwarf);
    console.log(knight);
}

// применение ульта
knightUlt.onclick = () => {
    let targets: Array<any> = [
        dwarf,
        elf
    ]
    knight.attackAll(targets);
    console.log(dwarf);
    console.log(elf);
}

dwarfUlt.onclick = () => {
    dwarf.throwAxe(dwarfSelect.value);
    dwarfSelect.selectedIndex = 0;
    console.log(knight);
    console.log(elf);
}

elfUlt.onclick = () => {
    elf.magicAttack(elfSelect.value);
    elfSelect.selectedIndex = 0;
    console.log(dwarf);
    console.log(knight);
}

// Клич
knightScream.onclick = () => {
    console.log(knight.scream());
}

dwarfScream.onclick = () => {
    console.log(dwarf.scream());
}

elfScream.onclick = () => {
    console.log(elf.scream());
}