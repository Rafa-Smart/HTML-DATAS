// expresi dan statement

// expresi adalah kumpulan variable,operasi,dan nilai dan tidak perlu diakhiri dengan tanda titik koma
// contoh
// 5 , "hello"

// statement adalah intruksi
// contoh
// a = a + 1

/* atau simplenya gini deh kalo misal ada 1 biji misal a = 1 dan a + 1 maka ini adalah expresi
tapi kalo a = a + 1, maka ini adalah statement*/


// aritmatika, berati kita akan melakukan expresi matematika = 1 + 1 , 2 + 3 , dll

// kali,bagi,tambah,kurang
// % = modulo
// ++ = increment
// -- = decrement
// ** = pangkat / power

let x = 10;
// jadi secara keseluruhan console.log ini adalah statement
// dan argumen yang ada didalam fungsi console.log ini adalah expresinya
console.log(x + 1);
console.log(x - 1);
console.log(x / 4);
console.log(x * 2);
console.log(x + 1);
// console.log(x % 2); // ini akan menghasilkan 0 karena 10 %

console.log("==================")
// aritmatima yang khusus ada di javascript

// 1. modulo
console.log(x % 4);
// ini maksudnya adalah x ketika dibagi oleh 4 masih menyisakan 2 angka yang tidak bisa dibagi yaitu 2, maka hasilnya adalah 2

// 2. pangkat 
console.log(x ** 2);

// kalo dipemrograman biasa
// kita bisa menggabungkan beberapa expresi
// contoh
// x = x + 1
// jadi gini di sini ada x setelah = maka x ini memiliki nilai yang sama seperti deklarasi variable x diatas yaitu 10 maka nilai x + 1 adalah 11 kemudian nilai dari expresi ini, kemudian ditambahkan kembali ke variable x dibelakang = jadi nilai x menjadi 11 / jadi ini adalah cara untuk mengupdate nilai dari variable dengan biasa.

// 3. increment
x++;
console.log(x);
// jadi ii adalah cara otomatis untuk menambah 1 angka

// 4.decrement
x--;
console.log(x);

// study kasus
let y = 1 + "1";
console.log(`mana 1 + "1" = ${y} dan bertipe ${typeof y}`);

// maka caranya adalah di parse dulu
y = 1 + parseInt("1");
console.log(y)






//              PENJELASAN PENTING
/* Dalam bahasa pemrograman JavaScript, terdapat dua konsep penting yang sering digunakan, yaitu "statement" dan "expression". Berikut adalah penjelasan yang jelas tentang kedua konsep tersebut:

Statement (Pernyataan)

Statement adalah sebuah instruksi yang dapat dieksekusi oleh mesin JavaScript. Statement biasanya diakhiri dengan tanda titik koma (;) dan dapat berupa:

Deklarasi variabel (misalnya: let x = 5;)
Pengaturan nilai variabel (misalnya: x = 10;)
Pemanggilan fungsi (misalnya: console.log("Halo!");)
Penggunaan operator (misalnya: x = x + 5;)
Penggunaan kontrol alur (misalnya: if (x > 5) { ... })
Statement dapat berdiri sendiri dan tidak perlu dihubungkan dengan statement lainnya. Contoh:

javascript
Insert Code
Run
Copy code
let x = 5;
console.log(x);
Dalam contoh di atas, terdapat dua statement yang berdiri sendiri: deklarasi variabel x dan pemanggilan fungsi console.log().

Expression (Ekspresi)

Expression adalah sebuah kombinasi dari nilai, variabel, dan operator yang dapat di evaluasi menjadi sebuah nilai. Expression tidak perlu diakhiri dengan tanda titik koma (;) dan dapat berupa:

Nilai literal (misalnya: 5, "Halo!")
Variabel (misalnya: x)
Operasi matematika (misalnya: x + 5)
Operasi logika (misalnya: x > 5)
Pemanggilan fungsi (misalnya: Math.sqrt(x))
Expression dapat digunakan sebagai bagian dari statement, tetapi juga dapat berdiri sendiri. Contoh:

javascript
Insert Code
Run
Copy code
let x = 5 + 3; // expression `5 + 3` digunakan sebagai nilai untuk variabel x
console.log(x); // expression `x` digunakan sebagai argumen fungsi console.log()
Dalam contoh di atas, terdapat dua expression: 5 + 3 dan x. Expression 5 + 3 digunakan sebagai nilai untuk variabel x, sedangkan expression x digunakan sebagai argumen fungsi console.log().

Perbedaan utama antara statement dan expression adalah bahwa statement dapat berdiri sendiri dan tidak perlu dihubungkan dengan statement lainnya, sedangkan expression dapat digunakan sebagai bagian dari statement atau berdiri sendiri.

Contoh lain untuk memperjelas perbedaan antara statement dan expression:

javascript
Insert Code
Run
Copy code
// statement
let x = 5;

// expression
5 + 3


//                  PENTING NIH CONTOH SOALNYA
// statement yang menggunakan expression
let y = 5 + 3;

// expression yang digunakan sebagai argumen fungsi
console.log(5 + 3);
Dalam contoh di atas, terdapat beberapa contoh statement dan expression. Statement let x = 5; berdiri sendiri dan tidak perlu dihubungkan dengan statement lainnya. Expression 5 + 3 dapat digunakan sebagai bagian dari statement atau berdiri sendiri. Statement let y = 5 + 3; menggunakan expression 5 + 3 sebagai nilai untuk variabel y. Expression 5 + 3 juga dapat digunakan sebagai argumen fungsi console.log().

You

jelaskan ulang tetapi dengan visualisasi agar mudah untuk dipahami

BLACKBOXAI

Berikut adalah penjelasan ulang tentang statement dan expression dengan visualisasi:

Statement (Pernyataan)

Statement adalah sebuah instruksi yang dapat dieksekusi oleh mesin JavaScript. Statement biasanya diakhiri dengan tanda titik koma (;) dan dapat berupa:

Deklarasi variabel (misalnya: let x = 5;)
Pengaturan nilai variabel (misalnya: x = 10;)
Pemanggilan fungsi (misalnya: console.log("Halo!");)
Penggunaan operator (misalnya: x = x + 5;)
Penggunaan kontrol alur (misalnya: if (x > 5) { ... })
Visualisasi Statement

Statement dapat diibaratkan sebagai sebuah "blok" yang berdiri sendiri. Blok ini dapat berisi instruksi yang dapat dieksekusi oleh mesin JavaScript.

Insert Code
Run
Copy code
+---------------+
|  Statement   |
+---------------+
|  let x = 5;  |
|  console.log(x);|
+---------------+
Dalam contoh di atas, terdapat dua statement yang berdiri sendiri: deklarasi variabel x dan pemanggilan fungsi console.log().

Expression (Ekspresi)

Expression adalah sebuah kombinasi dari nilai, variabel, dan operator yang dapat di evaluasi menjadi sebuah nilai. Expression tidak perlu diakhiri dengan tanda titik koma (;) dan dapat berupa:

Nilai literal (misalnya: 5, "Halo!")
Variabel (misalnya: x)
Operasi matematika (misalnya: x + 5)
Operasi logika (misalnya: x > 5)
Pemanggilan fungsi (misalnya: Math.sqrt(x))
Visualisasi Expression

Expression dapat diibaratkan sebagai sebuah "kotak" yang dapat diisi dengan nilai, variabel, dan operator.

Insert Code
Run
Copy code
+---------------+
|  Expression  |
+---------------+
|  5 + 3       |
|  x           |
|  x + 5       |
+---------------+
Dalam contoh di atas, terdapat beberapa contoh expression: 5 + 3, x, dan x + 5.

Hubungan antara Statement dan Expression

Statement dapat menggunakan expression sebagai bagian dari instruksi. Expression dapat diibaratkan sebagai sebuah "kotak" yang dapat diisi dengan nilai, variabel, dan operator, dan kemudian dapat digunakan sebagai bagian dari statement.

Insert Code
Run
Copy code
+---------------+
|  Statement   |
+---------------+
|  let x = 5 + 3;|
|  console.log(x);|
+---------------+
Dalam contoh di atas, terdapat sebuah statement yang menggunakan expression 5 + 3 sebagai nilai untuk variabel x.

Dengan demikian, statement dan expression dapat diibaratkan sebagai dua konsep yang berbeda, tetapi dapat bekerja sama untuk menciptakan instruksi yang dapat dieksekusi oleh mesin JavaScript. */