// 1. Удаление указанного количества символов из строки
// Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

// let str = "Каждый охотник желает знать";
// let length = 5;
// function delete_characters(str, length) {
//   return str.slice(0, length + 1);
// }
// console.log(delete_characters(str, length));

// 2. Вставить тире между словами строки
// Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

// let str = "HTML JavaScript PHP";
// function insert_dash(str) {
//   let find = " ";
//   let replace = "-";
//   let pos = 0;
//   while (str.includes(find)) {
//     pos = str.indexOf(find, pos);
//     str = (
//       str.slice(0, pos) +
//       replace +
//       str.slice(pos + find.length)
//     ).toUpperCase();
//   }
//   return str;
// }

// console.log(insert_dash(str));

// 3. Сделать первую букву строки прописной
// Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

// let str = "string not starting with capital";
// function cursive_letter(str) {
//   return str[0].toUpperCase() + str.slice(1);
// }
// console.log(cursive_letter(str));

// 5. Смена регистра символов строки
// Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

// let str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";

// function change_register(str) {
//   let str2 = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toLowerCase()) {
//       str2 += str[i].toUpperCase();
//     } else {
//       str2 += str[i].toLowerCase();
//     }
//   }
//   return str2;
// }
// console.log(change_register(str));

// 23. Найти слово в строке
// Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.

// let str = "abc def ghi jkl mno pqr stu";
// let word = "abc";

// function findWord(word, str) {
//   if (str.includes(word)) {
//     return `слово есть в строке ${str}`;
//   } else {
//     return `слова нет в строке ${str}`;
//   }
// }
// console.log(findWord(word, str));

// 21. Удалить лишние слова из строки
// Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

// let str = "Сила тяжести приложена к центру масс тела";

// function cutString(str, n) {
//   n = "Сила";
//   if (str.includes(n)) {
//     return n;
//   } else {
//     return `слова ${n} нет в строке`;
//   }
// }
// console.log(cutString(str));

// 12. Повторить строку n раз
// Напишите функцию repeatStr(str, n), которая вовращает строку повторяемую определённое количество раз.
// let str = "Привет";
// let str2 = " ";
// let n = 3;
// function repeatStr(str, n) {
//   while (n > 0) {
//     str2 += str;
//     n--;
//   }
//   return str2;
// }

// console.log(repeatStr(str, n));

// 8. Сравнение строк без учёта регистра
// Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.
// function comparison(str1, str2) {
//   let result = str1.toUpperCase() === str2.toUpperCase();
//   return result;
// }
// console.log(comparison("Ваня", "Ваня"));

// 25. Реализовать объект

// Создать объект с начальным полем title. Добавить поле с ключом description начальным значением строкой. Добавить метод addField, который при вызове добавляет новое поле в объект с переданным именем и значением addField(fieldName, value), добавить метод editField(fieldName, value), который меняет указанное свойство объекта. Добавить метод удаление свойства deleteField(fieldName), удаляющий указанное поле. Добавить и изменить поля с помощью этих методов.

// let n = {
//   title: "title",
// };

// n.addField = (fieldName, value) => {
//   return (n.fieldName = "value");
// };
// n.ditField = (fieldName, value) => {
//   return (n.fieldName = "value");
// };
// n.deleteField = (fieldName) => {
//   return delete n.fieldName;
// };

// n.description = "123";
// console.log(n);
