// 1. (soal1.js) Buatlah sebuah program dari akar pangkat 2 dari x dengan x harus bilangan genap, dengan kondisi sebagai berikut :
//    - Jika user input angka kurang dari 0 , user get error message "Tidak bisa input bilangan negatif" 
//    - Jika user input angka ganjil, user get error message "Tidak bisa input bilangan ganjil"
//    Hint : gunakan rumus sqrt(x)

var x = 4;

function akarPangkatDua(x) {
    if (x < 0) {
        return "Tidak bisa input bilangan negatif";
    } else if (x % 2 !== 0) {
        return "Tidak bisa input bilangan ganjil";
    } else {
        return Math.sqrt(x);
    }
}

console.log(akarPangkatDua(x));
