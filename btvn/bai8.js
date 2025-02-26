let a = +prompt("nhap so a");
let b = +prompt("nhap so b");
let c = +prompt("nhap so c");


let max = a;
    if (a >= b && a >= c) {
        max = a; 
    } else {
        if (b >= c) {
            max = b; 
        } else {
            max = c; 
        }
}
alert(`gia tri lon nhat la : ${max}`);
    
