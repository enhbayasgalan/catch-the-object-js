const gameCont = document.createElement("div");
document.getElementById("container").appendChild(gameCont);
gameCont.classList.add("gameCont");
/*
let object = document.createElement('div')
object.classList.add('falling-object')
let random = Math.floor(Math.random() * 1000 )
*/
const apple = document.createElement("div");
gameCont.appendChild(apple);
apple.classList.add("fruit");
apple.classList.add("apple");
apple.classList.add("hidden");

const strawberry = document.createElement("div");
gameCont.appendChild(strawberry);
strawberry.classList.add("fruit");
strawberry.classList.add("strawberry");
strawberry.classList.add("hidden");

const banana = document.createElement("div");
gameCont.appendChild(banana);
banana.classList.add("fruit");
banana.classList.add("banana");
banana.classList.add("hidden");

const cherry = document.createElement("div");
gameCont.appendChild(cherry);
cherry.classList.add("fruit");
cherry.classList.add("cherry");
cherry.classList.add("hidden");
const fruit = document.getElementsByClassName("fruit");

const poo = document.createElement("div");
gameCont.appendChild(poo);
poo.classList.add("fruit");
poo.classList.add("pooImage");
poo.classList.add("hidden");
const bombPoo= document.getElementsByClassName("fruit");

let random = Math.floor(Math.random() * 950);
let i = 0;
fruit[0].style.left = random + "px";

let randomPoo = Math.floor(Math.random() * 950);
let k = 0;
poo.style.left = random + "px";

setInterval(fruitFall, 2000);
setInterval(bombs, 5000);

function fruitFall() {
  fruit[i].classList.remove("animate");
  fruit[i].classList.add("hidden");
  i = Math.floor(Math.random() * 4);
  let random = Math.floor(Math.random() * 950);
  fruit[i].classList.add("animate");
  fruit[i].classList.remove("hidden");
  fruit[i].style.left = random + "px";
  
}

function bombs() {
    poo.classList.remove("animate");
    poo.classList.add("hidden");
    let randomPoo = Math.floor(Math.random() * 950);
    poo.classList.add("animate");
    poo.classList.remove("hidden");
    poo.style.left = randomPoo + "px";
    setTimeout(remover => {poo.classList.remove("animate"), poo.classList.add("hidden");}, 2000)
}