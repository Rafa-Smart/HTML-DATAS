// belajar numbers

let nilai_int = 10; // integer / bulat
let nilai_float = 10.5; // float / desimal
let nilai_big_int = 123n;
// tapi kalo misal kamu hanya pake 123n maka akan undefined
// console.log(`tipe data = ${typeof nilai_big_int}`);

// jadi pada javascript itu tidak ada tipe data int dan float, tetapi pake bilangan 64 bit nah jadi batasan dari bilangan int itu mempunyai rentang nya yaitu -2^53 sampai 2^53 - 1, nah ini adalah rentang yang aman dan bisa dipake, tetapi kalo misal kamu menggunakan bialngan yang diluar ini maka program javascript akan erorr akrena tidak bia memprosesnya tetapi jika kamu tetap ingin mengunakannya kamu harus menggunakan tipe data yang lainnya, contohnya bilangan bulat yang lebih besar yaitu big integer dengan menggunakan (n)

// lanjuutt

// misal kita punya nilai float /  berkoma
let angkaFloat = 5.876;
let angkaInteger = parseInt(angkaFloat);
// parseInt itu adalah fungsi yang digunakan untuk mengubah nilai float menjadi integer, tapi perlu diingat bahwa nilai float yang diubah menjadi integer akan diambil nilai yang paling dekat / simplenya dia akan mengambil angka paing depannya saja jadi misal float = 5.789 = int = 5
console.log(`tipe data = ${typeof angkaInteger}, ${angkaInteger}`);

// bisa juga dari int ke float pake parseFloat

let angkaInt_2 = 10;
let angkaFloat_2 = parseFloat(angkaInt_2);
console.log(`ini adalah angka int ke float = ${angkaFloat_2} dan bertipe ${typeof angkaFloat_2} int`);

// atau bisa juga untuk merubah dari string ke int atau float
let angkaString = "89";
console.log(`angka sebelum = ${angkaString} dnegan tipe ${typeof angkaString}`);
let angkaInt_3 = parseInt(angkaString)
console.log(`angka sesudah = ${angkaInt_3} dengan tipe ${typeof angkaInt_3}`);


// nahh bagaimana jika ita menambahkan angka bertipe string dengan angka bertipe int atau float
let data_5 = "100" + 20;
console.log(`ini adalah hasil penambahan = ${data_5} dengan tipe ${typeof data_5}`)
// ini hasilnya
// ini adalah hasil penambahan = 10020 dengan tipe string

// jadi akan cuma nambah saja diakhirnya tetapi tidak eror makanya kita harus mengubahnya terlebih dahulu menjadi int atau float baru bisa di tambah

let data_6 = "200"
console.log(`ini adalah data yang sudah di konversi lalu ditambah = ${parseInt(data_6)+20}`)


//              PENTING
// jadi parse itu gunanya akan memotong isi dari variable di depan dan akan mengambil angka saja, jadi misal kamu punya string = "123abc" maka parseInt akan mengambil 123 
// tapi kalo misalkan kamu punya data variable dg isi abc123 lalu kamu parse, maka akan Nan atau not a nuber, karena program hanya mengambil angka di depannya saja



                    // MATERI CHAT GPT
// Mari kita bahas secara detail tentang 64-bit dalam JavaScript, termasuk penjelasan tentang tipe data number, rentang nilai, dan manfaat memahami konsep ini untuk menjadi programmer yang handal.

// 1. JavaScript Tidak Memiliki Tipe Data int
// JavaScript tidak memiliki tipe data int seperti bahasa pemrograman lain (misalnya, Java atau C++). JavaScript hanya memiliki satu tipe data untuk angka, yaitu number. Tipe data number ini digunakan untuk merepresentasikan semua jenis angka, baik itu bilangan bulat (integer) maupun bilangan desimal (floating-point).

// 2. 64-bit Floating-Point (IEEE 754)
// JavaScript menggunakan format 64-bit floating-point (standar IEEE 754) untuk menyimpan angka. Ini berarti:

// Setiap angka dalam JavaScript disimpan dalam 64 bit.
// Format ini terdiri dari:
// 1 bit untuk tanda (sign).
// 11 bit untuk eksponen (exponent).
// 52 bit untuk mantissa (fraksi).
// 3. Rentang Nilai yang Dapat Disimpan
// Karena JavaScript menggunakan format 64-bit floating-point, rentang nilai yang dapat disimpan adalah:

// Bilangan positif terbesar: Sekitar 1.7976931348623157e+308 (ini adalah nilai dari Number.MAX_VALUE).
// Bilangan positif terkecil: Sekitar 5e-324 (ini adalah nilai dari Number.MIN_VALUE).
// Bilangan negatif terbesar: Sekitar -1.7976931348623157e+308.
// Bilangan negatif terkecil: Sekitar -5e-324.
// 4. Bilangan Bulat (Integer) dalam JavaScript
// Meskipun JavaScript menggunakan format floating-point, Anda tetap dapat bekerja dengan bilangan bulat (integer). Namun, ada batasan:

// Bilangan bulat aman (safe integer): JavaScript memiliki batas aman untuk bilangan bulat, yaitu dari -9007199254740991 (Number.MIN_SAFE_INTEGER) hingga 9007199254740991 (Number.MAX_SAFE_INTEGER).
// Jika Anda mencoba menggunakan bilangan bulat di luar rentang ini, JavaScript mungkin tidak dapat merepresentasikannya dengan tepat karena keterbatasan format floating-point.
// Contoh:

// javascript
// Insert Code
// Run
// Copy code
// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
// 5. Kesalahan Umum tentang 64-bit
// Anda menyebutkan 2^1024 - 1 dan -2^1024 - 1. Ini tidak benar. Berikut penjelasannya:

// Eksponen 11-bit dalam format IEEE 754 dapat merepresentasikan nilai dari -1022 hingga 1023 (bukan 1024).
// Nilai maksimum yang dapat direpresentasikan adalah sekitar 1.7976931348623157e+308, bukan 2^1024 - 1.
// 6. Contoh Kode
// Berikut adalah contoh kode untuk menguji batasan angka dalam JavaScript:

// javascript
// Insert Code
// Run
// Copy code
// // Nilai maksimum dan minimum yang dapat direpresentasikan
// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// console.log(Number.MIN_VALUE); // 5e-324

// // Bilangan bulat aman
// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// // Contoh melebihi batas aman
// console.log(9007199254740992 === 9007199254740993); // true, karena melebihi batas aman
// 7. Manfaat Memahami 64-bit dalam JavaScript
// Memahami konsep 64-bit dalam JavaScript memiliki beberapa manfaat penting:

// Menghindari Bug Numerik:

// Dengan memahami batasan Number.MAX_SAFE_INTEGER dan Number.MIN_SAFE_INTEGER, Anda dapat menghindari bug yang disebabkan oleh ketidakakuratan numerik saat bekerja dengan bilangan besar.
// Optimasi Kode:

// Mengetahui cara kerja angka dalam JavaScript membantu Anda menulis kode yang lebih efisien, terutama saat bekerja dengan perhitungan matematika atau algoritma yang melibatkan angka besar.