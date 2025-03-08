let n = parseInt(prompt("Nhập số phần tử của mảng"));
if (n < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(parseInt(prompt(`Nhập giá trị cho phần tử thứ ${i + 1}`)));
    }
    console.log(arr);

    let isFibonacci = true;
    if (arr.length === 0) {
        isFibonacci = false;
    } else if (arr.length === 1) {
        isFibonacci = arr[0] === 0 || arr[0] === 1;
    } else if (arr.length === 2) {
        isFibonacci = (arr[0] === 0 && arr[1] === 1) || (arr[0] === 1 && arr[1] === 1);
    } else {
        for (let i = 2; i < arr.length; i++) {
            if (arr[i] !== arr[i - 1] + arr[i - 2]) {
                isFibonacci = false;
                break;
            }
        }
    }

    if (isFibonacci) {
        console.log("Là dãy số fibonacci");
    } else {
        console.log("Không phải dãy số fibonacci");
    }
}
