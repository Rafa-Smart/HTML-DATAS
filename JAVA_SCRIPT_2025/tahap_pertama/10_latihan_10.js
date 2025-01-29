let angka_1,angka_2,hasil ;


// membuat fungsi
function operasi(){
    // ini cara saya sendiri dan simple berdasarkan pembahasan pada materi sebelumnya

    // tapi lebih aman pake parseFloat
    // angka_1 = document.getElementById("angka_1").value;
    // // alert(`angka 1 = ${angka_1} bertipe ${typeof angka_1}`);
    // angka_2 = document.getElementById("angka_2").value;
    // hasil = parseInt(angka_1) + parseInt(angka_2);
    // document.getElementById("hasil").textContent = "hasilnya adalah = " + hasil;
    
    
    // ini cara dari kelas terbuka
    // karena kita ingin mengambil data number maka valuenya harus number dengan cara valueAsNumber. tapi kayaknya valueAsNumber ini menghasilkan tipe data boolean deh jadi dicari true atau false atau nan

    // nah kalo pake cara si kelas terbuka, kita harus mengubah type pada inputannya di html menjadi number bukan text, sedangkan pada cara diatas saya langsung parseInt
    angka_1 = document.getElementById("angka_1").valueAsNumber;
    // alert(`angka 1 = ${angka_1} bertipe ${typeof angka_1}`);
    angka_2 = document.getElementById("angka_2").valueAsNumber;
    // alert(`angka 2 = ${angka_2} bertipe ${typeof angka_2}`);

    hasil = angka_1 + angka_2
    document.getElementById("hasil").textContent = "hasilnya = " + hasil;

}

// pemanggian fungsi
document.getElementById("button_jumlah").onclick = operasi;