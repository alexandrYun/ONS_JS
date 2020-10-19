let time_now = +prompt('Введите градусы');

// 1 час = 30 градусов
if(time_now < 360 && time_now > 0) {
    let h = Math.floor(time_now / 30);
    let m = Math.floor((time_now - (30 * h)) / 0.5);
    alert(`It is ${h} hours ${m} minutes`);
} else if(time_now > 359) {
    alert('Максимум 359');
} else {
    alert('Минимум 1');
}