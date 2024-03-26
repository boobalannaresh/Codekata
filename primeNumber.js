// var num = 15;

// function check(num) {
//     if(num <= 1){
//         return num+" " + " is not prime";
//     }

//     if(num == 2){
//         return num+" " + " is prime";
//     }

//     for (var i = 2; i < num; i++) {
//         if (num % i == 0) {
//             return num+" " + " is not prime";
//         }
//     }
//     return num+" " +" is a Prime"
// }
// console.log(check(num))
/////----------------------------------------------------------------------------------------//

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 13,17, 31]

let primeNumber = []
let notPrimeNumber = []
    
for(let i=0; i<arr.length; i++){
    if(singleValue(arr[i])){
        primeNumber.push(arr[i])
    }else{
        notPrimeNumber.push(arr[i])
    }
}
    
console.log(primeNumber)
console.log(notPrimeNumber)

function singleValue(check){
    if(check <=1){
        return false
    }

    if(check == 2){
        return true
    }

 for(let i=2; i<check; j++){
    if(check % i == 0){
        return false;
    }
}
return true;
}

//////-------------------------------------------------------------------------------------------

// let arr = 9;

// function prime(arr) {
//     for (let i = 0; i < arr; i++) {
//         if (check(arr)) {
//             console.log(arr, "is  prime number 😃👍")

//         } else {
//             console.log(arr, "isn't prime number 😧")
//         }
//     }
// }
// console.log(prime(arr));

// function check(loopV) {
//     if (loopV === 0) {
//         return false
//     }
//     if (loopV === 1) {
//         return true
//     }
//     for (let i = 2; i < loopV; i++) {
//         if (loopV % i == 0) {
//             return false
//         }
//     }
//     return true
// }




















// function isPrime(num) {
//     if (num <= 1) {
//       return false;
//     }
  
//     // Check for divisibility from 2 to the number - 1
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
  
//     return true;
//   }
  
//   function findPrimes(arr) {
//     const primeNumbers = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       if (isPrime(arr[i])) {
//         primeNumbers.push(arr[i]);
//       }
//     }
  
//     return primeNumbers;
//   }
  
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//   const primesInArray = findPrimes(numbers);
//   console.log("Prime numbers in the array:", primesInArray);
  
