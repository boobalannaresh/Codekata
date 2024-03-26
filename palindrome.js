let str1 = "racecar";

function isPalindrome(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    if (rev == str) {
        console.log(rev)
    } else {
        return false;
    }
}
 
console.log(isPalindrome(str1));
