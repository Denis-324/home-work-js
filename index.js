// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
// let result
// let square = function(a){
//    result = a*a;
//    return result
// }
// square(4)
// console.log(result);

// Сделайте функцию, которая возвращает сумму двух чисел.

// let square = function(a){
//    let result;
//    result = a+a;
//    return result;
// }
// console.log(square(4));

// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
// function square (a, b, c){
//    return (a-b)/c
// }
// console.log(square(10, 2, 4));

// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

// function num (){
//   return +prompt('Введите число от 1 до 7')
// }

// let day = function(numWeek=num ()){
//    let dayWeek;
//    // numWeek = +prompt('Введите число от 1 до 7');
//    if (numWeek===1){
//       dayWeek = alert('Понедельник')
//    } else if (numWeek===2) {
//       dayWeek = alert('Вторник')
//    } else if (numWeek===3) {
//       dayWeek = alert('Среда')
//    } else if (numWeek===4) {
//       dayWeek = alert('Четверг')
//    } else if (numWeek===5) {
//       dayWeek = alert('Четверг')
//    } else if (numWeek===6) {
//       dayWeek = alert('Четверг')
//    } else if (numWeek===7) {
//       dayWeek = alert('Четверг')
//    } else {
//       dayWeek = alert('Введите число от 1 до 7')
//    }
//     return dayWeek;
// }
// day(num())

// Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма
// больше 10 - пусть вернет true, а если нет то - false.

// let numOne = function(){
//    return +prompt(' Введите первое число')
// }

// let numTwo = function(){
//    return +prompt(' Введите второе число число')
// }

// let result = function (one, two){
//    let sum = one+two
//    if (sum > 10){
//       alert('true')
//    }else{
//       alert('false')
//    }
// }
// result(numOne(), numTwo())

// Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false
// let numOne = function(){
//    return +prompt(' Введите число')
// }
// let result = function (one){
//    if (one < 0){
//       alert('true')
//    }else{
//       alert('false')
//    }
// }
// result(numOne())

// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - fals
// let isNumberInRange = function(a){
//       if(a > 0 && a < 10){
//          return alert('true')
//       }else{
//          return alert('false')
//       }
//    }
// isNumberInRange(11)

// Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)». Если аргументы не заданы, считать их равными нулю. Не проверять переменные на тип данных
// let rgb = function(r=0, g=0, b=0){
//    let str = alert(`rgb {${r}, ${g}, ${b}}`)
//    return str
// }

// rgb (10, 20, 30)

// Написать функцию mult(num1, num2 , num3) принимающую 3 числа. Функцию перемножает num1 и num2 столько раз, сколько указано в третьем аргументе num3. Значения num1 и num2 по умолчанию 1,  num3 по умолчанию 2.

// let mult = function(num1=1, num2=1, num3=2){
//    for(let i = 1; i <= num3; i++ ){
//      console.log(i, num1*num2)
//    }
// }
// mult(3, 3, 4)

// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

// let num = function(){
//    return +prompt(' Введите число')
// }
// let isEven = function (one){
//    if (one%2=== 0){
//       alert('true')
//    }else{
//       alert('false')
//    }
// }
// isEven(num())

// Написать функцию, которая принимает в себя три параметра - число и две функции. Первая переданная функция  возвращает возведенное в квадрат переданное число и будет вызываться, если число четное. Вторая переданная коллбэк-функция будет вызываться с переданным в нее числом , если число нечетное, и будет возвращать число, увеличенное на 1.

// Эту задачу не получилось сделать, ошибки...

// let fun = function (num, cb1, cb2) {
//   if ((num * num) % 2 === 0) {
//     cb1();
//   } else if (m % 2 !== 0) {
//     cb2();
//   }
// };

// let n = 2;
// let a = function () {
//   let v;
//   v = n * n;
//   return v;
// };

// let m = 7;
// let b = function (x) {
//   let r;
//   r = x + 1;
//   return r;
// };

// console.log(fun(n, a(), b(m)));

