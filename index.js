// Eсли переменная a равна нулю то выведите 'Верно', иначе выведите
// 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// let a = +prompt('Введите число');
// if (a === 0) {
//    alert('Верно');
// } else {
//    alert('Неверно');
// }

// Если переменная a больше нуля, то выведите 'Верно', иначе выведите
// 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// let a = +prompt('Введите число');
// if (a > 0) {
//    alert('Верно');
// } else {
//    alert('Неверно');
// }

// Если переменная a меньше нуля, то выведите 'Верно', иначе выведите
// 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// let a = +prompt('Введите число');
// if (a < 0) {
//    alert('Верно');
// } else {
//    alert('Неверно');
// }

// Если переменная a больше или равна нулю, то выведите 'Верно', иначе
// выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// let a = +prompt('Введите число');
// if (a >= 0) {
//    alert('Верно');
// } else {
//    alert('Неверно');
// }

// Если переменная a меньше или равна нулю, то выведите 'Верно', иначе
// выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// let a = +prompt('Введите число');
// if (a <= 0) {
//    alert('Верно');
// } else {
//    alert('Неверно');
// }

// Если переменная a не равна нулю, то выведите 'Верно', иначе выведите
// 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// let a = +prompt('Введите число');
// if (a !== 0) {
//    alert('Верно');
// } else {
//    alert('Неверно');
// }

// Если переменная a равна 'test', то выведите 'Верно', иначе выведите
// 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.

// let a = prompt('Введите значение');
// if (a === 'test') {
//    alert('Верно');
// } else {
//    alert('Неверно');
// }

// Если переменная a равна '1' и по значению и по типу, то выведите 'Верно',
// иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3.

// let a = prompt('Введите значение');
// if (a === '1' || a === 1) {
//    alert('Верно');
// } else {
//    alert('Неверно');
// }

// Если переменная test равна true, то выведите 'Верно', иначе выведите
// 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите
// два варианта скрипта - с короткой записью и с длинной.

// let test = true;
// if (test) {
//    alert('Верно');
// } else {
//    alert('Неверно');
// }
// test ? alert('Верно') : alert('Неверно');

// Если переменная test не равна true, то выведите 'Верно', иначе выведите
// 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите
// два варианта скрипта - с короткой записью и с длинной.

// // let test = false
// if (!test) {
//    alert('Верно');
// } else {
//    alert('Неверно');
// }
// !test ? alert('Верно') : alert('Неверно');

// Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе
// выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// let a = +prompt('Введите значение');
// if (a > 0 && a < 5) {
//    alert('Верно');
// } else {
//    alert('Неверно');
// }

// Если переменная a равна нулю или равна двум, то прибавьте к ней 7,
// иначе поделите ее на 10. Выведите новое значение переменной на экран.
// Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// let a = +prompt('Введите значение');
// if (a === 0 || a === 2) {
//    alert(a + 7);
// } else {
//    alert(a / 10);
// }

// Если переменная a равна или меньше 1, а переменная b больше или равна
// 3, то выведите сумму этих переменных, иначе выведите их разность
// (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0
// и 6, 3 и 5.

// let a = +prompt('Введите значение');
// let b = +prompt('Введите значение');
// if (a <= 1 && b >= 3) {
//    alert(a + b);
// } else {
//    alert(b - a);
// }

// Если переменная a больше 2-х и меньше 11-ти, или переменная b больше
// или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае
// выведите 'Неверно'.

// let a = +prompt('Введите значение');
// let b = +prompt('Введите значение');
// if (a > 2 && a < 11 || b >= 6 && b < 14) {
//    alert('Верно');
// } else {
//    alert('Неверно');
// }

// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она
// имеет значение '1', то в переменную result запишем 'зима', если имеет
// значение '2' – 'весна' и так далее. Решите задачу через switch-case.
// let num = +prompt('Введите значение от 1 до 4')
// let result = 'Зима';
// switch (num) {
//    case 1:
//       result = 'Зима'
//       break;
//    case 2:
//       result = 'Весна'
//       break;
//    case 3:
//       result = 'Лето'
//       break;
//    case 4:
//       result = 'Осень'
//       break;
//    default:
//       alert('Введите значение от 1 до 4');
// }
// alert(result);

// В переменной day лежит какое-то число из интервала от 1 до 31.
// Определите в какую декаду месяца попадает это число (в первую, вторую
// или третью).

// let day = +prompt('Введите значение от 1 до 31');
// if (day < 1 || day > 31) {
//    alert('Таких дней нет в месяце');
// } else if (day <= 10) {
//    alert('Первая декада');
// } else if (day <= 20) {
//    alert('Вторая декада');
// } else {
//    alert('Третья декада');
// }

// . В переменной month лежит какое-то число из интервала от 1 до 12.
// Определите в какую пору года попадает этот месяц (зима, лето, весна,
// осень).

// let month = +prompt('Введите значение от 1 до 12')
// switch (month) {
//    case 12:
//    case 1:
//    case 2:
//       alert('Зима');
//       break;
//    case 3:
//    case 4:
//    case 5:
//       alert('Весна');
//       break;
//    case 6:
//    case 7:
//    case 8:
//       result = alert('Лето');
//       break;
//    case 9:
//    case 10:
//    case 11:
//       result = alert('Осень');
//       break;
//    default:
//       alert('Введите значение от 1 до 12');
// }

// Напишите программу, которая выводит на экран числа от 1 до 100. При этом
// вместо чисел, кратных трем, программа должна выводить слово «Fizz», а
// вместо чисел, кратных пяти — слово «Buzz».Если число кратно и 3, и 5, то
// программа должна выводить слово «FizzBuzz»


// for (let i = 1; i <= 100; i++) {
//    if ((i % 3 == 0) && (i % 5 == 0)) {
//       console.log(`FizzBuzz`)
//    } else if (i % 5 == 0) {
//       console.log(`Buzz`)
//    } else if (i % 3 == 0) {
//       console.log(`Fizz`)
//    } else {
//       console.log(i)
//    }
// }

// Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что
// первым символом этой строки является буква 'a'. Если это так - выведите
// 'да', в противном случае выведите 'нет'.

// let sring = prompt('Введите строку');
// if (sring[0] == 'a') {
//    alert('Да')
// } else {
//    alert('нет')
// }


// Дана строка с цифрами, например, '12345'. Проверьте, что первым
// символом этой строки является цифра 1, 2 или 3. Если это так - выведите
// 'да', в противном случае выведите 'нет'.


// let sring = prompt('Введите строку из цифр');
// switch (sring[0]) {
//    case '1':
//    case '2':
//    case '3':
//       alert('да');
//       break;
//    default:
//       alert('нет');
// }

// Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как
// числа первый символ строки, второй и третий

// let sring = prompt('Введите строку из трех цифр');
// alert(+sring[0] + +sring[1] + +sring[2]);

// Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр
// равняется сумме вторых трех цифр. Если это так - выведите 'да', в
// противном случае выведите 'нет'

// let sring = prompt('Введите строку из шести цифр');
// if ((+sring[0] + +sring[1] + +sring[2]) === (+sring[3] + +sring[4] + +sring[5])) {
//    alert('да')
// } else {
//    alert('нет')
// }

// Выведите столбец чисел от 1 до 100

// for (let i = 1; i <= 100; i++) {
//    console.log(i)
// }

// let i = 1;
// while (i <= 100) {
//    console.log(i)
//    i++
// }

// Выведите столбец чисел от 11 до 33.

// for (let i = 11; i <= 33; i++) {
//    console.log(i)
// }

// let i = 11;
// while (i <= 33) {
//    console.log(i)
//    i++
// }

// Выведите столбец четных чисел в промежутке от 0 до 100.
// for (let i = 0; i <= 100; i++) {
//    if (i % 2 === 0) {
//       console.log(i)
//    }
// }

// let i = 0
// while (i <= 100) {
//    if (i % 2 === 0) {
//       console.log(i)
//    }
//    i++
// }

// С помощью цикла найдите сумму чисел от 1 до 100
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//    sum = sum + i
//    console.log(sum)
// }

// let sum = 0;
// let i = 1;
// while (i <= 100) {
//    sum = sum + i
//    console.log(sum)
//    i++
// }


// Найти последовательность чисел, вычисляемую по следующему алгоритму:
// a. Вводится число;
// b. Если четное, то делится на 2, если нечетное, то умножается на 3 и
// увеличивается на 1;
// c. Полученное число в результате пункта b, становится следующим
// числом в последовательности и повторяется пункт b.
// d. Алгоритм работает до тех пор, пока число в последовательности не
// станет равно 1. Результат записать в строку или массив и вывести в
// консоль

// let a = +prompt('Ведите число');
// let b = a
// let str = ' '

// while (a != 1) {
//    if (a % 2 === 0) {
//       a = a / 2 + ' ';
//    } else {
//       a = a * 3 + 1 + ' ';
//    }
//    str = str + a
// }
// console.log(b + str)

// Перебрать числа от 0 до 300. Если число четное, делится на 12 без остатка
// и не равно 48, а результат деления на 12 нечетный, то вывести строку
// “Ooops”. Если число нечетное и делится на 3, то вывести “Hola”. Если
// значение ноль, то вывести “Zero” (без использования сравнения).

// for (let i = 0; i <= 300; i++) {
//    if (i % 12 === 0 && i !== 48 && (i / 12) % 2 !== 0) {
//       console.log('Ooops')
//    } else if (i % 2 !== 0 && i % 3 === 0) {
//       console.log('Zero')
//    } else if (i === 0) {
//       console.log('Zero')
//    } else {
//       console.log(i)
//    }
// }

// Дано число 5. Вывести в консоль число 555555555, не используя
// вычислений.

// for (let i = 5; i < 555555556; i++) {
//    if (i < 555555555) {
//       continue
//    }
//    console.log(i);
// }


// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все
// эти элементы на экран.

// let a = [];
// for (let i = 1; i <= 5; i++) {
//    a[i] = i;
// }
// console.log(a);

// Дано число n=1000. Делите его на 2 столько раз, пока результат деления не
// станет меньше 50. Какое число получится? Посчитайте количество
// итераций, необходимых для этого (итерация - это проход цикла), и
// запишите его в переменную num.

// let n = 1000;
// while (n > 50) {
//    for (let i = 1; i < 6; i++) {
//       n = n / 2
//       console.log(i, n)
//    }
// }

// Остальные задачи в процессе решения 







