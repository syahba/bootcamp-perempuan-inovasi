// exercise

// 1. if else tugas divisi start up
const job = 'guru';
let activity;
if (job == 'HR') {
    activity = 'melakukan rekrutmen untuk pegawai baru';
} else if (job == 'developer') {
    activity = 'melakukan development pada sebuah produk'
} else if (job == 'ui/ux') {
    activity = 'membuat solusi desain untuk ide product yang dibuat'
} else if (job == 'manager') {
    activity = 'memastikan pegawai bekerja sesuai tugasnya masing-masing'
} else {
    activity = 'tidak berada di perusahaan startup'
}
console.log(`jika saya sebagai ${job}, tugas saya ${activity}`);

// 2. membandingkan nilai
const num1 = 11;
const num2 = 3;
const comparison = num1 > num2 ? `${num1} lebih besar dari nilai ${num2}` : num1 < num2 ? `${num1} lebih kecil dari ${num2}`
    : `${num1} sama besar dengan ${num2}`;
console.log(comparison);

// 3. megetahui hari berdasarkan angka
const num = 6;
switch (num) {
    case 1:
        console.log(`hari ke-${num} adalah hari minggu`); break;
    case 2:
        console.log(`hari ke-${num} adalah hari senin`); break;
    case 3:
        console.log(`hari ke-${num} adalah hari selasa`); break;
    case 4:
        console.log(`hari ke-${num} adalah hari rabu`); break;
    case 5:
        console.log(`hari ke-${num} adalah hari kamis`); break;
    case 6:
        console.log(`hari ke-${num} adalah hari jumat`); break;
    case 7:
        console.log(`hari ke-${num} adalah hari sabtu`); break;
    default:
        console.log('masukan angka dari 1-7'); break;
};

// 4. buat game sederhana
const input = 'down';
const move = input.toUpperCase();
switch (move) {
    case 'UP':
        console.log('karakter bejalan ke atas'); break;
    case 'DOWN':
        console.log('karakter bejalan ke bawah'); break;
    case 'RIGHT':
        console.log('karakter bejalan ke kanan'); break;
    case 'LEFT':
        console.log('karakter bejalan ke kiri'); break;
    default:
        console.log('masukan pilihan arah: up, down, right, left');
        break;
}