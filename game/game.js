/*Hiermij word getest of de javascript het doet in de browser*/
console.log ("werkt het");
console.log ("plantengroei");
console.log ("waser")

/*Hiermee roep je elementen op uit html*/
var plantengroei = document.querySelector(".kleinePlant");
var waser = document.querySelector(".waser");
var backgroundI = document.querySelector("body")
var afbeeldingen = ['afbeelding/biksemplant.png', 'afbeelding/zonplant.png']
subButton.addEventListener('click', getUserName, false); 
var knop = document.querySelector('.knop');
var eersteScherm = document.querySelector('#nameForm');
var knup = document.querySelector(".knup");
var welkom = document.querySelector(".welkom");
var sun = document.querySelector(".sun");
var moon = document.querySelector(".moon")
var maantekst= document.querySelector(".maantekst")

knup.addEventListener("click", doeIetsWillekurigs);

/*De functie haalt de waarde op van een HTML invoerveld met het ID "nameField"
en slaat deze op in een variabele genaamd "nameField" */
function getUserName() {
    var nameField = document.getElementById('nameField').value;
    var result = document.getElementById('result');
    
/*Er word gecontroleerd of de naam langer is dan 1 letter (niet 1 letter, tekst voer naam ik)
else de tekst je plant heet en variable van start pagina verdwijnen. */    
    if (nameField.length < 1) {
        result.textContent = 'Voer een naam in';
        //alert('Voer een naam in');
    } else {
        result.textContent = 'Je plant heet: ' + nameField;
        //alert(nameField);
        plantengroei.classList.remove('hide');
        waser.classList.remove('hide');
        knup.classList.remove('hide');
        welkom.classList.add('hide');
        sun.classList.remove('hide');
        moon.classList.remove('hide');
    }
}

/*een addEventListener word toegevoegd aan de button, hij checked de waarde van de nameField. 
Als deze leeg is krijg je de tekst. else gaat ie door naar het volgende scherm en verdwijnt het eersteScherm */

knop.addEventListener('click', function(){
    if(nameField.value == ''){
        pNaam.innerHTML = 'hey vul naam in';
        return
    }  else{
        console.log('test');
        eersteScherm.classList.add('hide');
     
    }   
})


/* De functie haalt een random gegeven op tussen de 0 en 1, uit de bovenstaande arrays*/
function doeIetsWillekurigs(){
    var index = Math.floor(Math.random()*2);
    console.log(index)
    plantengroei.src = afbeeldingen[index];
}

/* Wanneer er op een knop gedrukt wordt, laat er een gifje.*/
function groeiPlant(parameter){
    plantengroei.src = "afbeelding/begin.gif"
    console.log(plantengroei)
};

waser.addEventListener("click", groeiPlant);



sun.addEventListener("click", groeiPlant);


moon.addEventListener('click', function(){
    plantengroei.src = "afbeelding/klein.gif";
    maantekst.classList.remove('maanteksthide');
    setTimeout(function () {
        maantekst.classList.add('maanteksthide');
      }, 2000);
    });
    






    

