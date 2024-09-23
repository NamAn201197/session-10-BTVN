// // Tạo ra chương trình quản lý các món ăn

// // let dish 1 = "sashimi";
// // let dish 2 = "sushi";
// // let dish 3 = "kim";
// // let dish 4 = "steak";
// // let dish 5 = "pork";
// // let dish 6 = "beef";
// // let dish 7 = "rice";
// // //
// // let dish 100 = "chicken";

// // sủ đụng đúng kiểu dữ liệu dành cho việc lưu trữ
// // solution >> sử dụng kiểu dữ liệu array (list) - mảng/danh sách

// let menu = [
//   "sashimi",
//   "sushi",
//   "steak",
//   "pork",
//   "beef",
//   "Rice",
//   "chicken",
//   "salmon",
//   "fish",
// ];
// // //chỉ số cuối cùng phần tử = độ dài -1 (length -1)
// // console.log("Danh sách menu: ", menu);
// // // gọi món
// // // menu[7];
// // // // Read ONE
// // console.log("xin mời: ", menu[7]);
// // // // Read ALL

// for (let i = 0; i <= menu.length - 1; i = i + 1) {
//   console.log("Giá mới:", menu[i], "99k");
// }
// // thêm vào đầu menu
// menu.unshift("mashed potato");
// console.log("Thêm vào đầu menu:", menu);
// // Thêm vào cuối
// menu.push("Pasta");
// console.log("Thêm vào đầu menu:", menu);

// // cập nhập lại giá trị trong mảng
// menu[5] = "fried rice";
// console.log("cập nhập:", menu);

// //Xóa phần tử
// menu.shift();
// console.log("Xóa phần tử đầu", menu);

// // Xóa phần tử cuối
// menu.pop();
// console.log("xóa phần tử cuối", menu);

// // Câu lệnh đa năng. vừa thêm vừa xóa
// menu.splice(4, 1);
// console.log("xóa/thêm phần tử bất kỳ", menu);
// menu.splice(4, 4);
// console.log("xóa/thêm 4 phần tử từ mị trí #4 trở đi  ", menu);

// //
// menu.splice(2, 0, "fired rice Frog"); // thêm bao nhiêu phần tử cũng được
// console.log("Sau khi thêm phần tử", menu);
// ////
// ////
// // Ex1:
// //  Cho 1 mảng: number = []

// // cho phép ng dùng nhập vào giá trị bất kỳ
// // và số lượng bất kỳ

// // Tiến hành in ra toàn bộ phần tử có trong mảng

// let number = [];

// let numberLength = +prompt("Nhập số lượng bất kỳ");

// for (let i = 0; i < numberLength; i = i + 1) {
//   let element = prompt("Nhập phần tử thứ " + i);
//   number.push(element);
// }

// for (let i = 0; i <= number.length - 1; i = i + 1) {
//   console.log("Phần tử thứ", i, number[i]);
// }
// // tính tổng
// let sum = 0;
// let total = 1;
// for (let i = 0; i <= number.length - 1; i = i + 1) {
//   sum = sum + number[i];
//   total = total * number[i];
// }
// console.log("Tổng =", sum);
// console.log("Tích=", total);

/////////////BTVN///////////// Buổi 14
// // // BT 1
let array = [1, "hello", 3.14, 42, "world", true, 10];
let element = [];
// Kiểm tra mảng
for( i = 0; i <= array.length - 1; i = i + 1){
    if (Number.isInteger(array[i])){
        element.push(array[i]);
    }
}
// điều kiện để in
if (element.length > 0) {
    console.log("Các số nguyên", element);
}else{
    console.log("không tồn tại");
}

// // // BT 2

let array = [10, 30, 50, 70, 90];
let n = +prompt("Nhập giá trị bất kỳ");
//tìm kiếm giá trị trong mảng(indexOf)

let check = array.indexOf(n);

if (check !== -1) {
  console.log(
    "Giá trị có trong mảng: " + n,
    "Vị trí giá trị trong mảng: " + check
  );
} else {
  console.log("Không tồn tại");
}

// // // BT 3

let array = [10, 30, 50, 70, 90, 10, 30, 50, 70, 90];
let n = +prompt("Nhập giá trị");

// Biến đếm số lần xuất hiện trong mảng (count = 0;)
let count = 0;

// Lặp qua từng phần tử trong mảng và đếm số lần xuất hiện
for (i = 0; i <= array.length - 1; i = i + 1) {
  if (array[i] === n) {
    count = count + 1;
  }
}

if (count > 0) {
  console.log("Giá trị nhập: " + n, "Số lần xuất hiện: " + count);
} else {
  console.log("Giá trị nhập không tồn tại");
}

// // // BT 4

let a = +prompt("Nhập số nguyên dương a: ");
let b = +prompt("Nhập số nguyên dương b: ");
//mảng chưa kết quả
let array = [];
// dk a và b là số nguyên dương
if (Number.isInteger(a) && a > 0 && Number.isInteger(b) && b > 0) {
  // các số chia hết cho b, trong khoảng 1 - a
  for (i = 1; i <= a; i = i + 1) {
    if (i % b === 0) {
      array.push(i);
    }
  }
  // các số chia hết cho a, trong khoảng 1 - b
  for (i = 1; i <= b; i = i + 1) {
    if (i % a === 0) {
      array.push(i);
    }
  }
  console.log(array);
} else {
  console.log("Vui lòng nhập số nguyên dương hợp lệ.");
}
