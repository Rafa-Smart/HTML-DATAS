// jadi getter dan setter adalah kemampuan untuk membuat function yang berbeda untuk mengembil data(getter) dan mnegubha data(setter) pada sebuah property d objek 

// dengan mneggunakna setter dan getter, kita bisa melakukan hal apapun didalam unction sebelum sebuah propery di akses atau siubah, misal menambah validasi dll

class User {
    constructor(name) {
        this._name = name; // Properti privat (ditandai dengan underscore _)
    }

    // nahh jadi ketika kita menggunakan keyword get dan set di awal nama function maka itu akan menjadikanya sebuah property juga, jadi nanti diaksesnya bakal sama seperti mengakses property

    // Getter untuk name
    get name() { // jadi ini buat ngambil nilai dari property name ini wajib keudian returnnya adalah propertynya agar nanti bisa di setting atau diubah di setternya
        return this._name.toUpperCase(); // Mengembalikan nama dalam huruf besar
    }

    // Setter untuk name
    set name(newName) { // ini buat ngubah nilai dari property name hasil dari pengambilan property dari si getternya
        if (newName.length > 0) { // Validasi: nama tidak boleh kosong
            this._name = newName;
        } else {
            console.log("Nama tidak boleh kosong!");
        }
    }
}

// Membuat objek dari class User
const user = new User("Alice");

// Menggunakan getter
console.log(user.name); // Output: ALICE (karena getter mengubahnya ke huruf besar)

// Menggunakan setter
user.name = "Bob"; // Mengubah nama
console.log(user.name); // Output: BOB

user.name = ""; // Coba mengatur nama kosong
// Output: "Nama tidak boleh kosong!" (karena validasi di setter)


// penjelasan
// Penjelasan Sederhana
    // Getter:
    //     Getter adalah metode yang digunakan untuk mengambil nilai dari suatu properti.
    //     Dalam contoh di atas, get name() mengembalikan nilai _name dalam huruf besar.
    //     Ketika Anda mengakses user.name, getter ini akan dipanggil.
    // Setter:
    //     Setter adalah metode yang digunakan untuk mengubah nilai dari suatu properti.
    //     Dalam contoh di atas, set name(newName) memvalidasi bahwa newName tidak boleh kosong sebelum mengubah nilai _name.
    //     Ketika Anda menulis user.name = "Bob", setter ini akan dipanggil.
    // Properti Privat:
    //     Properti _name diawali dengan underscore (_) untuk menandakan bahwa itu adalah properti privat (tidak seharusnya diakses langsung dari luar class).
    //     Getter dan setter memberikan cara yang terkontrol untuk mengakses dan mengubah properti ini.



// ====================================================================



// coba conoh lain


// ini kasusnya
const user = {
    namaAwal:"rafa",
    namaAkhir:"khadafi",
    namaLengkap: "rafa khadafi",
    // atau mau pake function juga bisa
    namaLEngkap2: function(){
        return `${this.namaAwal} ${this.namaAkhir}`
        // nahh dengna menggunakan ini maka kita akna megaksesnya sebagai fungsi bukan sebagai property biasa gitu
    }
}
// jadi harus di tambah secara manual
user.namaLengkap = user.namaAwal + " " + user.namaAkhir;

class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    };

    // Getter untuk fullName
    get fullName() { // disini gausah pake parametr karena kalo mau ngambil data kan tidak perlu pake parameter
        return `${this._firstName} ${this._lastName}`;
    }

    // Setter untuk fullName
    set fullName(name) {
        const parts = name.split(' '); // ini bakal di split jadi array
        this._firstName = parts[0];
        this._lastName = parts[1];
    }

    // Getter untuk firstName
    get firstName() {
        return this._firstName;
    }

    // Setter untuk firstName
    set firstName(name) {
        if(name.length < 0){
            console.log("nama tidak boleh kosong")
        }else {
            this._firstName = name
        }
    }

    // Getter untuk lastName
    get lastName() {
        return this._lastName;
    }

    // Setter untuk lastName
    set lastName(name) {
        if(name.length < 0){
            console.log("nama tidak boleh kosong")
        }else {
            this._lastName = name
        }
    }
}

// Membuat objek dari class Person
const person = new Person('John', 'Doe');

// Menggunakan getter
console.log(person.fullName); // Output: John Doe

// Menggunakan setter
person.fullName = 'Jane Smith';
console.log(person.fullName); // Output: Jane Smith
console.log(person.firstName); // Output: Jane
console.log(person.lastName); // Output: Smith





// ========================================




// ini contooh kalo pake prototype
// Membuat constructor function
function Person(name) {
    this._name = name; // Properti privat (ditandai dengan underscore _)
}

// Menambahkan getter dan setter menggunakan prototype
Object.defineProperty(Person.prototype, 'name', {
    get: function() {
        return this._name.toUpperCase(); // Getter: mengembalikan nama dalam huruf besar
    },
    set: function(newName) {
        if (newName.length > 0) { // Setter: validasi nama tidak boleh kosong
            this._name = newName;
        } else {
            console.log("Nama tidak boleh kosong!");
        }
    }
});

// Membuat objek dari constructor function
const person = new Person("Alice");

// Menggunakan getter
console.log(person.name); // Output: ALICE (karena getter mengubahnya ke huruf besar)

// Menggunakan setter
person.name = "Bob"; // Mengubah nama
console.log(person.name); // Output: BOB

person.name = ""; // Coba mengatur nama kosong
// Output: "Nama tidak boleh kosong!" (karena validasi di setter)


// PENJELASAN
// Object.defineProperty adalah metode yang digunakan untuk menambahkan properti baru ke objek atau memodifikasi properti yang sudah ada.
// Dalam contoh ini, kita menambahkan properti name ke Person.prototype dengan getter dan setter.


// ini kalo ga pake constructor

const Jelema = {
    nama_awal: "rafa",
    nama_akhir: "khadafi",
    get nama(){
        return this.nama_awal + " " + this.nama_akhir;
    },
    set nama(value){
        const array = value.split(" ");
        this.nama_awal = array[0]
        this.nama_akhir = array[1]
    }
}


// contoh lagi kalo ga pake constructor
const Jelema2 = {
    nama_awal: "rafa",
    nama_akhir: "khadafi",
    get nama(){
        return this.nama_awal + " " + this.nama_akhir;
    },
    set nama(nama_baru){
        if(nama_baru.length > 0){
            nama = nama_baru
        } else {
            console.log("nama tidak boleh kosong")
        }
    }
}

// Jelema2.nama = "dsdsad"
// "dsdsad" 

// ini kenapa seperti mengubha vaue dari propety ? karea ketika kit aget dan set maka akan berubha menjadi sebuah property dan bukan fungsi makanya bisa seperti proprety