// Реализовать объект калькулятора calculator() с 3 методами. Первый метод setValues(a, b) присваивает значения свойствам a и b.Второй sum()(обратите внимание, что он не принимает аргументы)  возвращает сумму свойств a и b текущего объекта или сообщение об ошибке, если значения свойств не присвоены. Третий метод mult() возвращает произведение свойств a и b текущего объекта или сообщение об ошибке, если значения свойств не присвоены.

// Дополнительно: сделать в функции setValues(a, b) проверку и разрешить присвоение только чисел, иначе возвращать сообщение об ошибке.

// Не работает такой код, что нало исправить ?
// let calculator = {
//   setValues(a, b) {
//     this.a = 3;
//     this.b = 4;
//     this.c = true;
//     if (typeof this.a === Number && typeof this.b === Number) {
//       return this.a, this.b;
//     } else {
//       this.c = false;
//       return "Ошибка";
//     }
//   },
//   sum() {
//     if (this.c === true) {
//       return this.a + this.b;
//     } else {
//       return "Ошибка";
//     }
//   },
//   mult() {
//     if (this.c === true) {
//       return this.a * this.b;
//     } else {
//       return "Ошибка";
//     }
//   },
// };

// console.log(calculator.sum());

// Создать объект пользователя  user1 со свойствам name, age, city, favoriteColor и методами setName, setAge, setCity, setFavoriteColor, которые меняют значения соответствующих свойств. Создать объект второго юзера user2 из существующего объекта user1. Изменить значения всех свойств второго юзера с помощью методов setName, setAge, setCity, setFavoriteColor. Вывести в консоль оба объекта и убедиться, что значения свойств разные.

// Дополнительно: реализовать метод getUserInfo(), который возвращает объект, со всей информацией о пользователе(без методов).
// function setName() {
//   return (this.name = "Валентин");
// }
// function setAge() {
//   return (this.age = 20);
// }
// function setCity() {
//   return (this.city = "Казань");
// }
// function setFavoriteColor() {
//   return (this.favoriteColor = "Синий");
// }
// function getUserInfo() {
//   return this;
// }
// let user1 = {
//   name: "Данил",
//   age: 30,
//   city: "Москва",
//   favoriteColor: "Зеленый",
// };

// let user2 = {
//   name: "Данил",
//   age: 30,
//   city: "Москва",
//   favoriteColor: "Зеленый",
//   set: setName,
//   setAge,
//   setCity,
//   setFavoriteColor,
//   getUserInfo,
// };

// console.log(user2);
