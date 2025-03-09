const prompt = require('prompt-sync')();
let mang = [];
let choice;
do {
    console.log(`
================== MENU ===================
1. Nhập số phần tử cần nhập và giá trị các phần tử
2. In ra giá trị các phần tử đang quản lý
3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần
4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng
5. In ra các số nguyên tố trong mảng và tính tổng
6. Nhập một số và đếm số lần xuất hiện trong mảng
7. Thêm một phần tử vào vị trí chỉ định
8. Xóa một phần tử theo giá trị
9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần
0. Thoát
============================================
`);
    choice = parseInt(prompt('Lựa chọn của bạn: '));
    switch (choice) {
        case 1:
            let n = parseInt(prompt('Nhập số phần tử cần nhập: '));
            mang = [];
            for (let i = 0; i < n; i++) {
                mang.push(parseInt(prompt(`Nhập giá trị phần tử thứ ${i + 1}: `)));
            }
            break;
        case 2:
            console.log('Các phần tử trong mảng:', mang);
            break;
        case 3:
            let chan = mang.filter(x => x % 2 === 0);
            let tongChan = chan.reduce((a, b) => a + b, 0);
            chan.sort((a, b) => b - a);
            console.log('Các phần tử chẵn:', chan);
            console.log('Tổng các phần tử chẵn:', tongChan);
            break;
        case 4:
            let max = Math.max(...mang);
            let min = Math.min(...mang);
            console.log('Giá trị lớn nhất:', max, 'vị trí:', mang.indexOf(max));
            console.log('Giá trị nhỏ nhất:', min, 'vị trí:', mang.indexOf(min));
            break;
        case 5:
            let isPrime = (num) => {
                if (num <= 1) return false;
                for (let i = 2; i <= Math.sqrt(num); i++) {
                    if (num % i === 0) return false;
                }
                return true;
            };
            let nguyenTo = mang.filter(isPrime);
            let tongNguyenTo = nguyenTo.reduce((a, b) => a + b, 0);
            console.log('Các số nguyên tố:', nguyenTo);
            console.log('Tổng các số nguyên tố:', tongNguyenTo);
            break;
        case 6:
            let x = parseInt(prompt('Nhập số cần đếm: '));
            let count = mang.filter(num => num === x).length;
            console.log(`Số lần xuất hiện của ${x}:`, count);
            break;
        case 7:
            let viTri = parseInt(prompt('Nhập vị trí cần thêm: '));
            let giaTri = parseInt(prompt('Nhập giá trị cần thêm: '));
            mang.splice(viTri, 0, giaTri);
            console.log('Mảng sau khi thêm:', mang);
            break;
        case 8:
            let giaTriXoa = parseInt(prompt('Nhập giá trị cần xóa: '));
            mang = mang.filter(num => num !== giaTriXoa);
            console.log('Mảng sau khi xóa:', mang);
            break;
        case 9:
            let luaChon = prompt('Nhập "tang" để sắp xếp tăng dần, "giam" để sắp xếp giảm dần: ');
            if (luaChon === 'tang') {
                mang.sort((a, b) => a - b);
            } else if (luaChon === 'giam') {
                mang.sort((a, b) => b - a);
            }
            console.log('Mảng sau khi sắp xếp:', mang);
            break;
        case 0:
            console.log('Thoát chương trình.');
            break;
        default:
            console.log('Lựa chọn không hợp lệ, vui lòng chọn lại.');
    }
} while (choice !== 0);