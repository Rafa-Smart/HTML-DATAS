

// data boolean
// jadi tipe data bool ini itu cuma ada true atau false dan biasa disebut juga binary
/* true = 1, nyala, maju, dll
   false = 0, mati, mundul, dll */

let dataBool = true;
console.log(dataBool)
console.log("==============")

// contoh kasus

// 1.
bataBool2 = (3<10);
console.log(`3 < 10 = ${bataBool2}`)

// 2.
console.log("==============")
let dataBool3 = ("ucup"=="otong")
console.log(`ucup = otong = ${dataBool3}`)

// 3.
console.log("==============")
// memastikan bahwa memang benar bahwa true itu 1 / 1n, begitu juga dengan false == 0 / 0n
let dataBool4 = (true == 1);
console.log(`true == 1 = ${dataBool4}`)

// 4.
console.log("==============")
// jadi false itu sama dengan string kosong
let dataBool5 = (false == " ");
console.log(` false == " " = ${dataBool5}`)

// 5.
console.log("==============")
// kalo dibandingkan dengan undefined maka hasilnya akan tetap false sama kayak Nan
let dataBool6 = (false == undefined);
console.log(`false == undefined = ${dataBool6}`)
dataBool6 = (true == undefined)
console.log(`true == undefined = ${dataBool6}`)


//          PENTING 
//          PENJELASAN CHAT GPT
/* // 1. Perbandingan Sama Dengan (==)
// Membandingkan dua nilai tanpa memperhatikan tipe data.
// Contoh:
let a = 5;
let b = "5";
console.log(a == b); // true, karena nilai sama meskipun tipe data berbeda

// 2. Perbandingan Tidak Sama Dengan (!=)
// Membandingkan dua nilai tanpa memperhatikan tipe data.
// Contoh:
console.log(a != b); // false, karena nilai sama meskipun tipe data berbeda

// 3. Perbandingan Sama Dengan Ketat (===)
// Membandingkan dua nilai dengan memperhatikan tipe data.
// Contoh:
console.log(a === b); // false, karena nilai sama tetapi tipe data berbeda

// 4. Perbandingan Tidak Sama Dengan Ketat (!==)
// Membandingkan dua nilai dengan memperhatikan tipe data.
// Contoh:
console.log(a !== b); // true, karena nilai sama tetapi tipe data berbeda

// 5. Perbandingan Lebih Besar Dari (>)
// Membandingkan apakah nilai pertama lebih besar dari nilai kedua.
// Contoh:
let c = 10;
let d = 5;
console.log(c > d); // true, karena 10 lebih besar dari 5

// 6. Perbandingan Lebih Kecil Dari (<)
// Membandingkan apakah nilai pertama lebih kecil dari nilai kedua.
// Contoh:
console.log(c < d); // false, karena 10 tidak lebih kecil dari 5

// 7. Perbandingan Lebih Besar Dari atau Sama Dengan (>=)
// Membandingkan apakah nilai pertama lebih besar atau sama dengan nilai kedua.
// Contoh:
console.log(c >= d); // true, karena 10 lebih besar dari 5
console.log(c >= 10); // true, karena 10 sama dengan 10

// 8. Perbandingan Lebih Kecil Dari atau Sama Dengan (<=)
// Membandingkan apakah nilai pertama lebih kecil atau sama dengan nilai kedua.
// Contoh:
console.log(c <= d); // false, karena 10 tidak lebih kecil dari 5
console.log(c <= 10); // true, karena 10 sama dengan 10

// 9. Perbandingan Ternary Operator (?:)
// Membandingkan dua nilai dan mengembalikan nilai berdasarkan kondisi.
// Contoh:
let e = 15;
let f = 10;
let result = e > f ? "e lebih besar" : "e tidak lebih besar";
console.log(result); // "e lebih besar", karena 15 lebih besar dari 10

// 10. Perbandingan Nullish Coalescing (??)
// Mengembalikan nilai pertama jika tidak null atau undefined . jika benar yaaa, jika tidak bernar akan mengembalikan nilai kedua.
// Contoh:
// ini mah kayanya disuruh nyari yang true doang

let g = null;
let h = "Nilai Default";
console.log(g ?? h); // "Nilai Default", karena g adalah null

// 11. Perbandingan Logical AND (&&)
// Mengembalikan nilai pertama jika falsy, jika tidak mengembalikan nilai kedua.
// Contoh:
let i = true;
let j = false;
console.log(i && j); // false, karena j adalah false

// 12. Perbandingan Logical OR (||)
// Mengembalikan nilai pertama jika truthy, jika tidak mengembalikan nilai kedua.
// Contoh:
console.log(i || j); // true, karena i adalah true

// 13. Perbandingan Logical NOT (!)
// Membalikkan nilai boolean.
// Contoh:
console.log(!i); // false, karena i adalah true
console.log(!j); // true, karena j adalah false

// 14. Perbandingan Object.is()
// Membandingkan dua nilai dengan cara yang sama seperti ===, tetapi dengan penanganan khusus untuk NaN dan -0.
// Contoh:
let k = NaN;
let l = NaN;
console.log(Object.is(k, l)); // true, karena NaN dianggap sama dengan NaN
console.log(Object.is(0, -0)); // false, karena 0 dan -0 dianggap berbeda

// 15. Perbandingan instanceof
// Membandingkan apakah suatu objek adalah instance dari suatu constructor.
// Contoh:
let arr = [1, 2, 3];
console.log(arr instanceof Array); // true, karena arr adalah instance dari Array

// 16. Perbandingan in
// Membandingkan apakah suatu properti ada dalam suatu objek.
// Contoh:
let obj = { name: "John", age: 30 };
console.log("name" in obj); */



//          PENJELASAN LAGI
/* // ==================================================
// 1. Perbandingan Sama Dengan (==)
// Membandingkan dua nilai tanpa memperhatikan tipe data (hanya memeriksa nilai).
// Contoh:
let a = 5;
let b = "5";
console.log(a == b); // true, karena nilai sama meskipun tipe data berbeda

// ==================================================
// 2. Perbandingan Tidak Sama Dengan (!=)
// Membandingkan dua nilai tanpa memperhatikan tipe data (hanya memeriksa nilai).
// Contoh:
console.log(a != b); // false, karena nilai sama meskipun tipe data berbeda

// ==================================================
// 3. Perbandingan Sama Dengan Ketat (===)
// Membandingkan dua nilai dengan memperhatikan tipe data dan nilai.
// Contoh:
console.log(a === b); // false, karena nilai sama tetapi tipe data berbeda

// ==================================================
// 4. Perbandingan Tidak Sama Dengan Ketat (!==)
// Membandingkan dua nilai dengan memperhatikan tipe data dan nilai.
// Contoh:
console.log(a !== b); // true, karena nilai sama tetapi tipe data berbeda

// ==================================================
// 5. Perbandingan Lebih Besar Dari (>)
// Membandingkan apakah nilai pertama lebih besar dari nilai kedua.
// Contoh:
let c = 10;
let d = 5;
console.log(c > d); // true, karena 10 lebih besar dari 5

// ==================================================
// 6. Perbandingan Lebih Kecil Dari (<)
// Membandingkan apakah nilai pertama lebih kecil dari nilai kedua.
// Contoh:
console.log(c < d); // false, karena 10 tidak lebih kecil dari 5

// ==================================================
// 7. Perbandingan Lebih Besar Dari atau Sama Dengan (>=)
// Membandingkan apakah nilai pertama lebih besar atau sama dengan nilai kedua.
// Contoh:
console.log(c >= d); // true, karena 10 lebih besar dari 5
console.log(c >= 10); // true, karena 10 sama dengan 10

// ==================================================
// 8. Perbandingan Lebih Kecil Dari atau Sama Dengan (<=)
// Membandingkan apakah nilai pertama lebih kecil atau sama dengan nilai kedua.
// Contoh:
console.log(c <= d); // false, karena 10 tidak lebih kecil dari 5
console.log(c <= 10); // true, karena 10 sama dengan 10

// ==================================================
// 9. Perbandingan Ternary Operator (?:)
// Membandingkan dua nilai dan mengembalikan nilai berdasarkan kondisi.
// Contoh:
let e = 15;
let f = 10;
let result = e > f ? "e lebih besar" : "e tidak lebih besar";
console.log(result); // "e lebih besar", karena 15 lebih besar dari 10

// ==================================================
// 10. Perbandingan Nullish Coalescing (??)
// Mengembalikan nilai pertama jika tidak null atau undefined, jika tidak mengembalikan nilai kedua.
// Contoh:
let g = null;
let h = "Nilai Default";
console.log(g ?? h); // "Nilai Default", karena g adalah null

// ==================================================
// 11. Perbandingan Logical AND (&&)
// Mengembalikan nilai pertama jika falsy, jika tidak mengembalikan nilai kedua.
// Contoh:
let i = true;
let j = false;
console.log(i && j); // false, karena j adalah false

// ==================================================
// 12. Perbandingan Logical OR (||)
// Mengembalikan nilai pertama jika truthy, jika tidak mengembalikan nilai kedua.
// Contoh:
console.log(i || j); // true, karena i adalah true

// ==================================================
// 13. Perbandingan Logical NOT (!)
// Membalikkan nilai boolean.
// Contoh:
console.log(!i); // false, karena i adalah true
console.log(!j); // true, karena j adalah false

// ==================================================
// 14. Perbandingan Object.is()
// Membandingkan dua nilai dengan cara yang sama seperti ===, tetapi dengan penanganan khusus untuk NaN dan -0.
// Contoh:
let k = NaN;
let l = NaN;
console.log(Object.is(k, l)); // true, karena NaN dianggap sama dengan NaN
console.log(Object.is(0, -0)); // false, karena 0 dan -0 dianggap berbeda */