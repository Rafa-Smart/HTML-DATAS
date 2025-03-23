
// function generator adalah function yang digunakna untuk membuat data generator

// yaitu data yang berupa array jadi bisa di iterasi meskipun ini bukan array

// cara membuatnya itu nmneggunakan tanda * setelah nama function
// dan untuk mengembalikan data di tiap iterasi, kita bisa gunakan kata kunci yield diikuti datanya
// jadi kayak sebuah fungsi yang bisa mereturn banyak data


function* buatGenerator() {
    // untuk mengembalikan data di tiap iterasi, kita bisa gunakan yield
    yield "rafa";
    yield "satria";
    yield "udin";
}

const names = buatGenerator();
console.log(names) // Object [Generator] {}
console.log(names[0]) // ini ga bisa karena bukan array tpai bisa diiterasi
for (const name of names){
    console.log(name);
}

// atau gini
// Deklarasi function generator
function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

// Membuat objek generator
const generator = simpleGenerator();

// Menggunakan next() untuk mengiterasi nilai
console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2
console.log(generator.next().value); // Output: 3
console.log(generator.next().value); // Output: undefined (generator selesai)

// contoh 3
// Contoh function yang mengembalikan Promise
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data diterima");
        }, 1000); // Simulasi operasi asynchronous
    });
}

// Function generator yang menangani operasi asynchronous
function* asyncGenerator() {
    console.log("Memulai operasi asynchronous...");
    const result = yield fetchData(); // Yield untuk menunggu Promise selesai
    console.log(result); // Output: Data diterima
    console.log("Operasi selesai.");
}

// Fungsi untuk menjalankan generator dengan Promise
function runGenerator(generator) {
    const gen = generator(); // Membuat objek generator
    function handle(result) {
        if (result.done) return; // Jika generator selesai, hentikan
        result.value.then((data) => {
            handle(gen.next(data)); // Lanjutkan generator dengan data yang diterima
        });
    }
    handle(gen.next()); // Mulai eksekusi generator
}

// Menjalankan generator
runGenerator(asyncGenerator);



// contoh 4

function* buatganjil(value){
    for (let i = 0; i <= value;i++){
        if(i % 2 !== 0){
            yield i
        }
    }
}

const angka = buatganjil(10);
for(const a of angka){
    console.log(a)
}