// 14. c помощью замыкания реализовать функцию счетчика. (При каждом вызове функции в консоль должно  выводиться текущие значение счетчика).
// function createCounter(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// const counter_1 = createCounter(1);
// console.log(counter_1(0)); // выведет в консоль 1
// console.log(counter_1(1)); // выведет в консоль 2
// console.log(counter_1(2)); // выведет в консоль 3
// console.log(counter_1(3)); // выведет в консоль 4
// const counter_2 = createCounter(1);
// console.log(counter_2(0)); // выведет в консоль 1

// 17. Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
// В текущей реализации Сообщение не соответсвует тому, что мы ожидаем увидеть(“Имя пользователя  logged in” или “Имая пользователя failed to log in”)

// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: "Вася",

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// 18.Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на value
// var elem = { value: "Привет" };

// function func(surname, name) {
//   alert(this.value + ", " + surname + " " + name);
// }

// let boundFunc = func.bind(elem);

// boundFunc("Иванов", "Иван"); //тут должно вывести 'привет, Иванов Иван'
// boundFunc("Петров", "Петр"); //тут должно вывести 'привет, Петров Петр'

// 19. Есть функция const sum = (a, b, c) => a + b + c, которая складывает три числа. Выполните каррирование. Т.е. напишите вспомогательную функцию currySum, в которую вы передадите функцию sum, и которую можно будет вызвать слуедующим образом -  currySum(a)(b)(c).
// const sum = (a, b, c) => a + b + c;

// function currySum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(currySum(1)(2)(3));

// не уверен что требовалось такое решение
