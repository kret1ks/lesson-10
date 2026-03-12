// Завдання "Таймер інтервалу": Створіть програму, яка виводить повідомлення кожну секунду за допомогою setInterval. Після 5 повідомлень зупиніть виконання інтервалу за допомогою clearInterval.


let count = 0

const id = setInterval(() => {
  count += 1  
  console.log(count);
  if(count === 5){
    console.log("кінець");
    clearInterval(id)
  }
},1000)



// Завдання "Анімація елементів": Створіть кілька елементів на сторінці і реалізуйте просту анімацію, змінюючи їх розмір, положення чи стилі через певний інтервал за допомогою setInterval.


const boxRef = document.querySelector(".box")
const boxEl = document.querySelector(".boxed")

let counts = 0;
let position = 0;

const array = ["red", "blue", "green", "orange"]

setInterval(() => {
    boxRef.style.backgroundColor = array[counts];
    counts++;
    if (counts === array.length) {
        counts = 0;
    }
    position += 20
    boxRef.style.left = position + "px"
    if(position >= 2000){
        position = 0;
    }
}, 150)






// Завдання "Інтерактивна гра": Створіть просту інтерактивну гру, де гравець має натискати на елементи на сторінці протягом певного інтервалу часу, використовуючи setInterval. Реалізуйте лічильник очок та відслідковуйте кількість натисків гравця.


const gameRef = document.querySelector(".game");

let score = 0;
let timeLeft = 5;

gameRef.addEventListener("click", () => {
    if (score === 0) {
        const timerId = setInterval(() => {
            timeLeft--;

            if (timeLeft <= 0) {
                clearInterval(timerId);
                alert("Час вийшов! Твій рахунок: " + score);
            }
        }, 1000);
    }

    score += 1;
});

// Завдання "Контроль часу": Створіть програму, яка дозволяє користувачу встановити певний час (у секундах) за допомогою введення з клавіатури. Потім використовуйте setTimeout або setInterval, щоб після встановленого часу вивести повідомлення.



const timeRef = document.querySelector('#time');
const btnRef = document.querySelector(".start");

let userTime = 0; 
// let timeoutId = null;

timeRef.addEventListener("input", (event) => {
    userTime = Number(event.target.value);
    console.log("Встановлено час:", userTime);
});

btnRef.addEventListener("click", () => {
    console.log("Таймер запущено на", userTime);
    
    setTimeout(() => { 
        alert("Час вийшов!"); 
    }, userTime * 1000); 
});


























