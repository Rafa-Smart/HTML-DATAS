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