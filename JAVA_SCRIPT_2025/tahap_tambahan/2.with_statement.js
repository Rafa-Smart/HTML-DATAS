// with statement adlah fitur untuk menurunkan scope data, jadi misal kita biasanya kalo mau akses property dari objek itu kan person.name,

// nah dengan menggunkana with statement maka kita bisa membuat scope didalam objeknya jai seakan akan ketika memanggil name itu seperti kita panggil person.name padahal tidak

const person = {
    "name lengkap":"rafa khadafi", // jadi bisa spasi tpai harus pake ""
    umur:15
}

// ini contoh biasa
console.log(person["name lengkap"]); // rafa khadafi

// ini pake with statement
with (person){
    console.log(["nama lengkap"])
    console.log(umur)
}

// output [ 'nama lengkap' ]
//          15

// tapi ini tidak direkomendasikan karena :
// karena bisa membuat ambigu dll