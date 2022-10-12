let a = +prompt('Длина ребра куба(см.)');
console.log(`Длина ребра куба ${a} см.`);


let v = a ** 3;

v = Math.round(v*100) / 100;
console.log(`Объем куба: ${v} см.куб.`);  


let s = (a ** 2) * 4;
s = Math.round(s*100) / 100;
console.log(`Площадь боковой поверхности куба: ${s} см.кв.`); 




