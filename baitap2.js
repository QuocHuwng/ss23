let arr = [];
let nhap = prompt("Nhập vào các phần tử của mảng");

if (nhap.trim() === "") {
    alert("Không có số lớn nhất ");
} else {
    arr = nhap.split(' ').map(Number);

    if (arr.length === 0 || arr.some(isNaN)) {
        alert("Vui lòng nhập vào các số hợp lệ.");
    } else {
        let max = arr[0];
        let maxIndex = 0;

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
                maxIndex = i;
            }
        }

        alert(`Phần tử có giá trị lớn nhất trong mảng là: ${max}`);
        alert(`Vị trí của phần tử đó là: ${maxIndex}`);
    }
}