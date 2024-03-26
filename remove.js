let array = [10, 10, 20, 30, 40, 10, 40, 50, 10, 50, 10, 50, 50, 50];
let remove = 10;

for (let i = 0; i < array.length; i++) {
    if (array[i] === remove) {
        array.splice(i, 1)
    }
    if (array[i] === remove) {
        array.splice(i, 1)
    }
    
}

console.log(array)

/////-------------------------------------------------------------------------------------------------------------------//
// let array = [10, 10, 20, 30, 40, 10, 40, 50, 10, 50, 10, 50, 50, 50];
// let remove = 10;

// array.splice(3, 1)
// console.log(array);

// for (let i = 0; i < array.length; i++) {
//    if (array[i] === remove) {
//       array.splice(array[i], 1)
//    } else {
//       console.log(array[i])
//    }
// }

// for (let i = 0; i < array.length; i += 4) {
//    console.log(array[i])
// }

// function find(array) {

//     for (let i = 0; i < array.length; i++) {

//         for (let j = 0; j < i; j++) {
//             if (array[i] < array[j]) {
//                 let hold = array[i]
//                 array[i] = array[j]
//                 array[j] = hold
//             }
//         }
//     }
// }
// console.log(find(array));
// console.log(array)

// function duplicate(array) {

//     let result = []
//     for (let i = 0; i < array.length; i++) {
//         if (result.indexOf(array[i]) === -1) {
//             result.push(array[i])
//         }
//     }

//     return result[1];
// }

// console.log(duplicate(array));