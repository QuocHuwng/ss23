let n = parseInt(prompt("Nhập số phần tử của mảng"));
if (n === 0) {
    console.log("Không có ký tự số trong mảng");
} else {
    let arr = [];

    for (let i = 0; i < n; i++) {
        let char = prompt(`Nhập ký tự thứ ${i + 1}`);
        arr.push(char);
    }

    let count = 0;
    let numericChars = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i]) && arr[i] !== ' ') {
            count++;
            numericChars.push(arr[i]);
        }
    }

    console.log(`Số "ký tự số" trong mảng là: ${count}`);
    if (count > 0) {
        console.log(`Các ký tự số trong mảng là: ${numericChars.join(', ')}`);
    }
}
