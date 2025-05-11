const array = new Array(253,5,67,32,11,23,98,54,5,3,2,4,334,4,1,5,6,7,8)
Array.prototype.mesin = function(){
    for (let i = 0; i < this.length; i++) {
        for(let j = 0; j < this.length -1; j++){
            if(this[j] > this[j+1]){
                let tes = this[j]
                this[j] = this[j+1]
                this[j+1] = tes
            }
        }
    }
    return this
}

Array.prototype.terbesar = function(){
    for (let i = 0; i < this.length; i++) {
        for(let j = 0; j < this.length -1; j++){
            if(this[j] > this[j+1]){
                let tes = this[j]
                this[j] = this[j+1]
                this[j+1] = tes
            }
        }
    }
    return this[this.length-1]

}
Array.prototype.terkecil = function(){
    for (let i = 0; i < this.length; i++) {
        for(let j = 0; j < this.length -1; j++){
            if(this[j] > this[j+1]){
                let tes = this[j]
                this[j] = this[j+1]
                this[j+1] = tes
            }
        }
    }
    return this[0]

}

console.log(array.terkecil())
console.log(array.terbesar())
console.log(array.mesin())