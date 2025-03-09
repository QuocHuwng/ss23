let prompt = require('prompt-sync')();
let mang = [];
while (true) {
    console.log(`
    ================== MENU ===================
    1. Nhập số phần tử cần nhập và giá trị các phần tử
    2. In ra giá trị các phần tử đang quản lý
    3. In ra giá trị các phần tử chẵn và tính tổng
    4. In ra giá trị lớn nhất và nhỏ nhất trong mảng
    5. In ra các phần tử là số nguyên tố trong mảng và tính tổng
    6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
    7. Thêm một phần từ vào vị trí chỉ định
    8. Thoát
    ============================================
    `);
    let choice = parseInt(prompt('Lựa chọn của bạn: '));
    if (choice === 1) {
        let n = parseInt(prompt('Nhập số phần tử cần nhập: '));
        for (let i = 0; i < n; i++) {
            let value = parseInt(prompt(`Nhập giá trị phần tử thứ ${i + 1}: `));
            mang.push(value);
        }
    } else if (choice === 2) {
        console.log('Các phần tử trong mảng:', mang);
    } else if (choice === 3) {
        let tong = 0;
        let chan = mang.filter(function (num) { return num % 2 === 0; });
        chan.forEach(function (num) { tong += num; });
        console.log('Các phần tử chẵn:', chan);
        console.log('Tổng các phần tử chẵn:', tong);
    } else if (choice === 4) {
        let max = Math.max.apply(null, mang);
        let min = Math.min.apply(null, mang);
        console.log('Giá trị lớn nhất:', max);
        console.log('Giá trị nhỏ nhất:', min);
    } else if (choice === 5) {
        let laSoNguyenTo = function (num) {
            if (num < 2) return false;
            let isPrime = true;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            return isPrime;
        };
        let tong = 0;
        let nguyenTo = mang.filter(function (num) { return laSoNguyenTo(num); });
        nguyenTo.forEach(function (num) { tong += num; });
        console.log('Các phần tử là số nguyên tố:', nguyenTo);
        console.log('Tổng các phần tử nguyên tố:', tong);
    } else if (choice === 6) {
        let so = parseInt(prompt('Nhập vào một số: '));
        let count = mang.filter(function (num) { return num === so; }).length;
        console.log(`Số phần tử ${so} xuất hiện trong mảng:`, count);
    } else if (choice === 7) {
        let viTri = parseInt(prompt('Nhập vị trí cần thêm: '));
        let giaTri = parseInt(prompt('Nhập giá trị cần thêm: '));
        mang.splice(viTri, 0, giaTri);
        console.log('Mảng sau khi thêm:', mang);
    } else if (choice === 8) {
        console.log('Thoát chương trình.');
        process.exit();
    } else {
        console.log('Lựa chọn không hợp lệ, vui lòng chọn lại.');
    }
}