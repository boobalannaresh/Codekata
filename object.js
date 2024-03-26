////// Object finding second index , Keyname and value

function findKeysByValue(obj, searchValue) {
    const keys = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] === searchValue) {
            keys.push(key);
        }
    }
    return keys;
}

const myObj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value1',
    key4: 'value4',
    key5: 'value2'
};

const searchValue = 'value1';
const keysWithValue = findKeysByValue(myObj, searchValue);

console.log(`Keys with value '${searchValue}':`, keysWithValue);