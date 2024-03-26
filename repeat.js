////// Finding largest repeating number

// let array = [10, 10, 20, 30, 10, 20, 30, 20, 40, 10, 30, 40, 50, 20, 10];
// let arr = array.sort((a, b) => {
//     return a - b;
// })
// console.log(arr);

// function check(arr) {
//     let inCheck = {};
//     let result = []; // 10
//     let defaultValue = 1;    // 2
//     //  7 < 8
//     for (i = 0; i < arr.length; i++) {
//         //
//         const OnebyOneCheck = arr[i]  // arr[7] = 50
//         if (inCheck[OnebyOneCheck]) {
//             inCheck[OnebyOneCheck]++
//         } else {
//             inCheck[OnebyOneCheck] = 1
//         }
//         //         //          2   >   2
//         if (inCheck[OnebyOneCheck] >= defaultValue) {
//             if (result.indexOf(OnebyOneCheck) === -1) {
//                 result.push(OnebyOneCheck) // 10
//             }
//             defaultValue = inCheck[OnebyOneCheck]; // 2
//         }

//     }

//     return result; // 1
// }
// console.log(check(arr))

/////-------------------------------------------------------------------------------------------------------------------------------------- //

///// Finding second repeating number

// let array = [10, 10, 20, 30, 10, 20, 30, 20, 40, 10, 30, 40, 50, 20, 10];

// function check(array) {
//     let inCheck = {};

//     //  7 < 8
//     for (i = 0; i < array.length; i++) {
//         //
//         const OnebyOneCheck = array[i]  // arr[7] = 50
//         if (inCheck[OnebyOneCheck]) {
//             inCheck[OnebyOneCheck]++
//         } else {
//             inCheck[OnebyOneCheck] = 1
//         }

//     }

//     for( let prop in inCheck){
//         if (inCheck.hasOwnProperty(prop)) {
//             if (inCheck[prop] === 2)
//                 return prop;
//         }
//     }

// }
// console.log(check(array))

/////---------------------------------------------------------------------------------------------------------------------------------------------//
///// Largest 2nd repeating value finding

// let array = [30, 20, 10, 30, 20, 30, 40, 40, 40];

// let inCheck = {};
// let result = []; // 10
// let defaultValue = 1;  // 2

// for (let i = 0; i < array.length; i++) {
//     let element = array[i]
//     if (inCheck[element]) {
//         inCheck[element]++
//     } else {
//         inCheck[element] = 1;
//     }

//     // if (inCheck[element] > defaultValue) {
//     //     if (result.indexOf(element) === -1) {
//     //         result.push(element)
//     //     }
//     //     defaultValue = inCheck[element]
//     // }
// }

// const loop1 = Object.values(inCheck);

// function objSort(loop1) {
//     let duplicateFilter = []
//     for (let i = 0; i < loop1.length; i++) {
//         if (duplicateFilter.indexOf(loop1[i]) === -1) {
//             duplicateFilter.push(loop1[i])
//         }

//     }
//     return duplicateFilter
// }

// const objVal = objSort(loop1)

// function sec(objVal) {
//     for (let i = 0; i < objVal.length; i++) {
//         for (let j = i + 1; j < objVal.length; j++) {
//             if (objVal[i] < objVal[j]) {
//                 let temp = objVal[i]
//                 objVal[i] = objVal[j]
//                 objVal[j] = temp
//             }
//         }

//     }
//     return objVal[1]
// }
// const check = sec(objVal);

// function findKey(inCheck, check) {
//     let keys = [];
//     for (let store in inCheck) {
//         if (inCheck.hasOwnProperty(store) && inCheck[store] === check) {
//             keys.push(store)
//         }
//     }

// }

// const checking = findKey(inCheck, check);
// console.log(checking)

//////----------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
////// 2 task
////// First finding largest repeating value
////// If you have two value's largest value, you have to descending order

// let array = [30, 20, 10, 30, 20, 30, 40, 40, 40];

// let inCheck = {};
// let result = []; // 10
// let defaultValue = 1;  // 2

// for (let i = 0; i < array.length; i++) {
//     let element = array[i]
//     if (inCheck[element]) {
//         inCheck[element]++
//     } else {
//         inCheck[element] = 1;
//     }

// }

// const loop1 = Object.values(inCheck);

// function objSort(loop1) {
//     let duplicateFilter = []
//     for (let i = 0; i < loop1.length; i++) {
//         if (duplicateFilter.indexOf(loop1[i]) === -1) {
//             duplicateFilter.push(loop1[i])
//         }

//     }
//     return duplicateFilter
// }

// const objVal = objSort(loop1)

// function sec(objVal) {
//     for (let i = 0; i < objVal.length; i++) {
//         for (let j = i + 1; j < objVal.length; j++) {
//             if (objVal[i] < objVal[j]) {
//                 let temp = objVal[i]
//                 objVal[i] = objVal[j]
//                 objVal[j] = temp
//             }
//         }

//     }
//     return objVal[0]
// }
// const check = sec(objVal);

// function findKey(inCheck, check) {
//     let keys = [];
//     for (let store in inCheck) {
//         if (inCheck.hasOwnProperty(store) && inCheck[store] === check) {
//             keys.push(store)
//         }
//     }
//     if (keys.length <= 1) {
//         return keys
//     } else if (keys.length > 1) {
//         let convert = keys.map(str => {
//             return parseInt(str)
//         })
//         let temp;
//         for (let i = 0; i <= convert.length; i++) {
//             for (let j = 0; j < i; j++) {
//                 if (convert[j] < convert[i]) {
//                     temp = convert[j]
//                     convert[j] = convert[i]
//                     convert[i] = temp
//                 }
//             }

//         }
//         return convert[0]
//     }

// }

// const checking = findKey(inCheck, check);
// console.log(checking)

//////-------------------------------------------------------------------------------------------------------------------
///// Descending order wise print based on largest to smallest repeating value

// let array = [30, 10, 20, 10, 30, 10, 20, 10, 30, 10, 40, 40, 40, 40];

// let inCheck = {};
// let result = []; // 10
// let defaultValue = 1;  // 2

// for (let i = 0; i < array.length; i++) {
//     let element = array[i]
//     if (inCheck[element]) {
//         inCheck[element]++
//     } else {
//         inCheck[element] = 1;
//     }

// }

// const loop1 = Object.values(inCheck);

// function sec(loop1) {
//     let filterDuplicate = []
//     for (let i = 0; i < loop1.length; i++) {
//         for (let j = i + 1; j < loop1.length; j++) {
//             if (loop1[i] < loop1[j]) {
//                 let temp = loop1[i]
//                 loop1[i] = loop1[j]
//                 loop1[j] = temp
//             }
//         }
//     }

//     for(let i =0; i<loop1.length; i++){
//        if(filterDuplicate.indexOf(loop1[i]) === -1){
//         filterDuplicate.push(loop1[i])
//        }
//     }

//     return filterDuplicate
// }
// const check = sec(loop1);

// function findKey(inCheck, check) {

//     let keys = [];
//     for (let i = 0; i < check.length; i++) {
//         for (let store in inCheck) {
//             if (inCheck.hasOwnProperty(store) && inCheck[store] === check[i]) {
//                 keys.push(store)
//             }
//         }
//     }

//     return keys
// }

// const checking = findKey(inCheck, check);
// console.log(checking)

//////----------------------------------------------------------------------------------------------------------------------------------------
////// How many repeating value in object inside, that value based print the key name multi time

// let array = [30, 10, 20, 10, 30, 10, 20, 10, 30, 10, 40, 40, 40, 40];

// let inCheck = {};
// let result = []; // 10
// let defaultValue = 1;  // 2

// for (let i = 0; i < array.length; i++) {
//     let element = array[i]
//     if (inCheck[element]) {
//         inCheck[element]++
//     } else {
//         inCheck[element] = 1;
//     }

// }

// const loop1 = Object.values(inCheck);

// function sec(loop1) {
//     let filterDuplicate = []
//     for (let i = 0; i < loop1.length; i++) {
//         for (let j = i + 1; j < loop1.length; j++) {
//             if (loop1[i] < loop1[j]) {
//                 let temp = loop1[i]
//                 loop1[i] = loop1[j]
//                 loop1[j] = temp
//             }
//         }
//     }

//     for(let i =0; i<loop1.length; i++){
//        if(filterDuplicate.indexOf(loop1[i]) === -1){
//         filterDuplicate.push(loop1[i])
//        }
//     }

//     return filterDuplicate
// }
// const check = sec(loop1);

// function findKey(inCheck, check) {

//     let keys = [];
//     for (let i = 0; i < check.length; i++) {
//         for (let store in inCheck) {
//             if (inCheck.hasOwnProperty(store) && inCheck[store] === check[i]) {
//                 for(let j=0; j<check[i]; j++){
//                     keys.push(store)
//                 }
//             }
//         }
//     }

//     return keys
// }

// const checking = findKey(inCheck, check);
// console.log(checking)

