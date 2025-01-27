// template


// jadi kalo case ini hanya punya 1 expresi
// case itu adalah kasus kasus dari expresinya
// break = ini optional agar ketika aksi sebelumnya sudah dijalankan, maka akan memberhentikan program / jika nilai 1 tidak terpenuhi maka akan lanjut ke nilai 2.
/* 
switch (expresi) {
    case "nilai 1":
        aksi 1
    [break;]
    case "nilai 2":
        aksi 2
    [break;]
    case "nilai n":
        aksi n
    [break;]
    default:
        aksi default
    [break;]
}
 */


// contoh
// karena pada dasarnya ketika kita mengambil intpuan dari user, maka tipe datanya pasti string, oleh karena itu ketika kita ingin mengopraseiaknnya atau emmbandingkannya dengan number, maka kita harus parseInt terlebih dahulu

// dan di dalam casenya kita tidak bisa memasukan kondisi kedalamnya tetapi harus nilai dan yang ada pada switch harus expresi

// let angka = parseInt(prompt("masukan angka = "));
// switch (angka) {
//     case 1 :
//         alert("ini adalah angka 1");
//         break;
//     case 2 :
//         alert("ini adalah angka 2");
//         break;
//     default :
//     alert("ini bukan angka 1 atau 2");
//     break;

// }

// contoh lagi
// jika di casenya kita tidak menggunakan break maka akan lagi case berikutnya
let item = prompt("masukan makanan atau minuman ")
switch (item) {
    case "susu" :
        alert("ini makanan sehat")
        break;
    case "ayam":
        alert("ini makanan yang lezat")
        break;
    default:
        alert("ini makanan yg tidak sehat")

}

// bisa juga seperti ini
// switch (makanan) {
//     case "nasi" :
//     case "ayam" :
//     case "sapi" :
//         alert("sehat");
//         break;
//     default :
//     alert("ini bukan angka 1 atau 2");
//     break;

// }