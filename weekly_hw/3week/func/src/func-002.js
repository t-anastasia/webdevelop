
// Дано: функция
  const mixin = function(){
   return this * this;
  };
// Выполнить: вызвать функцию так, чтобы при вызове от значения 5 выдавался квадрат числа 5, равный 25
a = mixin.call(5);
// здесь ваш ответ
console.log(a);