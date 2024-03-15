let a = Math.floor(Math.random() * 1000) % 255;
console.log(a);
let b = Math.floor(Math.random() * 1000) % 255;
console.log(b);
let c = Math.floor(Math.random() * 1000) % 255;
console.log(c);

document.getElementsByClassName("box1")[0].style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
a = Math.floor(Math.random()*(255-0)+0);
b = Math.floor(Math.random() * 1000) % 255;
c = Math.floor(Math.random() * 1000) % 255;
document.getElementsByClassName("box2")[0].style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
a = Math.floor(Math.random() * 1000) % 255;
b = Math.floor(Math.random() * 1000) % 255;
c = Math.floor(Math.random() * 1000) % 255;
document.getElementsByClassName("box3")[0].style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
a = Math.floor(Math.random() * 1000) % 255;
b = Math.floor(Math.random() * 1000) % 255;
c = Math.floor(Math.random() * 1000) % 255;
document.getElementsByClassName("box4")[0].style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
a = Math.floor(Math.random() * 1000) % 255;
b = Math.floor(Math.random() * 1000) % 255;
c = Math.floor(Math.random() * 1000) % 255;
document.getElementsByClassName("box5")[0].style.backgroundColor = `rgb(${a}, ${b}, ${c})`;

