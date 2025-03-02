function sanitizeInput(input) {
    // Menghapus tag HTML dan karakter berbahaya
    // return input.replace(/</g, "&lt;").replace(/>/g, "&gt;")
    //             .replace(/&/g, "&amp;")
    //             .replace(/"/g, "&quot;")
    //             .replace(/'/g, "&#x27;")
    //             .replace(/\//g, "&#x2F;");
    return input.replace(/</g, "").replace(/>/g, "")
                .replace(/&/g, "")
                .replace(/"/g, "")
                .replace(/'/g, "")
                .replace(/\//g, "")
                // .replace(/[<script>]/g, "")
}

// Contoh penggunaan
const userInput = `<script>alert("Anda diretas!");</script>`;
const sanitizedInput = sanitizeInput(userInput);

console.log("Input Pengguna:", userInput);
console.log("Input yang Sudah Disanitasi:", sanitizedInput);
            // contoh lagi
            // Fungsi untuk membersihkan input dari karakter berbahaya

            

            // penjelsaan ^
            // Proses Sanitasi:

            // replace(/</g, "&lt;"): Mengganti semua karakter < dengan &lt; (entity HTML untuk <).

            // replace(/>/g, "&gt;"): Mengganti semua karakter > dengan &gt; (entity HTML untuk >).

            // replace(/&/g, "&amp;"): Mengganti semua karakter & dengan &amp; (entity HTML untuk &).

            // replace(/"/g, "&quot;"): Mengganti semua karakter " dengan &quot; (entity HTML untuk ").

            // replace(/'/g, "&#x27;"): Mengganti semua karakter ' dengan &#x27; (entity HTML untuk ').

            // replace(/\//g, "&#x2F;"): Mengganti semua karakter / dengan &#x2F; (entity HTML untuk /).