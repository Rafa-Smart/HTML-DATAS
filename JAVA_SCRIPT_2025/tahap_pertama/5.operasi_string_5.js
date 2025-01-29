console.log("hai maniees");
console.log("===================")
// operasi string

// 1. bagaimana cara mengakses salah satu karakter dari string ini.

// jadi kita ingin mengambil huruf c maka;
// jadi ini artinya kita mengambil atau mengakses karakter dari dataString di index yang ke 2 yaitu c.
let dataString = "abcdef";
let dataKarakter = dataString.charAt(2);
console.log(`ini adalah karakternya = ${dataKarakter}`);

// tapi kalo misal kita ingin mengakses karakter dari suatu variable tetapi karakter tersebut tidak ada, maka tidak akna eror, namun nanti si consolenya tidak akan ada muncul apa apa / kosong
console.log("===================")

// 2. menambah string / menambung string
let namaDepan = "Ucup";
let namaBelakang = "Surucup";
// nah didalam fungsi concat ini ada argumen bertipe string, dan menyuruh kita untuk mengisi, apa yang ingin disambungkan data Stringnya.
// let namaLengkap = namaDepan.concat(namaBelakang);

// tapi dari contoh diatas, kita tidak bisa menambahkan spasi diantaranya maka caranya adalah,
let namaLengkap = namaDepan.concat(' ',namaBelakang,' ','si keren');

console.log(`ini adalah nama lengkapnya = ${namaLengkap}`);

// 3. mengambil nomor indexnya
console.log("===================");
// ini kan yang hurufnya ada 1 didalam kalimat tersebut.
console.log(`ini adalah index k = ${namaLengkap.indexOf("k")}`);

// ini yang ketika mencari huruf yang ada banyak pada kalimat tersebut.
// maka yang diambil adalah c yang pertamanya saja.
console.log(`ini adalah index c = ${namaLengkap.indexOf("c")}`);

// dan ini juga akan sensitif, yaitu akan membedakan huruf yang besar maupun yang kecil

console.log(`ini adalah index U besar = ${namaLengkap.indexOf("U")}`);

// dan ini ketika kita ingin mengetahui index dari suatu karakter pada sebuah variable, yang ternyata karakter tersebut tidak ada maka, fungsi dari indexOf akan mengembalikan nilai -1
console.log(`ini adalah index karakter yg tdk ada (y) = ${namaLengkap.indexOf("y")}`);

console.log("===================");

// 3. substring atau mengambil kalimat atau kata atau lebih dari 1 karakter dari seuah string.
// dan kita jika ingin mengambil di index yang ke 11 maka harus ditmbahkan 1 jadi 12 agar terbaca
console.log(`mengambil surucup = ${namaLengkap.substring(5,12)}`)

// atau mencarinya juga bisa dibalik seperti :
console.log(`mengambil surucup (terbalik) = ${namaLengkap.substring(12,5)}`)


console.log("===================");
// 4. memotong / slices string

// sebenarnya mirip dengan yang di substring tapi,
console.log(`memotong bagian index 5-12 = ${namaLengkap.slice(5,12)}`)
// tapi kalo terbalik maka akan kosong / berati tidak bisa karena indexnya tidak ada.
console.log(`memotong bagian index 5-12 (terbalik) = ${namaLengkap.slice(12,5)}`)

// 5. mengganti string / replace
console.log(`ini adalah nama lengkap sebelum = ${namaLengkap}`);

// berati kita harus buat dulu variable baru
let namaBaru = namaLengkap.replace("Ucup Surucup","Otong Surotong");
console.log(`ini adalah nama lengkap sesudah = ${namaBaru}`)

/* atau bisa juga seperti ini cara penulisannya
let namaBaru = namaLengkap.replace("Ucup Surucup","Otong Surotong");*/


//  jika kita di parameter pertamanya salah atau tidak sesuai dnegan nama pada variable aslinya contoh
let namaCoba = namaLengkap.replace("Ucup Sianjing","Otong")
console.log(`ini adalah jika parameter ke-1 tidak sesuai dengan variable aslinya = ${namaCoba}`)
// maka akan tetap seperti itu dan tidak erorr

// tapi kalo kita pake '${namaLengkap} maka semua atau seluruh kalimat atau string yang ada pada variable terseut akan terganti / tereplace

console.log("===================");

// 5. toLower
console.log(`menjadi kecil semua = ${namaLengkap.toLowerCase()}`)

console.log("===================");

// 5. toUpper
console.log(`menjadi kecil semua = ${namaLengkap.toUpperCase()}`)

console.log("===================");

// mengkonversi tipe data dari string ke integer

// bisa juga jadiin float pake parseFloat
let dataString2 = '10';
console.log(` data sebelum = ${typeof dataString2}`)

let dataInteger = parseInt(dataString2)
console.log(` data setelah = ${typeof dataInteger}`)

console.log("===================");
// atau sebenarnya bisa juga seperti ini
let h = "10"
console.log(typeof h)
h = 17
console.log(typeof h)
