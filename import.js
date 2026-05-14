// var h1 = document.createElement('h1')   // created element
// console.log(h1);
// h1.innerHTML = "hello from JS"      // content add in h1 tag
// document.body.appendChild(h1)       // with the help of this we can see the content on web browser


// // ================= IMPORT (USING CODE FROM ANOTHER FILE) =================

// // Import named function 'add' from app.js file
// import { add } from "./export.js"
// // Call the imported function and print result
// console.log(add(2,3));


// // Import default export (array) from app.js
// // Default import can have any name (here we used 'array')
// import array from './export.js'

// // Print the imported array
// console.log(array);


// // named Import ----->

// // for named export we need {}
// import { name,age,greet } from "./export.js";
// console.log(name);
// console.log(age);
// console.log(greet);


// // for function default export we don't need {} 
// import hello from './export.js';
// console.log(hello());


// /*
//     Named export → needs {}
//     Default export → no {} --> example function
//  */