const multiplicar1 = param => {
    const resultado = param * 2;
    console.log(resultado)
    }
    const multiplicar2 = (param) => {
    const resultado = param * 2;
    console.log(resultado)
    }
    multiplicar1(4); // 8
    multiplicar2(4); // 8


const multiplicar = (x, y) => {
    const resultado = x * y;
    console.log(resultado);
    }
    multiplicar(2, 3); // 6


const multiplica = (x, y) => x * y;
const valor = multiplica(2, 3);
console.log(valor); // 6

const persons = [
    { name: "John", age: 35 },
    { name: "Anne", age: 24 },
    { name: "Tom", age: 41 },
    { name: "Andrew", age: 55 },
    { name: "Mary", age: 18 },
]
const overThirty = persons.filter(person => person.age > 30);
 console.log(overThirty);

 const underThirty = persons.filter(person => person.age < 30);
 console.log(underThirty);
    /* Array [
    {name: "John", age: 35},
    {name: "Tom", age: 41},
    {name: "Andrew", age: 55}
    ]*/