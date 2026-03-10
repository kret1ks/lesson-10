// Завдання "Таймер інтервалу": Створіть програму, яка виводить повідомлення кожну секунду за допомогою setInterval. Після 5 повідомлень зупиніть виконання інтервалу за допомогою clearInterval.


// let count = 0

// const timerId = setInterval(() => {
//     count += 1
//     console.log("Повідомлення", count);
//     if(count === 5){
//         clearInterval(timerId);
//     }
// },1000);


// Завдання "Анімація елементів": Створіть кілька елементів на сторінці і реалізуйте просту анімацію, змінюючи їх розмір, положення чи стилі через певний інтервал за допомогою setInterval.


// const boxRef = document.querySelector(".box")

// let position = 0


// setInterval(() => {
//     position += 2
//     boxRef.style.left = position + "px"
//     boxRef.style.top = position + "px"
   
// }, 20)



// Завдання "Інтерактивна гра": Створіть просту інтерактивну гру, де гравець має натискати на елементи на сторінці протягом певного інтервалу часу, використовуючи setInterval. Реалізуйте лічильник очок та відслідковуйте кількість натисків гравця.

// const gameRef = document.querySelector(".game");

// let score = 0;
// let timeLeft = 15;
// let timerId = null;

// gameRef.addEventListener("click", () => {
//     score++;
//     console.log("Рахунок:", score); 
// });

// timerId = setInterval(() => {
//     timeLeft--;
//     console.log("Залишилось часу:", timeLeft);

//     if (timeLeft === 0) {
//         clearInterval(timerId); 
//         alert("Гра закінчена! Твій результат: " + score);
//     }
// }, 1000);






// Завдання "Контроль часу": Створіть програму, яка дозволяє користувачу встановити певний час (у секундах) за допомогою введення з клавіатури. Потім використовуйте setTimeout або setInterval, щоб після встановленого часу вивести повідомлення.



const timeRef = document.querySelector('#time');
const btnRef = document.querySelector(".start");

let userTime = 0; 

timeRef.addEventListener("input", (event) => {

    userTime = Number(event.target.value);
    console.log("Встановлено час:", userTime);
});

btnRef.addEventListener("click", () => {
    console.log("Таймер запущено на", userTime, "секунд");
    
    setTimeout(() => { 
        alert("Час вийшов!"); 
    }, userTime * 1000); 
});


