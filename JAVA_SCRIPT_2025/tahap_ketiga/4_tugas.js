let bantuan, angka;
let sisa = 3; // Inisialisasi sisa di luar fungsi
let random = Math.floor(Math.random() * 10) + 1;

function main() {
    angka = parseInt(document.getElementById("angka_pilihan").value);

    if (angka == random) {
        bantuan = `Kamu benar!\nAngka pilihan komputer adalah ${random}`;
        sisa = 0; // Reset sisa jika user menebak dengan benar
    } else if (angka < random) {
        bantuan = "Angka anda terlalu kecil";
        sisa -= 1; // Kurangi sisa jika tebakan salah
    } else if (angka > random) {
        bantuan = "Angka anda terlalu besar";
        sisa -= 1; // Kurangi sisa jika tebakan salah
    }

    // Jika sisa habis, tampilkan pesan waktu habis
    if (sisa == 0 && angka != random) {
        bantuan = `Waktu Habis\nAngka pilihan komputer adalah ${random}`;
    }

    // Perbarui tampilan di browser
    document.getElementById("hint").textContent = bantuan;
    document.getElementById("sisa_pilihan").textContent = sisa;

    // Jika sisa habis, nonaktifkan tombol
    if (sisa == 0) {
        document.getElementById("pilihan").disabled = true;
    }
}

document.getElementById("pilihan").onclick = main;

debugger
const button = document.querySelector("#hitung")
button.addEventListener("click", () => {

    const angka = document.querySelector("#angka").value
    counter(angka)
    function counter(angka) {
        counter = angka
        setInterval(() => {
            if(counter === 0){
                alert("Waktu habis")
                clearInterval(counter)
                document.location.reload()
            }
            counter--
            let hasil = document.querySelector("#counter")
            hasil.textContent = `hitung = ${counter}`
        },1000)
        button.disabled = "true"
    }
})
