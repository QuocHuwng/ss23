let n = parseInt(prompt("Nhập số phần tử của mảng"));
if (n <= 0) {
    console.log("Số lượng phần tử không hợp lệ");
} else {
    let arr = [];
    let soAm = 0;

    for (let i = 0; i < n; i++) {
        let phanTu = parseInt(prompt(`Nhập phần tử thứ ${i + 1}`));
        arr.push(phanTu);
        if (phanTu < 0) {
            soAm++;
        }
    }

    console.log("Mảng đã nhập:", arr);
    console.log("Số lượng số nguyên âm trong mảng:", soAm);
}
