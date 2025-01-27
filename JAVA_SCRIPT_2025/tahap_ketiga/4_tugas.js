let bantuan, angka, sisa;
let random = Math.floor(Math.random() * 10) + 1;
function main(){

    sisa = 3
    angka = parseInt(document.getElementById("angka_pilihan").value)
    for (let i = 0; i < sisa; i++){
        if (angka == random){
            bantuan = `Kamu benar!\nangka pilihan komputer adalah ${random}`;
            sisa -= 0
            break;
        }else if (angka < random){
            bantuan = "angka anda terlalu kecil"
            sisa -= 1
        }else if (angka > random){
            bantuan = "angka anda terlalu besar"
            sisa -= 1
        }else{
            bantuan = "Waktu Habis\n pilihan komputer adalah ${random}"
            break
        }
    }
    document.getElementById("hint").textContent = bantuan
    document.getElementById("sisa_pilihan").textContent = sisa
}

document.getElementById("pilihan").onclick = main;