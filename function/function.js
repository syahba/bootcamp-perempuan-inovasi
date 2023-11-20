// exercise

// 1. function toko online
const onlineShop = (customer = 'pelanggan', product = 'produk kami') => { 
    return `Terima kasih ${customer} telah membeli produk ${product}` 
};
console.log(onlineShop('syahba', 'susu sapi'));

// 2. function ubah fahrenheit ke celcius dengan function helper
const multiply = (num) => { return num * (5/9) }; // function helper untuk mengkali
const getCelcius = (fahrenheit) => { return multiply(fahrenheit) - 32 }; // function utama untuk convert
console.log(getCelcius(99));

// 3. hitung umut kucing ke manusia
const getAge = (age) => {
    let res;
    if (age == 1) {
        res = 15;
    } else if (age == 2) {
        res = 24;
    } else if (age >= 3) {
        res = 24 + (4 * (age - 2));
    } else {
        return 'coba masukan umur lebih dari 0!';
    };
    return `umur kucing ${age} sama dengan umur manusia ${res}`;
};
console.log(getAge(3));

// 4. mengubah string jadi huruf kecil
const getLowerCase = (text) => text.toLowerCase();
console.log(getLowerCase('UBAH Jadi kEcIL'));