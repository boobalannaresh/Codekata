// const characters = [
//     "Nebula",
//     "Thanos",
//     "Star Lord",
//     "Groot",
//     "Rocket",
//     "Drax",
//     "Gamora",
// ];

//   const sortedArray = characters.sort();
//   console.log(sortedArray);

////// Output:  ["Drax", "Gamora", "Groot", "Nebula", "Rocket", "Star Lord", "Thanos"];

// const descending = characters.sort().reverse();
// console.log(descending);

///// Output: ["Thanos", "Star Lord", "Rocket", "Nebula", "Groot", "Gamora", "Drax"];
////// ---------------------------------------------------------------------------------------------------------------------------------------- //
  //// Index 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// var array = [1, 7, 2, 8, 33, 4, 55, 0, 9];
//           //    2, 4, 7,  8, 33,
//              // 5 < 9
// for (var i = 0; i < array.length; i++) {

//                 //  4 < 5
//     for (var j = 0; j < i; j++) {
//                 // 8 < 33
//         if (array[i] < array[j]) {
//             var x = array[i];  //// 8
//             array[i] = array[j]; //// 33
//             array[j] = x; //// 8
//         }
//     }

// }

// console.log(array);


// let arr = [4, 2, 5, 1]
// let temp;

// function converter(arr) {

//   for(let i=0; i<arr.length; i++) {

//     for (let j=i+1; j<arr.length; j++) {

//       if(arr[i] < arr[j]) {

//         temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//       }
//     }
//   }
//   return arr
// }

// console.log(converter(arr))
//////--------------------------------------------------------------------------------------------------------------

// var arr1 = [1, 2, 3, 4, 5, 6, 7, 5, 3, 2, 1];

// //// Ascending
// var find1 = arr1.sort((a, b) => {
//     return a - b;
// })
// console.log(find1)

// //// Descending
// var find2 = arr1.sort((a, b) => {
//     return b - a;
// })
// console.log(find2)

// const books = [
//     { title: "Book A", year: 2010 },
//     { title: "Book B", year: 2005 },
//     { title: "Book C", year: 2018 },
// ];

// const booksSortedByYearAsc = books.sort((a, b) => a.year - b.year);
// console.log(booksSortedByYearAsc);