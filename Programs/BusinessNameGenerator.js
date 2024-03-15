
let randomInt = () => {
    return Math.floor(Math.random() * 10) % 3 + 1;
}

let Adjectives={
    1: "Crazy",
    2: "Amazing",
    3: "Fire",
}
let Shop_name={
    1: "Engine",
    2: "Foods",
    3: "Garments",
}
let Another_words={
    1: "Bros",
    2: "Limited",
    3: "Hub",
}

console.log(Adjectives[randomInt()] + " " + Shop_name[randomInt()] + " " + Another_words[randomInt()]);


