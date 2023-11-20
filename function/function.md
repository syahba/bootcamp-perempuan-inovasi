questions

1. kapan harus menggunakan function?
function digunakan ketika kita membuat program yang akan digunakan berulang kali. (e.g. pada sebuah aplikasi dibuat function validasi data registrasi, ini dibuat function karena akan digunakan berulang kali dan dipanggil terus untuk validasi setiap data yang masuk).

2. apa bedanya parameter dan argumen?
- parameter adalah variable yang digunakan untuk menerima input pada sebuah function.
- argumem adalah nilai yang digunakan saat memanggil function atau input yang dimasukan ke function dengan parameter.
contoh: function test(param1, param2) { return param1 + param2 };
test(5, 3)
- param1 dan param2 adalah parameter pada function test. sedangkan 5 dan 3 adalah argumen yang dimasukan pada function test.

3. apa itu arrow function?
cara penulisan function lain yang baru ada pada ES6.

4. apakah wajib menggunakan return pada function? Jelaskan alasannya!
return tidak wajib ada pada sebuah function. function akan tetap bisa jalan tanpa ada return. tetapi return diperlukan ketika kita mengharapkan nilai balik dari sebuah function. jika function tanpa return dipanggil, function tersebut akan memberikan undefined, karena function tidak diminta untuk return variable atau nilai tertentu. 
contoh: 
- function test(param1, param2) { param1 + param2 } -> function akan tetap berjalan dan mengalkulasikan kedua parameter, tetapi function tidak akan memberikan hasil dari kalkulasi tersebut.
- function test(param1, param2) { return param1 + param2 } -> sama seperti contoh diatas, function berjalan sesuai seharusnya, dan karena ada statement "return", function akan mengembalikan hasil dari kalkulasi