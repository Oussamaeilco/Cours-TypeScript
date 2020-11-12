
// function add(n1: number, n2: number, showResult?: boolean) {
//   return n1 + n2;
// }

// const number1 = 5;
// const number2 = 4.5;
// const printResult = true;

// const result1 = add(number1, number2);

// const result2 = add(number1, number2, printResult);


// const person:{
//     name : string,
//     age: number,
//     hobbies: string[],
//     role: [number, string]
// } = {
//     name: 'Maximilian',
//     age: 35,
//     hobbies: ['Reading','Music'],
//     role: [2, 'author']
// };

enum Role{
    Admin,
    Author,
    Read_Only
}


const person ={
    name: 'Muffin_Time',
    age: 26,
    hobbies: ['Reading','Music'],
    role : Role.Author
}

console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby);
}

// if(person.role===Role.Admin){
//     console.log('Is an Admin');
// }

switch(person.role){
    case Role.Admin: console.log('Is an Admin!');
                     break;
    case Role.Author: console.log('Is an Author!');
    break;
    case Role.Read_Only: console.log('Is an Reader!');
    break;
}