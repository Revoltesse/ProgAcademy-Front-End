//вивід даних користувача
var name = prompt("Введіть ім'я");
document.write(name);

var surName = prompt("Введіть прізвище");
document.write(surName);

var age = prompt("Введіть вік");
document.write(age);

//середнє арифметичне
var a = prompt("Enter number 1");
var b = prompt("Enter number 2");
var c = prompt("Enter number 3");

var num1 = parseFloat(a);
var num2 = parseFloat(b);
var num3 = parseFloat(c);

result = (num1 + num2 + num3) / 3;
document.write(result);

//верстка

document.write("<header></header>", "<nav></nav>", "<section>", "Введіть ім'я " + name + "<br/>", "Введіть прізвище " + surName + "<br/>",
    "Введіть вік " + age + + "<br/>", "Середнє арефметичне" + result + "<br/>", "</section>", "<footer>", "</footer>")





