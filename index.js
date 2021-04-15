// Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.

// let vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];
// let vegetableLength = vegetables.map((el) => el.length);
// console.log(vegetableLength);

// Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

// let numbers = [2, 3, 5, 7, 11, 13, 17];
// let currentSums = (numbers) => {
//   let result = [];
//   numbers.reduce((sum, current, i) => (result[i] = sum + current), 0);
//   return result;
// };
// console.log(currentSums(numbers));

// Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из первых букв слов строки str.
// let str = "Каждый охотник желает знать, где сидит фазан.";
// let arr = (str) => {
//   let array = str.split(" ");
//   let arr2 = [];
//   for (i = 0; i < array.length; i++) {
//     arr2.push(array[i][0]);
//   }
//   return arr2;
// };
// console.log(arr(str));

// Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.
// let numerics = [5, 7, 2, 9, 3, 1, 8];
// numerics.sort((a, b) => b - a);
// console.log(numerics);

// Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений.
// let a = [1, 2, 3];
// let b = [4, 5, 6];
// let c = [7, 8, 9];
// let getArr = (a, b, c) => {
//   let d = [...a, ...b, ...c];
//   d.sort((a, b) => b - a);
//   return d;
// };
// console.log(getArr(a, b, c));

// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. Показать решение.
// let arr = [[1, 2, 3], [4, 5], [6]];
// let result = [].concat(...arr).reduce((i, j) => i + j);
// console.log(result);

// Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

// let arr = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ];
// let result = [].concat(...arr);
// let result2 = [].concat(...result).reduce((i, j) => i + j);
// console.log(result2);

// Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
// let numerics = [1, 2, 3, 4, 5, 6, 7];
// numerics.sort((a, b) => b - a);
// console.log(numerics);

// Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

// let arrayFill = (value, length) => {
//   let arr = [];
//   for (let i = 0; i < length; i++) {
//     arr.push(value);
//   }
//   return arr;
// };
// console.log(arrayFill("x", 5));

// Создайте объект и скопируйте данный объект с помощью: Object.assign() и spread оператора. Изменить любое свойство в копии объекта, и проверить не изменился ли исходный.

// let obj = { a: 1 };

// let copy = Object.assign({}, obj);
// copy.b = 2;

// let copy2 = { ...obj };
// copy2.c = 3;

// console.log(obj, copy, copy2);

// Создайте функцию, которая принимает 1 аргумент - объект пользователя user со свойствами name, age, city. Функция должна возвращать новый объект пользователя с измененным полем name, при этом оригинальный объект user должен остаться неизменным.

// let user = {
//   name: "Иван",
//   age: "30",
//   city: "Москва",
// };
// let objCopy = (user) => {
//   let userCopy = { ...user };
//   userCopy.name = "Василий";
//   return userCopy;
// };

// console.log(objCopy(user));

// Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи( Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.).

// почему то в этой задачи функция добавляет нете значения в массив
// let isNumberInRange = (a) => {
//   if (a > 0 && a < 10) {
//     return true;
//   } else {
//     return false;
//   }
// };

// let arr = [1, 2, 3, 4, 13];
// let arr2 = [];
// let isNamb = () => {
//   for (let i = 0; i < arr.length; i++) {
//     if (isNumberInRange(i)) {
//       arr2.push(arr[i]);
//     }
//   }
//   return arr2;
// };
// console.log(isNamb());

// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

// let getDigitsSum = (digit) => {
//   let result = 0;
//   let n = digit;
//   let arr = n.toString().split("");
//   for (i = 0; i < arr.length; i++) {
//     result += +arr[i];
//   }
//   return result;
// };
// console.log(getDigitsSum(123));
