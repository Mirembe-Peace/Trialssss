function calculate(number){
    return number*number;
}

console.log(calculate(2));

let choiceOfColor = ['green','blue','red'];
choiceOfColor[3] = 'purple'

console.log(choiceOfColor[3]);
console.warn('are you sure you want to delete');

function greet(name){
    console.log(`Hello ${name}`);
}

greet("John");