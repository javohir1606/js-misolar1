// const x = (str, num) => {
//    let result = "";
//    for (let i = 0; i < num; i++){
//     result += str[i];
//    }
//    return result;
// }

// console.log(x('lorem', 3));



// const sliceStr = (str, str1) => {
//    let result = "";
//    for (let i = 1; i < str.length; i++){
//     result += str[i];
//    }
//    return result;
// }

// const x = (str, str1) => sliceStr(str) + sliceStr(str1)

// console.log(x('Hello', "There"));



// oddly t/f l/y
// function str(a) {
//   let strL = false;
//   let strY = false;
//   for(i = 0; i < a.length; i++){
//     if(a[i] == 'l'){
//       strL = true;
//     }
//     if(a[i] == 'y'){
//       strY = true;
//     }
//   }
//   return strL && strY;
// }

// console.log(str("oddly"));




// Uygi-vazifa
// 1 - misol
// 1-misol   17, 5
// function num(n, m) {
//   let sum = 0;
//   let ren = n;
// //        17    5
//   while (ren >= m) {
//     sum++;
//     ren -= m;
//   }

//   return { sum, ren };
// }

// // Test qilish
// let n = 17;
// let m = 5;

// let result = num(n, m);
// console.log(`Butun qism: ${result.sum}`);
// console.log(`Qoldiq: ${result.ren}`);



// 2-misol
// function reverseDigits(n) {
//   let reversedNumber = 0;

//   while (n > 0) {
//     // Qoldiqni olish (oxirgi raqamni olish)
//     let digit = n % 10;

//     // Teskari tartibda raqamlarni qo'shish
//     reversedNumber = reversedNumber * 10 + digit;

//     // Butun qismini olish (oxirgi raqamni olib tashlash)
//     n = Math.floor(n / 10);
//   }

//   return reversedNumber;
// }

// // Test qilish
// let n = 345; // O'zgaruvchini sinab ko'rish uchun boshqa qiymatni qo'ying
// let reversed = reverseDigits(n);
// console.log(`Teskari tartibda raqamlar: ${reversed}`);

// 3-misol
// function sumAndCountDigits(n) {
//   let sum = 0;
//   let count = 0;

//   while (n > 0) {
//     // Qoldiqni olish (oxirgi raqamni olish)
//     let digit = n % 10;
    
//     // Raqamlar yig'indisini hisoblash
//     sum += digit;
    
//     // Raqamlar sonini oshirish
//     count++;
    
//     // Butun qismini olish (oxirgi raqamni olib tashlash)
//     n = Math.floor(n / 10);
//   }

//   return { sum, count };
// }

// // Test qilish
// let n = 532; // O'zgaruvchini sinab ko'rish uchun boshqa qiymatni qo'ying
// let result = sumAndCountDigits(n);
// console.log(`Raqamlar yig'indisi: ${result.sum}`);
// console.log(`Raqamlar soni: ${result.count}`);


// 4-misol
// function containsDigitTwo(n) {
//   while (n > 0) {
//     // Qoldiqni olish (oxirgi raqamni olish)
//     let digit = n % 10;

//     // Agar raqam 2 bo'lsa, haqiqatni qaytarish
//     if (digit === 2) {
//       return true;
//     }

//     // Butun qismini olish (oxirgi raqamni olib tashlash)
//     n = Math.floor(n / 10);
//   }

//   // Agar raqam 2 topilmasa, yolg'on qaytarish
//   return false;
// }

// // Test qilish
// let n = 347; // O'zgaruvchini sinab ko'rish uchun boshqa qiymatni qo'ying
// let hasTwo = containsDigitTwo(n);
// console.log(`Raqamlar orasida 2 raqami bor: ${hasTwo}`);


// 5-misol
// function containsOddDigit(n) {
//   while (n > 0) {
//     // Qoldiqni olish (oxirgi raqamni olish)
//     let digit = n % 10;

//     // Agar raqam toq bo'lsa, haqiqatni qaytarish
//     if (digit % 2 !== 0) {
//       return true;
//     }

//     // Butun qismini olish (oxirgi raqamni olib tashlash)
//     n = Math.floor(n / 10);
//   }

//   // Agar toq raqam topilmasa, yolg'on qaytarish
//   return false;
// }

// // Test qilish
// let n = 2468; // O'zgaruvchini sinab ko'rish uchun boshqa qiymatni qo'ying
// let hasOdd = containsOddDigit(n);
// console.log(`Raqamlar orasida toq raqamlar bor: ${hasOdd}`);


// 6-misol
// function isPrime(n) {
//   if (n <= 1) return false; // 1 yoki undan kichik sonlar tub emas
//   if (n === 2) return true; // 2 tub sondir (yagona juft tub son)
//   if (n % 2 === 0) return false; // Juft sonlar (2dan boshqa) tub emas

//   for (let i = 3; i * i <= n; i += 2) {
//     if (n % i === 0) {
//       return false; // Agar n i ga bo'linadigan bo'lsa, tub emas
//     }
//   }
  
//   return true; // Agar hech qanday bo'linuvchi topilmasa, tub
// }

// // Test qilish
// let n = 2; // O'zgaruvchini sinab ko'rish uchun boshqa qiymatni qo'ying
// let result = isPrime(n);
// console.log(`${n} soni tub: ${result}` && `${n} soni tub emas: ${result}`);