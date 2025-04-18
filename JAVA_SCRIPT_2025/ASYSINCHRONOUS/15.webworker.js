// ini ada beberapa hal yang tidak bisa dilakukan di webworker
// salah satunya adalah memanipulasi dom 


// ini yang bisa
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#functions_available_in_workers

// jadi postmessage itu buat ngirim, kalo onmessage / addeventlistener("message", function(event) itu buat nerima


// ini web nya lengkap
// https://developer.mozilla.org/en-US/docs/Web/API/Worker/Worker

// ini juga baca buat error
//https://developer.mozilla.org/en-US/docs/Web/API/DOMException


// disini kita ngambil dat adari yang dikirim
addEventListener("message", function(e) {
    let total = e.data // jadi e.data ini adalah yang dikirimkan dari si main
    for(let i = 0; i < total; i++) {
        this.postMessage(i) // disini kita kirim datanya
    }
})