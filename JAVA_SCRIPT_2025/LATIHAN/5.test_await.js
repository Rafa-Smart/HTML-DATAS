// let ditepati = false
// const janji = new Promise((resolve, reject) => {
//     if(ditepati) {
//         resolve("sudah ditepati...")
//     } else {
//         reject("tidak ditepati")
//     }
// });

// console.log("mulai")
// janji
//     .then((hasil) => {
//         console.log(hasil)
//     })
//     .catch((error) => {
//         console.log(error);

//     })

// console.log("selesai")

// output =

// mulai
// selesai
// // tidak ditepati



    // INI UDAH BENER YA GES YAK

async function halo() {
    console.log("satu"); // Langsung dieksekusi
    let hasil = await tes(); // Menunggu promise dari `tes()` selesai
    console.log(hasil); // Dieksekusi setelah promise selesai
    console.log("tiga"); // Dieksekusi setelah `console.log(hasil)`
}


// ini ga bisa
// function tes() {
//     return setTimeout(() => {
//         console.log("dua");
//     }, 5000);
// }

// kecuali kita buat return valuenya adalah si promise

let s = true;
function tes() {
    return new Promise((resolve,rejected) => {
        if(s){
            setTimeout(() => {
                resolve("ini berhasil ges")
            },2000)
        } else {
            setTimeout(() => {
                rejected("gagal gess")
            }, 2000);
        }
    })
}
halo()