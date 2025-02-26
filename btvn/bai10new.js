let a = +prompt("nhap so a");
let b = +prompt("nhap so b");
let max = a > b ? a : b; 
let min = a < b ? a : b; 
// if (a > b) {
//     max = a;
// } else {
//     max = b;
// }

let ramdom = Math.floor(Math.random() * (max - min)) + min;
alert(`ramdom number ${ramdom}`);