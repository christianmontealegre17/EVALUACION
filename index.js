let numeros = [1, 500, 230, 40, 4, 65, 28, 32, 45, 1002]
let un = [85, 65, 103, 25]
orden1 = numeros.sort(function (a, b) { return a - b })

console.log(orden1)
orden2 = orden1.reverse()
console.log(orden1)

function elm1() {
    console.log(orden1)
    orden1.shift()
    console.log(orden1)
}

function union() {
    orden1.concat(orden2)
    console.log(orden1)
}

    
    orden1.push(85, 65, 103, 25)
    console.log(orden1)


