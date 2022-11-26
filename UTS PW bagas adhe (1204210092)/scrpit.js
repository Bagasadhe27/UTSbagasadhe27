// ngetik di banner
// txtelemet untuk menampilkan pilihan nama yg akan di tampilkan, let count saya gunakan 0,
// let txtindex juga 0, let currettxt untuk mengetahui skrg ada di text yg mana,let words untuk ambil satuan hurufnya
const txtElement = ['Bagas', 'Adhe', 'Prasetya']; 
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik() {
    // untuk memanggil text yg ada di txtelement
    if (count == txtElement.length) {
        count = 0;
    }
    // currenttxt saya ambil dr textelemt count
    currentTxt = txtElement[count];
    // untuk menampilkan huruf yg di ambil dr currenttxt, dan document queryselector untuk menempatkan 
    // posisi efek ngetik di html class efek-ngetik
    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ngetik').textContent = words;
    // untuk menampilan seluruh text yang ada di txt element secara bergantian
    if (words.length == currentTxt.length) {
        count++;
        txtIndex = 0;
    }
    // mengatur waktu
    setTimeout(ngetik, 500);

})();
// end ngetik