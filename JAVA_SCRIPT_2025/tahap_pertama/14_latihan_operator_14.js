// membuat variable

let angkaPertama, angkaKedua, operatorAritmatika, hasilAritmatika;


// membuat fungsi aritmatika
function aritmatika() {

    // mengambil nilai angka 1
    angkaPertama = document.getElementById("aritmatika_angka_1").value
    // menagmbil nilai angka 2
    angkaKedua = document.getElementById("aritmatika_angka_2").valueAsNumber;
    // mengambil nilai operator aritmatika
    operatorAritmatika = document.getElementById("operator_aritmatika").value;

    // membuat program yaitu mengeksekusi string apapun yang ada

    // hasilAritmatika = eval("2+2") = 4
    // nah terus kita masukan angka pertama pada argumen eval, tpai inget karena eval ini akan mengexsekusi tipe data string maka kita harus menggunakan format string

    // disini karena angka pertama sudah string maka kita bisa langsung memasukannya saja tanpa harus di format dahulu menjadi string dna sama juga yang bagian operator aritmatika, karena ini bersifat string maka kita bisa angusng memasukannya ke parameter eval tnapa harus memformatnya terlebih dahulu 
    // tapi ternyata meskipun kita sudah mempunyai nilai yang bertipe data number, tetap akan otomatis terhitung juga tanpa di format string :)

    // dan untuk menggabungkannya kita bisa menggunakan tanda tambah (+) di evalnya
    hasilAritmatika = eval(angkaPertama + operatorAritmatika + angkaKedua);

    // menampilkan hasilnya di text
    document.getElementById("hasil").textContent = `hasilnya adalah = ${hasilAritmatika}`;

}

// membuat event jika button di clik
document.getElementById("button").onclick = aritmatika;


// bisa juga untuk mengoprasikan logika, tapi yang diganti hanya value optionnya aja menjai &&, nanti di inputannya juga harus pake angka