
console.log("creando cartas");

let cartas = [];
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let tipos = ["pica", "diamante", "trebol", "corazon"];

let inputnumber = document.querySelector("#number")
let buttondraw = document.querySelector("#draw")
let buttonsort = document.querySelector("#sort")

function generadornumeros() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    let indexnumeros = Math.floor(Math.random() * numeros.length);
    return numeros[indexnumeros]
};

function changeCardNumber(numeros) {
    switch (numeros) {
        case 1: return "A"; break;
        
        case 11: return "J"; break;
        case 12: return "Q"; break;
        case 13: return "K"; break;
        default: return numeros; break;
    }
}

function generadortipos() {
    let tipos = ["pica", "diamante", "trebol", "corazon"];
    let indextipos = Math.floor(Math.random() * tipos.length);
    return tipos[indextipos]
};

function generaCarta(numero, piunta) {
    let full = document.querySelector(".container");
    let div = document.createElement("div");
    div.className = "card";
    let span = document.createElement("span");
    span.className = "numero";
    div.appendChild(span);
    full.appendChild(div);

    span.innerHTML = changeCardNumber(numero);
    span.classList.add(piunta);
}

    
/* function generaCarta2(numero, piunta) {
    let full2 = document.querySelector(".container2");
    let div = document.createElement("div");
    div.className = "card";
    let span = document.createElement("span");
    span.className = "numero";
    div.appendChild(span);
    full2.appendChild(div);
    

    span.innerHTML = numero;
    span.classList.add(piunta);
} */

  

buttondraw.addEventListener("click", (e) => {
    
    var limpiar = document.querySelector(".container");
    while (limpiar.firstChild) {
        limpiar.removeChild(limpiar.firstChild);
    }

    if (inputnumber.value !== "") {
        for (let i = 0; i < inputnumber.value; i++) {

            let numerorandom = generadornumeros();
            let pintarandom = generadortipos();

            generaCarta(numerorandom, pintarandom);

            cartas.push([numerorandom, pintarandom]);
        }
    };
});

let br = document.createElement("br");
document.body.appendChild(br);


buttonsort.addEventListener("click", (j) => {

    let wall = cartas.length - 1;
    while (wall > 0) {
        let index = 0;
        while (index < wall) {
            if (cartas[index][0] > cartas[index + 1][0]) {//tomo el arreglo cartas y le digo si

                let aux = cartas[index];
                cartas[index] = cartas[index + 1];
                cartas[index + 1] = aux;

                let tapa=document.createElement("div");
                tapa.className="tapa";
                for (let i = 0; i < cartas.length; i++) {
                    
                    let full2 = document.querySelector(".container2");
                    let div = document.createElement("div");
                    div.className = "card";
                    let span = document.createElement("span");
                    span.className = "numero";
                    div.appendChild(span);
                    tapa.appendChild(div);
                    full2.appendChild(tapa);

                    span.innerHTML = changeCardNumber(cartas[i][0]);
                    span.classList.add(cartas[i][1]);

                   
                    /* generaCarta2(cartas[i][0], cartas[i][1]); */
                }

            }
            index++;
        }
        wall--;
    }

});











