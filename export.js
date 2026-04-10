// ================= EXPORT (SHARING CODE TO OTHER FILES) =================

// Named export: exporting 'add' function
// Other files must import using same name { add }
export const add = (a,b)=> a+b;

// Testing the function locally
console.log(add(2,7));


// Create an array
const arr = [1,2,3,4];

// Default export: exporting array
// Only one default export allowed per file
// Can be imported with any name
// export default arr

// Named Export ---->
export const name = "Harsh Mishra";
export const age = 25;
export function greet(){
    return "hello from export";
}
export default function hello(){
    return "hello from hello function in export.js";
}
