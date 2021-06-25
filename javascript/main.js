// * Задача No1 вывести треугольник

// let a = '#'
// while (a.length<=7){
//     console.log(a);
//     a+='#'
// }


// Задание No2 OoooGooo. Напишите программу, которая выводит
// через console.
// // log все числа от 1 до 100, с двумя исключениями.
// Для чисел, нацело делящихся на 3, она должна выводить ‘Oooo’, а
// для чисел, делящихся на 5 (но не на 3) – ‘Gooo’.
// Когда сумеете – исправьте её так, чтобы она выводила
// <OoooGooo> для всех чисел, которые делятся и на 3 и на 5.

// for (let i = 1; i <= 100; i++) {
//     if (i % 15 === 0){
//         console.log(`${i} OoooGooo`);
//     }else if (i % 3==0){
//         console.log('Oooo');
//     }else if (i % 5 ===0){
//         console.log('Gooo');
//     }else{
//         console.log(i);
//     }
// }


// * Задание No 3 Отсортируйте массив в алфавитном порядке
// * let arr = ['JavaScript', 'Python', 'Java', 'React', 'C++']

// let arr = ['JavaScript', 'Python', 'Java', 'React', 'C++']
// arr.sort()
// console.log(arr);

// Задание No 4 Дан массив с объектами отсортируйте его таким
// образом что бы в новый массив попали люди с бюджетом более
// 250

let infoArr = [
{
name: 'Danil',
budget: 221
},
{
name: 'Roma',
budget: 400
},
{
name: 'Kirill',
budget: 173
},
{
name: 'Viktor',
budget: 294
},
{
name: 'Luci',
budget: 420
},
{
name: 'Dima',
budget: 211
}
]
let arr1 = [];
for (let i = 0; i < infoArr.length; i++){
    if (infoArr[i].budget > 250){
        arr1.push(infoArr[i])
    }
}
console.log(arr1);




