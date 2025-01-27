// ada 3 operator logika
// And, Or, Not

let dataBoolean = true
console.log(dataBoolean)

console.log("==============")

// 1.not
// operator not akan membalikan nilai boolean misal dari true menjadi false, dari 1 menjadi 0, dst

console.log(`ini not = ${!dataBoolean}`)
console.log(`ini not = ${!!!!!!dataBoolean}`)
console.log(`ini not = ${!1}`)
console.log(`ini not = ${!5}`)
// jadi 1 dan seterusnya akan bernili true

console.log("==============")

// 2. Or
// jadi operasi or ini berati kita mencari atau membandingkan dari 2 nilai.

// contoh ini arahnya kebawah
// A     =  true true true false
// B     =  true false true false
// hasil =  true true true false

// ini ibaratnya
// artinya ini itu seperti penjumlahan

// A     =  1 1 1 0
// B     =  1 0 1 0
// hasil =  1 1 1 0

console.log(`true || true = ${true || true}`)
console.log(`true || false = ${true || false}`)
console.log(`false || true = ${false || true}`)
console.log(`false || false = ${false || false}`)


//  ILMU NH BOSS KLAO MAU NYELEK SATU SATU PAKE CTRL + D
console.log("==============")

// 3.and

console.log(`true  && true = ${true   && true}`)
console.log(`true  && false = ${true  && false}`)
console.log(`false && true = ${false  && true}`)
console.log(`false && false = ${false && false}`)