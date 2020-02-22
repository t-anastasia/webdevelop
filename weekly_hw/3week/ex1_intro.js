const [a1, b1, c1, a2, b2, c2] = [1, 3, 2, 9, 2, 7];
let det1, det2, det3, x, y;  
// здесь напишите императивный линейный код
// который выводит в консоль значения x и y по 
// заданным выше переменным
// с использованием формул Крамера (т.е. через определители,
// (только приравнивания и арифметические операции + - * /)
// чтобы решить систему линейных уравнений

det1 = a1*b2 - a2*b1;
det2 = b1*c2 - c1*b2;
det3 = c2*a1 - c1*a2;
x = det2/det1;
y = det3/det1;

console.log(`Ответ: x = ${x}, y = ${y}`); 
