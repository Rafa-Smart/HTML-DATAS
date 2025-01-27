console.log("hai sayang");

let dataString = "rafa";
console.log(typeof dataString)

console.log("=========")

// 1. escaping string = ( \' , \" , \\ , \n , \r , \t , \b , \f )

// kasus pertama

// let data1 = "ucup berkata"kamu cantik sekali"";
// nah jadi program akan menganggap string nya beres hanya di ucup berkata nya saja, kalo bagian kamu cantik sekali itu tidak terbaca.

// maka caranya adalah :
let data1 = 'ucup berkata "kamu cantik sekali :)"';
console.log(data1);

console.log("=========")

// atau cara lain yaitu menggunakan escaping karakter = 
let data2 = "ucup berkata lagi \"apakah kamu bidadari ?\"";
// nah ini artinya jika ada tanda \ maka setelahnya akan dianggap sebagai tanda kutip.
console.log(data2);

console.log("=========")

// kasus 2
// let data3 = "ucup berjalan jalan di tepi pantai";
// nah kita ingin agar kalimat setelah kata tepi itu menjadi baris baru, maka kita bisa menggunakan escape character \n
// caranya

console.log("=========")

let data3 = "ucup berjalan jalan di tepi \npantai";
console.log(data3)

// kasus 3
// let data4 = "ucup menggunakan laptop thinkpad";
// nah kita ingin agar ada tab tambahan di awal kalimat, maka kita bisa menggunakan escape character \t

// caranya
let data4 = "ucup menggunakan laptop \tthinkpad";
console.log(data4)
console.log("=========")

// kasus 4

let data5 = "ucup salto \\pantai";
console.log(data5)

console.log("===================")


// kemudian ada literal string (template literal string)

let namaDepan = "otong";
let namaBelakang = "surotong";
let umur = 7;
let namaLengkap = namaDepan + " " + namaBelakang + " " + umur;
// dan disini nilai umur berubah menjadi string karena, kita menggabungkannya dengan string lainnya
console.log(namaLengkap);

console.log("===================");
// dan cara mudahnya adalah menggunakan
// yaitu menggunakan template literal string

let biodata = `${namaLengkap} ${namaBelakang} ${umur}`
console.log(`${biodata}`);




// // \'
// Apa fungsinya?
// Digunakan untuk menulis tanda kutip tunggal (') dalam string yang dibatasi oleh tanda kutip tunggal.
// Contoh:
// javascript
// Insert Code
// Run
// Copy code
// let text = 'It\'s a beautiful day';
// console.log(text); // Output: It's a beautiful day
// Tanpa \', program akan bingung karena tanda kutip tunggal dianggap sebagai akhir string.
// 2. \"
// Apa fungsinya?
// Digunakan untuk menulis tanda kutip ganda (") dalam string yang dibatasi oleh tanda kutip ganda.
// Contoh:
// javascript
// Insert Code
// Run
// Copy code
// let text = "He said, \"Hello!\"";
// console.log(text); // Output: He said, "Hello!"
// Tanpa \", program akan menganggap tanda kutip ganda sebagai akhir string.
// 3. \\
// Apa fungsinya?
// Digunakan untuk menulis backslash (\) dalam string.
// Contoh:
// javascript
// Insert Code
// Run
// Copy code
// let path = "C:\\Program Files\\";
// console.log(path); // Output: C:\Program Files\
// Tanpa \\, backslash akan dianggap sebagai awal karakter escape.
// 4. \n
// Apa fungsinya?
// Digunakan untuk membuat baris baru (newline).
// Contoh:
// javascript
// Insert Code
// Run
// Copy code
// let text = "Hello\nWorld";
// console.log(text);
// // Output:
// // Hello
// // World
// \n memisahkan teks menjadi dua baris.
// 5. \r
// Apa fungsinya?
// Digunakan untuk mengembalikan kursor ke awal baris (carriage return).
// Contoh:
// javascript
// Insert Code
// Run
// Copy code
// let text = "Hello\rWorld";
// console.log(text); // Output: World
// \r membuat kursor kembali ke awal, sehingga "World" menimpa "Hello".
// 6. \t
// Apa fungsinya?
// Digunakan untuk membuat tab (spasi horizontal).
// Contoh:
// javascript
// Insert Code
// Run
// Copy code
// let text = "Name:\tJohn";
// console.log(text); // Output: Name:    John
// \t menambahkan spasi sebesar tab.
// 7. \b
// Apa fungsinya?
// Digunakan untuk menghapus satu karakter sebelumnya (backspace).
// Contoh:
// javascript
// Insert Code
// Run
// Copy code
// let text = "Hello\b World";
// console.log(text); // Output: Hell World
// \b menghapus huruf "o" dari "Hello".
// 8. \f
// Apa fungsinya?
// Digunakan untuk membuat form feed (halaman baru, sering digunakan dalam pencetakan).
// Contoh:
// javascript
// Insert Code
// Run
// Copy code
// let text = "Hello\fWorld";
// console.log(text); // Output: Hello World (dengan efek form feed)
// \f biasanya digunakan dalam konteks pencetakan untuk memulai halaman baru.
