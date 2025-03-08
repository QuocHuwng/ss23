let mang1 = ["", false, 0, 5, 10, "Hello world!"];
let mang2 = ["", false, 0, undefined, null];
let mang3 = [NaN, "test", 4];
let mang4 = ["JavaScript", 0, null, true, 7, " "];

let ketQua1 = [];
for (let i = 0; i < mang1.length; i++) {
    if (mang1[i]) {
        ketQua1.push(mang1[i]);
    }
}
console.log(ketQua1); 

let ketQua2 = [];
for (let i = 0; i < mang2.length; i++) {
    if (mang2[i]) {
        ketQua2.push(mang2[i]);
    }
}
console.log(ketQua2); 

let ketQua3 = [];
for (let i = 0; i < mang3.length; i++) {
    if (mang3[i]) {
        ketQua3.push(mang3[i]);
    }
}
console.log(ketQua3); 

let ketQua4 = [];
for (let i = 0; i < mang4.length; i++) {
    if (mang4[i]) {
        ketQua4.push(mang4[i]);
    }
}
console.log(ketQua4); 