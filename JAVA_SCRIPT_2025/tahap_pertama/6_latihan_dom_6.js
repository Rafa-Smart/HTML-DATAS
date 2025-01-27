/* kita akan mengambil id id dari html menggunakan ilmu dom = dukumen objek model */

// ini kita buat dulu variable letnya
let namaDepan, namaBelakang, namaLengkap;

// ini ada cara terbaru
// jadi cara pertama ini kita buat dulu fungsinya lalu nanti bisa dipanggil
function nama_anjay() {
        // ini adaah isi dari fungsinya

    // mengambil data yang di input oleh user pada nama depan dan belakang
    
    // kita mengggunakan valuenya saja
    // disini perlu diperhatikan bahwa
    // "" , '' ini berpengaruh ya
    // kalo misal di htmlnya "" tapi disini kita panggilnya adalah '' maka tidak akna terpanggil.
    namaDepan = document.getElementById("nama_depan").value;
    namaBelakang = document.getElementById("nama_belakang").value;
    // namaLengkap = namaDepan.concat(" ",namaBelakang)

    // menggabungkan namaDepan dan namaBelakang dan dimasukan ke variable namaLengkap
    namaLengkap = namaDepan.concat(" ",namaBelakang)

    // alert(`hello ${namaLengkap}`);

    // disini kita kasih textcontent karena kita ingin menampilkan textnya saja

    // nanti liat di w3scholl bahwa elemen elemn ini punya tipe data apa


    document.getElementById("nama_lengkap").textContent = namaLengkap + " " +"kamu indah banget";

    // ini gabisa ya 
    // ini eharusnya bisa sih tapi harus buat dulu variable letnya terpisah dan di variabe itu sudah di concat
    // textContent = namaLengkap.concat(" ","kamu indaah sekali");
}




// memanggil fungsi nama_anjay
document.getElementById("button_hasil").onclick = nama_anjay;




// ini cara kedua


// disini kit buat dulu variable letnya



// mengakses button
/* jadi 
1. dokument = ini adalah keeluruhan html.
2. getElementById = ini maksudnya kita akan mengambil  elemen / id dari html berdasarkan nama idnya.
3. onclick = ini artinya kita menambahkan event yaitu event ketika di click maka onclick ini akan sama dengan atau berisi sebuah fungsi yang akan dieksekusi*/
// document.getElementById("button_hasil").onclick
// = function() {
//     // ini adaah isi dari fungsinya

//     // mengambil data yang di input oleh user pada nama depan dan belakang
    
//     // kita mengggunakan valuenya saja
//     // disini perlu diperhatikan bahwa
//     // "" , '' ini berpengaruh ya
//     // kalo misal di htmlnya "" tapi disini kita panggilnya adalah '' maka tidak akna terpanggil.
//     namaDepan = document.getElementById("nama_depan").value;
//     namaBelakang = document.getElementById("nama_belakang").value;
//     // namaLengkap = namaDepan.concat(" ",namaBelakang)
//     namaLengkap = namaDepan + " " + namaBelakang;

//     // alert(`hello ${namaLengkap}`);

//     // disini kita kasih textcontent karena kita ingin menampilkan textnya saja

//     // nanti liat di w3scholl bahwa elemen elemn ini punya tipe data apa
//     document.getElementById("nama_lengkap").textContent = namaLengkap + " " +"kamu indah banget";


// };


















/* document.getElementById("button_hasil").onclick = function(). apakah di kalimat setelah function bisa di pake nama fungsinya misal .onclick = function nama_fungsi()

BLACKBOXAI

Tidak, dalam sintaks JavaScript, Anda tidak bisa langsung memberikan nama fungsi setelah kata kunci function dalam konteks penugasan langsung seperti itu. Jika Anda ingin memberikan nama fungsi, Anda harus mendefinisikan fungsi tersebut terlebih dahulu, lalu menggunakannya sebagai referensi.

Berikut adalah contoh yang benar:

1. Menggunakan fungsi anonim (tanpa nama):
javascript
Insert Code
Run
Copy code
document.getElementById("button_hasil").onclick = function() {
    // Kode yang akan dijalankan saat tombol diklik
};
2. Menggunakan fungsi bernama:
Anda harus mendefinisikan fungsi tersebut terlebih dahulu, lalu menggunakannya sebagai referensi:

javascript
Insert Code
Run
Copy code
function nama_fungsi() {
    // Kode yang akan dijalankan saat tombol diklik
}

document.getElementById("button_hasil").onclick = nama_fungsi;
Penjelasan:
Pada contoh pertama, Anda langsung mendefinisikan fungsi anonim (tanpa nama) dan menugaskannya ke properti onclick.
Pada contoh kedua, Anda mendefinisikan fungsi bernama nama_fungsi, lalu menugaskan referensi fungsi tersebut ke properti onclick.
Kesalahan yang sering terjadi:
Jika Anda mencoba menulis seperti ini:

javascript
Insert Code
Run
Copy code
document.getElementById("button_hasil").onclick = function nama_fungsi() {
    // Kode yang akan dijalankan saat tombol diklik
};
Ini akan menghasilkan sintaks yang tidak valid karena Anda tidak bisa memberikan nama fungsi dalam konteks penugasan langsung seperti itu.

Jadi, jika Anda ingin menggunakan fungsi bernama, pastikan Anda mendefinisikannya terlebih dahulu, lalu menugaskannya ke properti onclick. */