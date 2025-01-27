let lagi = true
while (lagi){
    // menangkap pilihan dari user
    let p = prompt("pilih : gajah, semut, orang : ")
    
    
    
    
    // menangkap pilihan dari komputer
    // ini artinya kita memanggil librarynya javascript yaitu math dan memanggil method atau fungsinya yang bernama random
    let kom = Math.random();
    // disini kita bagi dengan 0.34 karena kita pilihannya ada 3,dan jika pilihannya kurang dari 0.34 maka kita akan memilih gajah dst
    if (kom < 0.34) {
        kom = "gajah"
    }else if (kom > 0.34 && kom < 0.67) {
        kom = "orang"
    }else{
        kom = "semut"
    }
    // mengaktifkan bilangan random
    // menentukan rules
    // tampilkan hasilnya
    
    let hasil = ""
    
    if (p == kom) {
        hasil = "SERI";
    } else if (p == "gajah") {
        if (kom == "orang"){
            hasil = "MENANG"
        }else {
            hasil = "KALAH"
        }
    }else if (p == "semut"){
        if (kom == "gajah"){
            hasil = "MENANG"
        }else {
            hasil = "KALAH"
        }
    }else if (p == "semut"){
        // pake cara cepatnya
        hasil = (kom == "orang") ? "MENANG" : "KALAH"
    }else{
        hasil = "pilihan mu tidak valid"
    }
    
    alert(`kamu memilih ${p} dan komputer memilih ${kom} , hasilnya kamu ${hasil}`)

    lagi = confirm("apakah mau lagi ?")
}


// nanti ada tugasnya coba liat ynag menebak angka benar ari 1 - 10 , nanti bikinnya pake bootsrap