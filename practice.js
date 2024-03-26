// var array = [10, 3, 7, 34, 56];

// for (let i = 0; i < array.length - 1; i++) {
//     // i = 1  1 < 5

//     for (let j = i + 1; j < array.length; j++) {
//         //   j = 5  5 < 5

//         // 56  >   no index undifined
//         if (array[i] > array[j]) {

//             let temp = array[j];   // temp = 56
//             array[j] = array[j + 1]; // array[1] = 34
//             array[j + 1] = temp;    // array[2] = 56
//         }
//     }
// }

// console.log(array)

// var a = [2, 4, 6, 7, 1, 5]

// for ( i = 0; i<a.length; i++){
//     if(i%2 !== 0){
//         console.log()
//     }
// }

// // Your HTML string
// var htmlString = '<div>This is some <b>HTML</b> with a <span>string</span> to remove.</div>';

// // The string you want to remove
// var stringToRemove = 'string';

// // Create a regular expression with the string to remove
// var regex = new RegExp(stringToRemove, 'g');

// // Replace the string with an empty string
// var modifiedHtmlString = htmlString.replace(regex, '');

// // Output the modified HTML string
// console.log(modifiedHtmlString);

// html string
// const htmlStr = "<h1>Hello World!</h1>";
// console.log(typeof htmlStr)

// // make a new parser
// const parser = new DOMParser();

// // convert html string into DOM
// const document1 = parser.parseFromString(htmlStr, "text/html");
// console.log(document1)

// var a = [[0, 0, 0, 1, 1],
//          [1, 1, 0, 1, 1],
//          [1, 0, 1, 1, 1]]
// var key = 3;
// for(i=0; i<a.length; i++){

//     for(j=0; j<a[i].length; j++){
//     let same = [];
//     same += a[i][j];
// if(same === key){

// }
//         // let same = a[i][j];

//         // console.log(a[i] [j])
//     }
// }



// let arr = [1, 2, 1, 3, 4, 6, 4, 2, 6, 7, 3, 3, 3];

// // console.log(arr.indexOf(10))
// const ascending = arr.sort((a, b) => {
//     return a - b
// })


// function check(rep) {

//     let result = [];

//     for (i = 0; i < rep.length; i++) {
//         if (result.length === 0) {
//             result.push(rep[i])
//         }

//         // if (result.indexOf(rep[i]) === -1 ) {
//         //     result.push(rep[i])
//         // }

//         // result.push(ascending[i])
//     }
//     return result;
// }
// console.log(check(ascending))


// JavaScript program to find the maximum repeating number 

// Returns maximum repeating element in arr[0..n-1]. 
// The array elements are in range from 0 to k-1 
// function maxRepeating(arr, n, k) {
// 	// Iterate though input array, for every element 
// 	// arr[i], increment arr[arr[i]%k] by k 
// 	       // 6
// 	for (let i = 0; i < n; i++) {
// 		    // 1
// 		arr[arr[i] % k] += k;
// 	}


// 	// Find index of the maximum repeating element 
// 	let max = arr[0], result = 0;
// 	for (let i = 1; i < n; i++) {
// 		if (arr[i] > max) {
// 			max = arr[i];
// 			result = i;
// 		}
// 	}

// 	return result;
// }



// let arr = [2, 3, 3, 5, 3, 4, 1, 7];   // [2, 11, 11, 13, 11, 12, 1, 7]
// let n = arr.length;
// let k = 8;

// console.log(maxRepeating(arr, n, k))


/////---------------------------------------------------------------------------------------------------

// function mostFrequent(arr, n) {

// 	let maxcount = 0;
// 	let element_having_max_freq;
// 	for (let i = 0; i < n; i++) {
// 		let count = 0;
// 		for (let j = 0; j < n; j++) {
// 			if (arr[i] == arr[j])
// 				count++;
// 		}

// 		if (count > maxcount) {
// 			maxcount = count;
// 			element_having_max_freq = arr[i];
// 		}
// 	}

// 	return element_having_max_freq;
// }

// // Driver Code 

// let arr = [40, 50, 30, 40, 50, 30, 30];
// let n = arr.length;
// console.log(mostFrequent(arr, n));

// var cats = ['Tom','Fluffy','Tom','Bella','Chloe','Tom','Chloe'];
// var word = cats[0]

// var counts = {Tom:1};

// console.log(counts[word])


// let arr = [10, 10, 20, 30, 40, 30, 40, 50];

// function check(arr) {
// 	let inCheck = {};
// 	let maxElement = arr[0]; // 1
// 	let defaultValue = 1;    // 2

// 	for (i = 0; i < arr.length; i++) {
// 		//
// 		const OnebyOneCheck = arr[i]  // arr[4] = 4
// 		if (inCheck[OnebyOneCheck]) {
// 			inCheck[OnebyOneCheck]++
// 		} else {
// 			inCheck[OnebyOneCheck] = 1
// 		}
// 		console.log(inCheck[OnebyOneCheck])

// 		//         //         1      >      2
// 		if(inCheck[OnebyOneCheck] > defaultValue){
// 			maxElement = OnebyOneCheck;   //1
// 			defaultValue = inCheck[OnebyOneCheck]; // 2
// 		}
// 	}

// 	return maxElement;
// }
// console.log(check(arr))

var arr1 = [1, 2, 3, 4, 5, 6, 7, 5, 3, 2, 1];

let a = []

for (i = 0; i < arr1.length; i++) {
	a.push = arr1[i]

}

console.log(a)

function findSecondLargestElem(arr){
    let first = -1 , second = -1;

    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }
        else if( arr[i] > second && arr[i] != first){
            second = arr[i];
        }
    }
    console.log(second);
}
let arr = [12, 35, 1, 10, 34, 1]
findSecondLargestElem(arr);