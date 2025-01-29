// membuat pengulangan while

// template
// jadi selama kondisi yang ada pada kondisi while maka akan dilakukan program dibawahnya
// while(kondisi) {
//     aksi    
// }

// bisa juga while(true){}


// ini adalah looping invinite
// while(true){
//     console.log("hello")
// }

// nah cara agar berhentinya itu ada dua macam :
// 1. berhenti oleh user

// disini nilai ulang ketika pertama kali di set adalah true, maka ketika pertama kali di akses akan true
console.log("===============")
let ulang = true;
while(ulang) {
    console.log("hello");
    ulang = confirm("apakah masih mau lagi ?")
    // jad confirm itu akan mengembalikan nilai false atau true
}

// 2. berhenti oleh kita sendiri atau sudah di atur didalam programya
console.log("===============")

// template 

// kondisi terminasi biasanya mengecek kondisi dari nilai awal

// nilai awal
// while(kondisi terminasi) {
//     aksi
//     incriment (tambah terhadap nilai awal) / decriment (kurang terhadap nilai awal)
// }

// contoh

let nilaiAwal = 1;
while(nilaiAwal <= 10) {
    console.log(nilaiAwal);
    nilaiAwal++;
    // nilaiAwal = nilaiAwal + 1;
    // nilaiAwal--;
    // nilaiAwal = nilaiAwal - 1;
}

console.log("================")
let awal = 1;
while(awal <= 5) {
    console.log(`${awal}.i love you`)
    awal++;
}

// megnhitung nilai ganjil
let ganjil = 1;
while(ganjil <= 15){
    if(ganjil % 2 === 0){
        console.log(ganjil)
    }
    ganjil ++;
}