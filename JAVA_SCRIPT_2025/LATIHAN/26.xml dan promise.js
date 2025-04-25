function makeRequest(method, url, data = null) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
  
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const response = JSON.parse(xhr.responseText);
            resolve(response); // Berhasil, kembalikan data
          } catch (error) {
            resolve(xhr.responseText); // Jika bukan JSON, kembalikan teks biasa
            // PENTING
            // disini kenapa ini resolve lagi padahal berada di catch ?
            // karena disini jika di blok try kita gagal dalam mengkonversi data ke json, maka akan masuk ke catch, nah dengan menggunakan resolve ini maka, kita hanya mengembalikan text aslinya saja (misal xml, text plain, dll)
            // nah rejectednya itu ada di elsenya, 
            // kalo kita pake rejected ketika masuk ke blok catch hanya karena 
            // kia tidak dapat mengkonversi datanya ke json, maka nanti programnya akan langusng error,
            // meskipun kita sudah benar dapat datanya, tapi akan dianggap error, makanya kita kasih resolve

          }
        } else {
          reject(new Error(`Request gagal: ${xhr.statusText}`)); // Gagal
        }
      };
  
      xhr.onerror = () => {
        reject(new Error("Error jaringan")); // Error jaringan
      };
  
      // Jika mengirim data (POST/PUT), set header & kirim,
    //   jadi ini itu jika usernya ngirim data maka kita kirim, tpai kalo enngga ya berati ga dikirim, dan ini defaultnya ga di kirim karena data diisi  null
      if (data) {
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));
      } else {
        xhr.send();
      }
    });
  }

  makeRequest("GET", "https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    console.log("Data diterima:", response);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });


//   ini penjelasan nya
/* 
    Gunakan resolve untuk response yang sukses (status 200-299), meskipun bukan JSON.
    → Biarkan pemanggil yang menentukan cara memproses data mentah (text/JSON/XML).

    Gunakan reject hanya untuk:

        Gagal jaringan (onerror).

        HTTP error status (404, 500, dll).

        Kasus di mana Anda benar-benar yakin response harus JSON (dan itu dinyatakan di kontrak API).
*/