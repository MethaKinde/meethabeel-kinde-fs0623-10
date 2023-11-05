/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

for(let i = 0; i < pets.length; i++){
  console.log(pets[i]);
}
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log(pets.sort())

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
for(let i = 1; i <= pets.length; i++){
  console.log(pets[pets.length-i])
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
//salvo in una costante il primo elemento dell'array pets
const primopet = pets[0]

const nuovoarray = pets.slice(1)

//aggiungo il primo elemento di pets e lo vado a mettere in ultima posizione nel nuovo array
nuovoarray.push(primopet)
console.log(nuovoarray)


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for(i = 0; i < cars.length; i++){
  cars[i].licensePlate = prompt("inserisci nuova targa: ")
}

//console.log(cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const newCar = {
  brand: 'Toyota',
  model: 'Corolla',
  color: 'white',
  trims: ['le', 'xle'],
  licensePlate: 'ZXC147',
}
cars.push(newCar)

for(let i = 0; i < cars.length; i++){
  const car = cars[i];
  if (car.trims.length > 0) {
    car.trims = car.trims.slice(0, car.trims.length - 1)
  }
}

console.log(cars)


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for(let i = 0; i < cars.length; i++){
  const car = cars[i]
  if(car.trims.length > 0){
    justTrims.push(car.trims[0])
  }
}
console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for(let i = 0; i < cars.length; i++){
  const car = cars[i]
  const carcolorarray = car.color.split('')
  if(carcolorarray[0] === "b"){
    console.log("Fizz")
  }
  else{
    console.log("Buzz")
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

i = 0; //non ho messo let i = 0, perche i era gia inizializzato alla riga 67 in questo foglio di esercizi
while(numericArray[i] != 32){
  console.log(numericArray[i])
  i++
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
const posizionechar = []

for(let i = 0; i < charactersArray.length; i++){

  switch(charactersArray[i]){
    case 'a':
      posizionechar.push(1);
      break;
    case 'b':
      posizionechar.push(2);
      break;
    case 'c':
      posizionechar.push(3);
      break;
    case 'd':
      posizionechar.push(4);
      break;
    case 'e':
      posizionechar.push(5);
      break;
    case 'f':
      posizionechar.push(6);
      break;
    case 'g':
      posizionechar.push(7);
      break;
    case 'h':
      posizionechar.push(8);
      break;
    case 'i':
      posizionechar.push(9);
      break;
    case 'l':
      posizionechar.push(10);
      break;
    case 'm':
      posizionechar.push(11);
      break;
    case 'n':
      posizionechar.push(12);
      break;
    case 'o':
      posizionechar.push(13);
      break;
    case 'p':
      posizionechar.push(14);
      break;
    case 'q':
      posizionechar.push(15);
      break;
    case 'r':
      posizionechar.push(16);
      break;
    case 's':
      posizionechar.push(17);
      break;
    case 't':
      posizionechar.push(18);
      break;
    case 'u':
      posizionechar.push(19);
      break;
    case 'v':
      posizionechar.push(20);
      break;
    case 'z':
      posizionechar.push(21);
      break;

    default:
      posizionechar.push("carattere non appartenente all'alfabeto italiano ");
  }//fine switch
}//fine for-i

console.log(posizionechar)