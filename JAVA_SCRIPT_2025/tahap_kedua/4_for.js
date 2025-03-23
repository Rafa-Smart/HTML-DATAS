// template
/* 
for (let nilaiAwal = 1; nilaiAwal <=10; nilaiAwal++) {
    console.log("hello world")
} 
*/


// terbaru nih
// urutanya     Inisialisasi (let nilaiAwal = 1)

    // Periksa kondisi (nilaiAwal <= 10)

    // Jika kondisi true, jalankan blok kode (console.log("hello world"))

    // Increment (nilaiAwal++)

    // Kembali ke langkah 2 (periksa kondisi lagi)

    

// contoh sederhananya
// for (let i = 1; i <= 6; i++){
//     console.log("hello wolrd")
// }

// study kasus
let jumlahAngkot = 10;
let angkotBeroprasi = 6;
let noAngkot = 1;

while(noAngkot <= angkotBeroprasi) {
    console.log(`angkot no. ${noAngkot} beroprasi dengan baik.`);
    noAngkot++;
}

for (noAngkot = angkotBeroprasi+1; noAngkot <= jumlahAngkot; noAngkot++) {
    console.log(`angkot no. ${noAngkot} tidak beroprasi.`)
}


// coba coba

// for(i = 1; i<=10 ;i++){
//     for(j = 1; j<=5;j++){
//         console.log(`${j}`)
//     }
// }