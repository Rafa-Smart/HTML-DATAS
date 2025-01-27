// nan dan undefined

// Nan = not a number, jadi adalah hasil dari operasi matematika yang tidak valid dan 
// menghasilkan nan

// ini contoh dari nan
console.log(`akar dari -1 = ${Math.sqrt(-1)}`);
console.log("=====================")
console.log(`"ucup"/"otong" = ${"ucup" / "otong"}`)
console.log("=====================")
console.log(`"ucup"*"otong" = ${"ucup" * "otong"}`)
console.log("=====================")
console.log(`"ucup"-"otong" = ${"ucup" - "otong"}`)
console.log("=====================")
let data = parseInt("test123");
console.log(data); // output: NaN
console.log("=====================")

//     HATI HATI NAN TIDAK BISA DIOPERASIKAN LAGI
// jika kita menambahkan NaN dengan number maka haislnya akan tetap NaN
console.log(`jika menambahkan NaN dengan number = ${data+10} / tetap nan`);
console.log("=====================")
// jika kita menambahkan nan dengan string maka akan menghasilkan string
console.log(`jika menambahkan NaN dengan string = ${data+"jamal"}`);




console.log("=========================")
// undefined = belum ditentukan nilainya
let a;
console.log(`nilai a = ${a}`); // output: undefined
console.log("=========================")
//      KESIMPULAN
// jadi kesimpulannya kalo misal ada sesuatu hal yang tidak menghaislkan apa apa maka akan menghasilkan undefined / bukan berati menghasilkan 0 yaa, karena 0 juga hasil.

// contoh 
// karena console.log ini tidak menghasilkan nilai apapun, tetapi melakukan print
console.log(`ini tidak ada hasil = ${console.log("test")}`)


// ILMU, KALO MAU CLEAR CONSOLE PAKE KLIK KANAN LALU PILIH CLEAR CONSOLE