let a = Math.floor(Math.random() * 1000) % 255;
console.log(a);
let b = Math.floor(Math.random() * 1000) % 255;
console.log(b);
let c = Math.floor(Math.random() * 1000) % 255;
console.log(c);

function getRandomColor(){
    return Math.floor(Math.random() * 1000) % 255;
}

document.getElementsByClassName("box1")[0].style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
a = getRandomColor();
b = getRandomColor();
c = getRandomColor();
document.getElementsByClassName("box2")[0].style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
a = getRandomColor();
b = getRandomColor();
c = getRandomColor();
document.getElementsByClassName("box3")[0].style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
a = getRandomColor();
b = getRandomColor();
c = getRandomColor();
document.getElementsByClassName("box4")[0].style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
a = getRandomColor();
b = getRandomColor();
c = getRandomColor();
document.getElementsByClassName("box5")[0].style.backgroundColor = `rgb(${a}, ${b}, ${c})`;

