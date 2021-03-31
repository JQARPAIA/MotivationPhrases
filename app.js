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
        order: 1,
    },
    phrase2: {
        img: `<img src="img/img2.jpg" alt="Image" class="card__image">`,
        phrase: "Cuando algo es lo suficientemente importante, lo haces incluso si las probabilidades de que salga bien no te acompañan",
        author: "- Elon Musk",
        message: "Mr. SpaceX está empeñado en llevarnos a Marte, y su deseo es tan apasionado y fuerte que yo creo que lo va a lograr. Desde muy pequeño este ha sido su sueño y no ha dejado de intentar y creo que lo ha llevado lejos, SUEÑA EN GRANDE.",
        order: 2,
    },
    phrase3: {
        img: `<img src="img/img3.jpg" alt="Image" class="card__image">`,
        phrase: "La lógica te llevará de la a a la z. la imaginación te llevará a cualquier lugar",
        author: "- Albert Einstein",
        message: "Albert, un nombre que casi usamos como sinonimo de Genio, pero que pensaba que ser inteligente no era lo mas importante, si no tener un pensamiento que se salga de la caja, y si lo piensas, esos son los pensamientos que han cambiado el mundo, para bien o para mal. ",
        order: 3,
    },
    phrase4: {
        img: `<img src="img/img4.jpg" alt="Image" class="card__image">`,
        phrase: "Cuéntamelo y me olvidaré. enséñamelo y lo recordaré. involúcrame y lo aprenderé",
        author: "- Benjamin Franklin ",
        message: "Con esta frase, un señor con un poco de fama, tan poca, que se encuentra en todos los billetes de USD 100, nos quiere dejar la importancia de involucrar a los demas y no solo vociferar.",
        order: 4,
    },
    phrase5: {
        img: `<img src="img/img5.jpg" alt="Image" class="card__image">`,
        phrase: "Piensa, sueña, cree y atrévete",
        author: "- Walt Disney",
        message: "Si hablamos de personas creativas, pues Walt sabia un poco de eso. Y si no lo crees, dime en que raton piensas cuando te dicen Mickey. El sabia muy bien que, aunque es cierto hay que trabajar duro por lograr lo que queremos, tambien debemos divertirnos en el proceso, si no ¿Que sentido tendria?",
        order: 5,
    },
    phrase5: {
        img: `<img src="img/img6.jpg" alt="Image" class="card__image">`,
        phrase: "Si tu novio no te mama el culo, pa' eso que no mame",
        author: "- Dr. Bad Bunny",
        message: "El Dr. Bad Bunny aqui nos inspira con su letras y el ritmo de la poesia de safaera.",
        order: 6,
    }
}

ranButton.addEventListener("click", ()=>{
    let num = Math.floor(Math.random()*7);
    if (num === 0) {num = 1};
    for (let frase in phrases){
        console.log(num);
        if (num == phrases[frase].order) {
            cardImage.innerHTML = phrases[frase].img;
            cardTitle.innerHTML = phrases[frase].phrase;
            cardAuthor.innerHTML = phrases[frase].author;
            cardMessage.innerHTML = phrases[frase].message;
        }
    }
});