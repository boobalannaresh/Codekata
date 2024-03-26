// var arr1 = [1, 2, 3, 4, 5, 6, 7, 5, 3, 2, 1];

// var find1 = arr1.filter((dup, index)=> {

//     return arr1.indexOf(dup) === index
// } )

// console.log(find1)

// ///////------------------------------------------------------------------------------------------------- //
 

///////------------------------------------------------------------------------------------------------- //
// let array = [6, 9, 15, 6, 13, 9, 6, 11, 15];
// let index = 0;
// let newArr = [];
// // [ 6, 9, 15,]

// // to get length of array
// function findDuplicates(arr) {
//    //  3 < 7
//    for (let i = 0; i < arr.length - 1; i++) {

//             // j = 3 + 1; 4 < 8
//       for (let j = i + 1; j < arr.length; j++) {
//          //  arr[3] === arr[3]
//          if (arr[i] === arr[j]) {  /// 6 === 6
//             if(newArr.indexOf(arr[i])){
//             /// newArr[2] = arr[1] 
//             newArr[index] = arr[i]; /// 9 
//             index++;                /// 3++
//             }

//          }
//       }
//    }
//    return newArr;
// }
// console.log(findDuplicates(array))

////// --------------------------------------------------------------------------------------------------------

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

/////--------------------------------------------------------------------------------------------------------------------//

let arr = [1, 2, 1, 1, 3, 4, 5, 4, 10, 3, 2, 5, 1, 2]   // [ 1, 7, 9, "*"]
let dup = [];
let flag = 0;

            //  1 < 4
for (let i = 0; i < arr.length; i++) {
   flag = 0;
   if (arr[i] == "*") {
      continue
   }
         // j = 1 + 3; 3 < 4
   for (let j = i + 1; j < arr.length; j++) {
      //  arr[1] == arr[3]
      if (arr[i] == arr[j]) { //// 7 === "*"
         flag = 1;
         arr[j] = "*"
       
      }
   }

   if (flag == 0) {
      dup.push(arr[i])
   }
}
console.log(dup)


//////------------------------------------------------------------------------------------------------------------------------- //
////// Only show repeated value

// let arr = [1, 2, 1, 1, 3, 4, 5, 4, 10, 3, 2, 5, 1, 2]   // [ 1, 7, 9, "*"]
// let dup = [];

// for(let i=0; i<arr.length; i++){
//    for(let j=i+1; j<arr.length; j++){
//       if(arr[i] === arr[j]){
        
//          if(dup.indexOf(arr[i]) === -1){
//             dup.push(arr[i])
//          }
//       }
      
//    }
// }
// console.log(dup)

//////--------------------------------------------------------------------------------------------------------------------------------------

// const array = [2, 3, 4, 5, 6, 8, 8, 9, 9];
// const duplicates = [];

// for (let i = array; i > duplicates.length; i--) {
//   for (let j = i + 1; j > duplicates.length; j--) {
//     if (array[i] === array[j]) {
//       duplicates.push(array[i]);
//     }
//   }
// }

// console.log(duplicates)





