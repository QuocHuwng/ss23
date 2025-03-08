let array = [];
let sum = 0;
let check = false;
const nhap = prompt("Nhập vào các số:");

array = nhap.split(' ').map(Number);

if (array.some(isNaN)) {
    alert("Vui lòng nhập vào các số hợp lệ.");
} else {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            check = true;
            sum += array[i];
        }
    }

    if (check) {
        alert(`Các số lớn hơn 10 là những số: ${array.filter(num => num > 10).join(', ')}`);
    } else {
        alert("Không có số nào lớn hơn 10");
    }
}