//for of iteration can used for map and array not for objects
const array = [1, 2, 3, 4, 5]

for(const num of array)
{
    console.log(`each number is ${num}`);
}

const name = "Shikhar Bahik"
for (const char of name) {
    console.log(`Your name characters are ${char}`);
}


//maps

const map = new Map()

map.set('Np', 'Nepal')
map.set('In', 'India')
map.set('chn', 'China')

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
