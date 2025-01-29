// tipe dataString yang ada pada javascript

// 1. string = yaitu adalah huruf atau kata-kata   yang ada di dalam tanda kutip. 
// contoh "rafa", "9"

// 2. number = yaitu adalah semua angka baik itu 60 / 9.0 / -4  dan ditulis atau dijabarkannya tanpa tanda kutip.

// 3. boolean = yaitu adalah true atau false / atau 1 dan 0. nah disini menarik karena penulisan awalnya tidak harus huruf besar seperti yang ada pada python

// undifined = yaitu variable yang belum ada isinya atau tidak terdefinisi.



let dataString = "ucup";
console.log(typeof dataString);

console.log("============")

let dataNumber = 9.8;
console.log(typeof dataNumber)

console.log("============")

let dataBoolean = true;
console.log(typeof dataBoolean)

console.log("============")

let dataUndefined;
// ini adalha data kosong
console.log(typeof dataUndefined)


// nah tapi ketika kita ingin mengubah tipe data suatu variable, kita tidak perlu mengkonversi dahulu seerti di python contoh
// ini di python :
// data = 2
// data_1 = str(data)
// jadi kalo di javascrpit itu langsung saja, jadi tidak perlu di conversi dahulu tetapi bisa langsung saja.

console.log("====+====")

// contoh di bawah ini
let data = 9.8;
console.log("ini data sebelum tipenya =",typeof data); // number

data = "9.8";
console.log("ini data setelah tipenya =",typeof data); // string

// NaN jadi ini adalah not a number

let dataLagih = "rafa";
let dataLagih2 = parseInt(dataLagih);
console.log(dataLagih2)
// ini akan menghasilkan NaN karena tidak bisa diubah menjadi angka. jadi ini adalah