function tes(array){
    let hasil = ""
    for(let i = 0; i < array.length; i++){
        let elemen = array[i]
        hurufBesar = 0
        for(let j = 0; j < elemen.length; j++){
            if(elemen[j] === elemen[j].toUpperCase()){
                hurufBesar++ 
            }
        }
        hasil += `elemen = ${elemen}\nhuruf besarnya = ${hurufBesar}\n\n`
    }
    return hasil
}



console.log(tes(["Rafa","KHSss","jaMaL"]))

// coba lagi

function HurufGede(array){
    let hasil = ""
    for(let i = 0; i < array.length; i++){
        let elemen = array[i];
        let hurufnya = 0;
        for ( let j = 0; j < elemen.length; j++){
            if(elemen[j] === elemen[j].toUpperCase()){
                hurufnya++
            }
        }
        hasil += `elemen = ${elemen}\nhuruf besarnya = ${hurufnya}\n`
    }
    return hasil;
}

console.log(HurufGede(["Rafa","JAMal","PutrI"]))



function cariLagi(array) {
    let hasil  = "";
    for(let i = 0; i <array.length; i++){
        let elemen = array[i];
        let hurufbesar = 0
        for(let j = 0; j <elemen.length; j++){
            if(elemen[j] === elemen[j].toUpperCase()){
                hurufbesar++
            }
        } 
        hasil += `elemen = elemen\n huruf besar = ${hurufbesar}\n`
       }

}
console.log("===============")

function tesRafa(array) {
    let hasil = ``;
    for(let i = 0; i < array.length; i++){
        let elemen = array[i]
        let hurufGederNya = 0;
        for(let j = 0; j<elemen.length; j++ ){
            if(elemen[j] === elemen[j].toUpperCase()){
                hurufGederNya ++
            }
        }
        hasil += `elemen ${elemen} : ${hurufGederNya}\n`
    }
    return hasil
}
console.log(tesRafa(["DassdsdsS","DSdasdsdaDS","FDFSsddd"]))