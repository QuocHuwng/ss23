let n = parseInt(prompt("Nhập số phần tử của mảng"));

if (n < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
    console.log("Mảng không có phần tử nào");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(parseInt(prompt(`Nhập giá trị cho phần tử thứ ${i + 1}`)));
    }
    if (arr.length < 2) {
        console.log("Không thể tìm số lớn thứ hai vì mảng có ít hơn 2 phần tử");
    } else {
        let max = Math.max(...arr);
        let secondMax = -Infinity;
        for (let num of arr) {
            if (num > secondMax && num < max) {
                secondMax = num;
            }
        }
        console.log(secondMax);
    }
}
