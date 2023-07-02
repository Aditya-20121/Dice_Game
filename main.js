// Generating random numbers.
let x1 = Math.floor(Math.random() * 6) + 1;
let x2 = Math.floor(Math.random() * 6) + 1;

// Generating links for the two images selected randomly
let link1 = `images/dice${x1}.png`;
let link2 = `images/dice${x2}.png`;

// Putting the links in img src.
document.querySelector("#img1").setAttribute("src", link1);
document.querySelector("#img2").setAttribute("src", link2);

let text;
if(x1>x2){
    text = "🚩 Player 1 Wins."
}
else if(x2>x1){
    text = "Player 2 Wins 🚩."
}
else{
    text = "--DRAW--"
}

document.querySelector("h1").innerHTML = text;