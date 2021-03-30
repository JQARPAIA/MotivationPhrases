const cardImage = document.querySelector(".card__img");
const cardTitle = document.querySelector(".card__title");
const cardAuthor = document.querySelector(".card__author");
const cardMessage = document.querySelector(".card__content");
const ranButton = document.querySelector(".randomButton");

let phrases = {
    phrase1: {
        img: `<img src="img/img1.jpg" alt="Image" class="card__image">`,
        phrase: "No busques los errores, busca un remedio",
        author: "- Henry Ford",
        message: "A veces nos estancamos en lo que no podemos resolver, en lugar de enfocarnos en que lo que si tenemos poder de cambiar, por eso esta frase del Gran Henry Ford es tan valiosa y deberiamos tomar en cuenta.",
    },
    phrase2: {
        img: `<img src="img/img2.jpg" alt="Image" class="card__image">`,
        phrase: "Cuando algo es lo suficientemente importante, lo haces incluso si las probabilidades de que salga bien no te acompañan",
        author: "- Elon Musk",
        message: "Mr. SpaceX está empeñado en llevarnos a Marte, y su deseo es tan apasionado y fuerte que yo creo que lo va a lograr. Desde muy pequeño este ha sido su sueño y no ha dejado de intentar y creo que lo ha llevado lejos, SUEÑA EN GRANDE.",
    },
    phrase3: {
        img: `<img src="img/img3.jpg" alt="Image" class="card__image">`,
        phrase: "La lógica te llevará de la a a la z. la imaginación te llevará a cualquier lugar",
        author: "- Albert Einstein",
        message: "Albert, un nombre que casi usamos como sinonimo de Genio, pero que pensaba que ser inteligente no era lo mas importante, si no tener un pensamiento que se salga de la caja, y si lo piensas, esos son los pensamientos que han cambiado el mundo, para bien o para mal. ",
    },
    phrase4: {
        img: `<img src="img/img4.jpg" alt="Image" class="card__image">`,
        phrase: "Cuéntamelo y me olvidaré. enséñamelo y lo recordaré. involúcrame y lo aprenderé",
        author: "- Benjamin Franklin ",
        message: "Con esta frase, un señor con un poco de fama, tan poca, que se encuentra en todos los billetes de USD 100, nos quiere dejar la importancia de involucrar a los demas y no solo vociferar.",
    },
    phrase5: {
        img: `<img src="img/img5.jpg" alt="Image" class="card__image">`,
        phrase: "Piensa, sueña, cree y atrévete",
        author: "- Walt Disney",
        message: "Si hablamos de personas creativas, pues Walt sabia un poco de eso. Y si no lo crees, dime en que raton piensas cuando te dicen Mickey. El sabia muy bien que, aunque es cierto hay que trabajar duro por lograr lo que queremos, tambien debemos divertirnos en el proceso, si no ¿Que sentido tendria?",
    }
}

ranButton.addEventListener("click", ()=>{
    let num = Math.round(Math.random()*6);
    if (num === 0 || num === 1) {
        num = 1;
        cardImage.innerHTML = phrases.phrase1.img;
        cardTitle.innerHTML = phrases.phrase1.phrase;
        cardAuthor.innerHTML = phrases.phrase1.author;
        cardMessage.innerHTML = phrases.phrase1.message;
    }
    if (num === 2) {
        cardImage.innerHTML = phrases.phrase2.img;
        cardTitle.innerHTML = phrases.phrase2.phrase;
        cardAuthor.innerHTML = phrases.phrase2.author;
        cardMessage.innerHTML = phrases.phrase2.message;
    }
    if (num === 3) {
        cardImage.innerHTML = phrases.phrase3.img;
        cardTitle.innerHTML = phrases.phrase3.phrase;
        cardAuthor.innerHTML = phrases.phrase3.author;
        cardMessage.innerHTML = phrases.phrase3.message;
    }
    if (num === 4) {
        cardImage.innerHTML = phrases.phrase4.img;
        cardTitle.innerHTML = phrases.phrase4.phrase;
        cardAuthor.innerHTML = phrases.phrase4.author;
        cardMessage.innerHTML = phrases.phrase4.message;
    }
    if (num === 6 || num == 5) {
        cardImage.innerHTML = phrases.phrase5.img;
        cardTitle.innerHTML = phrases.phrase5.phrase;
        cardAuthor.innerHTML = phrases.phrase5.author;
        cardMessage.innerHTML = phrases.phrase5.message;
    }
})