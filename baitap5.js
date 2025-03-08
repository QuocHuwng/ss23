let n = parseInt(prompt("Nhập số phần tử của mảng"));

if (n < 0) {
    console.log("Số lượng phần tử không được âm");
} else if (n === 0) {
    console.log("Mảng không có phần tử");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(prompt(`Nhập phần tử thứ ${i + 1}`));
    }

    let sum = 0;
    let hasNumber = false;
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i]) && arr[i].trim() !== '') {
            sum += parseInt(arr[i]);
            hasNumber = true;
        }
    }

    console.log(arr);
    if (hasNumber) {
        console.log(sum);
    } else {
        console.log("Không có phần tử nào là số");
    }
}
