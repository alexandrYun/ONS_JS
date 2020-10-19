let final_arr = []

for (let i = 1; i < 10; i++) {
    let inner_arr = []
    for (let j = 1; j < 10; j++) {
        inner_arr.push(i*j)
    }
    final_arr.push(inner_arr)
}

console.log(final_arr);