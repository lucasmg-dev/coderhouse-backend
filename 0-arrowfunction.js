// Traditional Function
function double (a) {
    return a * 2;
}

console.log(double(2))

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between
// the argument and opening body bracket
const double1 = (a) => {
    return a * 2;
}

console.log(double1(4))

// 2. Remove the body brackets and word "return" 
// the return is implied.
const double2 = (a) => a * 2;

console.log(double2(5))

// 3. Remove the argument parentheses
const double3 = a => a * 2;

console.log(double3(3))