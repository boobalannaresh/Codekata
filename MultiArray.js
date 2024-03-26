let array = [10, 10, 20, 30, 40, 10, 40, 50, 10, 50, 10, 50, 50, 50];
let end = [4,6,8,9];
let initial = [1,2,3,4];

for(let j=0;j<initial.length;j++){
   
   let max = array[initial[j]]

for (let i = initial[j]; i <= end[j]; i++) {

   if (max < array[i]) {
      max = array[i]
   }

}

console.log(max);
}