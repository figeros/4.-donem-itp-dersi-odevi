

function moddegis(){ 
    var headline = document.getElementById("mod");
    var tema = document.querySelector("main");;
    if(headline.innerHTML == "Karanlık Mod")

	    headline.innerHTML = "Aydınlık Mod";
        
        else headline.innerHTML = "Karanlık Mod";
 
    tema.classList.toggle("karanlik");
}
