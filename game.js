/*
super hero logo:https://www.istockphoto.com/nl/vector/bright-superhero-symbol-gm584768692-100163877
bij:https://freepngimg.com/png/149972-honey-flying-vector-bee-free-hq-image
zaadje: zelf
zon:https://www.pngmart.com/image/300811
waterdruppel: zelf
maan:https://favpng.com/png_view/clip-art-full-moon-image-illustration-png/KauNDvaP
alle overige afbeeldingen zijn zelf gemaakt


Extra funties:
time out functie geleerd van Tessa Heijnen
to do list:https://codepen.io/uxmankabir/pen/bGLKXKN
*/



/*Hiermij word getest of de javascript het doet in de browser*/
console.log ("werkt het");
console.log ("plantengroei");
console.log ("waser")

/*Hiermee roep je elementen op uit html*/
var plantengroei = document.querySelector(".kleinePlant");
var waser = document.querySelector(".waser");
var backgroundI = document.querySelector("body")
var afbeeldingen = ['afbeelding/bliksumgoed.png', 'afbeelding/supergoed.png']
subButton.addEventListener('click', getUserName, false); 
var knop = document.querySelector('.knop');
var eersteScherm = document.querySelector('#nameForm');
var knup = document.querySelector(".knup");
var welkom = document.querySelector(".welkom");
var sun = document.querySelector(".sun");
var moon = document.querySelector(".moon");
var maantekst= document.querySelector(".maantekst");

var bijen = document.querySelector(".bijen");
var bijgroei = document.querySelector(".kleinePlant");

var maan = document.querySelector(".moon");
var maangroei = document.querySelector(".kleinePlant");

var bee = document.querySelector(".bee");
var honinggroei = document.querySelector(".kleinePlant");


var zon = document.querySelector(".sun");
var zongroei = document.querySelector(".kleinePlant");

var water = document.querySelector(".waser")
var watergroei = document.querySelector(".kleinePlant");

var seed = document.querySelector(".seed");
var zaadgroei = document.querySelector(".kleinePlant");

var todo = document.querySelector(".checkbox-container")



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
        seed.classList.remove('hide');
        bijen.classList.remove('hide');
        todo.classList.remove('hide');
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


/*code toevoegen aan moon, hij doet 3 dingen. 1. als je op moon klikt veranderd de afbeelding. 2. maantekst
wordt nu zichtbaar. 3. time-out ingesteld die na 5sec weer weg gaat */
moon.addEventListener('click', function maanGroei(){
    maangroei.src = "afbeelding/start.png";
    maantekst.classList.remove('maanteksthide');
    setTimeout(function () {
        maantekst.classList.add('maanteksthide');
      }, 5000);
    });


/* de afbeelding wordt verander en de addEventListener zorgt ervoor dat de actie wordt uitgevoerd*/
function zonGroei(parameter){
    zongroei.src = "afbeelding/zongoed.png"
    
    console.log(plantengroei)
};

sun.addEventListener("click", zonGroei);




/* de afbeelding wordt verander en de addEventListener zorgt ervoor dat de actie wordt uitgevoerd*/
function waterGroei(parameter){
    watergroei.src = "afbeelding/watergoed.png"
 
};

waser.addEventListener("click", waterGroei);



/* de afbeelding wordt verander en de addEventListener zorgt ervoor dat de actie wordt uitgevoerd*/
function zaadGroei(parameter){
    zaadgroei.src = "afbeelding/zaadgoed.png"
    console.log(zaadgroei)
   /* probeer.classList.add("strike")*/
};

seed.addEventListener("click", zaadGroei);



/* de afbeelding wordt verander en de addEventListener zorgt ervoor dat de actie wordt uitgevoerd*/
function bijGroei(parameter){
    bijgroei.src = "afbeelding/bij.gif"
    bijgroei.src = "afbeelding/vollebloem.png"
    console.log(bijgroei)
    document.getElementById("bijenTekst").innerHTML = "De plant is klaar!";
};


bijen.addEventListener("click", bijGroei);




/*selecteert alle checkboxes op de pagina door middel van een querySelectorAll en voegt vervolgens 
een event listener toe aan elke checkbox die bij het "click" event een callbackfunctie genaamd 
"checkboxHandler" uitvoert.De "checkboxHandler" functie controleert of de checkbox is aangevinkt en 
voegt vervolgens de klasse "checked" toe aan de ouderdiv (".checkbox-group") van de aangevinkte checkbox.
Als de checkbox niet is aangevinkt, wordt de klasse "checked" van de ouderdiv verwijderd.
*/

let checkboxes = document.querySelectorAll("input[type='checkbox']");
checkboxes.forEach(function (checkbox) {
	checkbox.addEventListener("click", checkboxHandler);
});
function checkboxHandler() {
	if (this.checked === true) {
		this.closest(".checkbox-group").classList.add("checked");
	} else {
		this.closest(".checkbox-group").classList.remove("checked");
	}
}







    

