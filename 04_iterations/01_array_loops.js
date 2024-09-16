const arr = [1, 2, 3, 4, 5, 6]

//for-of loop
for (const num of arr) {
    console.log(num);
}

//Maps
const countries = new Map()

//doesn't include duplicate keys
countries.set("IN", "India");
countries.set("IN", "India");
countries.set("US", "United States");
countries.set("CN", "China");
countries.set("RU", "Russia");
countries.set("BR", "Brazil");

console.log(countries);

for (const [key, value] of countries) {
    console.log(key, ':',value);
}

//the above method doesn't work for objects