/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve? */


const emailList = ['alessio@Boolean.it', 'boolean@boolean.it', 'arrays-es@boolean.it'] 
//Forse non ho capito la consegna dell'esercizio sulla parte della mail (?)




const result = document.getElementById('result')
result.addEventListener('click', function(){
    let userNumber = Math.floor(Math.random () *6) +1;
    let pcNumber = Math.floor(Math.random () *6) +1;
    console.log(`Il tuo numero: ${userNumber}`)
    console.log(`Il numero del pc: ${pcNumber}`)
    if (userNumber > pcNumber){
        console.log('Complimenti! Hai vinto!')
    } else if (userNumber < pcNumber){
        console.log('Mi dispiace! Hai perso!')
    } else if (userNumber == pcNumber){
        console.log('Pareggio! Tira un altro dado')
    }
    result.disabled = true; 
});

const redo = document.getElementById('redo')
redo.addEventListener('click', function(){
    result.disabled = false; 
})