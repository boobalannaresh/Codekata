let arr = [1, 3, 2, 4, 5, 6, 7, 8, 9]
let init = 0;
let end = 2;
let max = 0;
let res = []

for (let i = init; i < end; i++) {
  for (let j = i + 1; j <= end; j++) {
    if (arr[i] < arr[j]) {
      if (arr[j] > max) {
        max = arr[j]
        res.push(arr[j])
      }
    }
  }

  if (arr.length - 3 > init) {
    init++
  }

  if (arr.length > end) {
    end++
  }

}
console.log(res)

