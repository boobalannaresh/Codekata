let fibS = 4
let sum = []

for (let i = 0; i < fibS; i++) {
    if (sum.length <= 2) {
        sum.push(i)
    }
     
    if (sum.length >= 2) {
        for (let j = i-1; j < i; j++) {
            sum.push(sum[j] + sum[i])
        }
    }

    console.log(sum);
}

// let array = new Array(10)
// console.log(array)

///// ============================================================================================================
//// Method 2 Fibnocci series

// let fibS = 10
// let sum = []

// for (let i = 0; i < fibS; i++) {
//     if (sum.length < 2) {
//         sum.push(i)
//         continue;
//     }
    
//     sum.push(sum[i-1]+sum[i-2]);
  
//     console.log(sum);
// }

// ////===========================================================================================




