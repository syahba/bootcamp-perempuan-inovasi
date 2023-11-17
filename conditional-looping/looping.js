// exercise

// 1. menampilkan 100 user
for (let i = 1; i <= 100; i++) {
    console.log(`user ke-${i}`);
};

// 2. penambahan nilai
let result = [];
for (let index = 0; result.length < 10; index += 2) {
    result.push(index);
};
console.log(result);

// 3. mengecek nilai ganjil genap
for (let a = 0; a <= 20; a++) {
    const res = a % 2 == 0 ? `nilai ${a} adalah genap` : `nilai ${a} adalah ganjil`;
    console.log(res);
};

// 4. pop up loop