/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve? */

/* Inizio Gioco Mail */

const emailList = ['alessio@boolean.it', 'boolean@boolean.it', 'arrays-es@boolean.it'] 
//Forse non ho capito la consegna dell'esercizio sulla parte della mail (?)

//chiedo all'utente di inserira una mail e ne salvo i dati al click del button

const submit = document.getElementById('submit')
submit.addEventListener('click', function(){
    const userEmail = document.getElementById('userEmail').value

    let success = false

    for (let i=0; i < emailList.length; i++){
        if (userEmail == emailList[i]){
             success = true
        }
    }

    if (success == true){
        const emailResult = document.getElementById('emailresult')
        emailResult.insertAdjacentHTML('beforeend', `<div class="result">La tua Mail è corretta!</div>`)
        submit.disabled = true; 
        console.log('La tua mail è corretta!')
    } else {
        const emailResult = document.getElementById('emailresult')
        emailResult.insertAdjacentHTML('beforeend', `<div class="result">Per favore inserisci una mail valida!</div>`)
        submit.disabled = true; 
        console.log('Per favore inserisci una mail valida!')
    }
})


/* Inizio Gioco Dadi */

/* let diceUser = document.getElementById('diceresult')
let dicePC = document.getElementById('diceresult')
let diceResult = document.getElementById('diceresult')
 */
const game = document.getElementById('game')
game.addEventListener('click', function(){
    let userNumber = Math.floor(Math.random () *6) +1;
    let pcNumber = Math.floor(Math.random () *6) +1;

    let diceUser = document.getElementById('diceresult')
    diceUser.insertAdjacentHTML('beforeend', `<span>Il tuo numero: ${userNumber}</span>`)
    console.log(`Il tuo numero: ${userNumber}`)
    
    let dicePC = document.getElementById('diceresult')
    dicePC.insertAdjacentHTML('beforeend', `<span>Il numero del pc: ${pcNumber}</span>`)
    console.log(`Il numero del pc: ${pcNumber}`)

    if (userNumber > pcNumber){
        let diceResult = document.getElementById('diceresult')
        diceResult.insertAdjacentHTML('beforeend', `<span class="result">Complimenti! Hai vinto!</span>`)
        console.log('Complimenti! Hai vinto!')
    } else if (userNumber < pcNumber){
        let diceResult = document.getElementById('diceresult')
        diceResult.insertAdjacentHTML('beforeend', `<span class="result">Mi dispiace! Hai perso!</span>`)
        console.log('Mi dispiace! Hai perso!')
    } else if (userNumber == pcNumber){
        let diceResult = document.getElementById('diceresult')
        diceResult.insertAdjacentHTML('beforeend', `<span class="result">Pareggio! Tira un altro dado</span>`)
        console.log('Pareggio! Tira un altro dado')
    }
    game.disabled = true; 
});

const redo = document.getElementById('redo')
redo.addEventListener('click', function(){
    game.disabled = false; 
})

const clear = document.getElementById('clear')
clear.addEventListener('click', function(){
    let diceResult = document.getElementById('diceresult')
    diceResult.innerHTML = ""
    game.disabled = false; 
})