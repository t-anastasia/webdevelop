// https://kodaktor.ru/func_a29ed

(function(){

    const square = function (){ return this * this; };
    console.log(this::square()); 
    
    // используйте слово this и оператор двойного двоеточия
    // чтобы вызов square вернул 25
    // для этого добавьте нужный атрибут в этот элемент script
    
}.bind(5))();