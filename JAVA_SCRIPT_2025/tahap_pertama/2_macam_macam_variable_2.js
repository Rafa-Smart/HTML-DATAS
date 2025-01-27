// ini adalah komen
console.log("Hello World");


// variable dengan let

let nama = "ucup surucup";

// menampilkan data
console.log(nama);

// kita ubah nilai dari variable nama
nama = "Rafa Khadafi";
console.log(nama);


// variable dengan var 
var namaDepan = "siamang";
console.log(namaDepan);

console.log("==================")

// 1. kelakuan dari let
// jadi scope itu adalah dimulai dnegan tanda { dan diakhiri }
let nama_belakang = "udin petot"
// jadi let itu akan dieksekusi hanya di dalam scope saja / jika kita punya let di luar scope maka let itu akan dieksekusi juga tapi dengan console yang ada diluar dari scope, asal keduanya sama sama diluar scope gitu.

// dan kalo kita komen yang diatas ini maka console yang memanggil nama_belakang tidak akan dijalankan karena let nya belum di inisiasi

{
    // tapi kalo misal kan kita
    // nama_belakang = "jamal_123";
    // maka yang console yang ada di luar scope juga akan berubah, karena let itu adalah mutable / dapat di ubah 
    // tapi harus di inisiasi dulu diatas coba aja buka komennya dan lihat perbedaannya
    let nama_belakang = "Rafael";
    console.log(nama_belakang);
}
// tapi kalo kita console.lognya di luar dari scope maka let yang ada di dalam scope tidak akan tereksekusi, nih
console.log(nama_belakang);

// maka yang tereksekusi adalah let yang ada di luar scope

// 2. kelakuan dari var
// jadi var itu adalah variable yang dapat diakses diliuar maupun didalam scope

// nah disini kenapa yang console.log yang diluar scope yang tereksekusi adalah si otong surotong karena var nama_tengah ini telah diubah dahulu di var yang ada di dalam scope, lalu console yang ada di dalam scope akan mengeksekusinya, kemudian console yang ada di luar scope akan mengambil inisiasi var yang terakhir, jadi ketika progra mengeksekusi kode itu, berdasarkan urutannya.
var nama_tengah = "keren";
{
    var nama_tengah = "otong ganteng";
    console.log(nama_tengah);
}
console.log(nama_tengah);

// kasus khusus 
// ini juga akan tetap tereksekusi :)
// meskipun tanpa var, let, const

// tapi ini akan dianggap oleh komputer adalah variable jenis var yaitu jenis yang tidak terkait dengan scope
contohBaru = "bala bala";
console.log(contohBaru)


// 3. const = konstanta
// jadi const itu adalah variable yang tidak dapat diubah, dan tidak dapat diakses di luar scope, dan tidak dapat diubah di dalam scope juga.
// dan caranya agar mudah di pahami nya adalah cara buatnya itu menggunakan HURUF KAPITAL SEMUA

console.log("===================");

const TTL = "10 maret 2023";
{
    const TL = "hai jamal"
    console.log(TL)
}
console.log(TTL)

// ohh jadi gini kalo misal ada const diluar sebuah scope lalu kemudian ada const lagi didalam scope maka jika tidak ada const didalamnya dan console yang ada didalam scope itu merujuk namanya adalah const yang ada diluar scope maka tetap akan bisa terpanggil.

// namun jika kita ingin mengambil nilai const yang ada didalam sebuah scope dnegan console.log maka tidak akan terpanggil, hal ini juga terjadi didalam let jadi yang mengalami hal ini adalah let dan const