let a = Math.floor(Math.random() * 1000) % 255;
console.log(a);
let b = Math.floor(Math.random() * 1000) % 255;
console.log(b);
let c = Math.floor(Math.random() * 1000) % 255;
console.log(c);

function getRandomColor(){
    return Math.floor(Math.random() * 1000) % 255;
}

setInterval(() => {
    for(let i=0; i<5; i++){
        a = getRandomColor();
        b = getRandomColor();
        c = getRandomColor();
        // document.getElementsByClassName(`box${i+1}`)[0].innerHTML = `hello ${i+1}`;
        document.getElementsByClassName(`box${i+1}`)[0].style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
    }
}, 100)

