

function moddegis(){ 
    var yazi = document.getElementById("mod");
    var tema = document.querySelector("body");;
    if(yazi.innerHTML == "Karanlık Mod")

	    yazi.innerHTML = "Aydınlık Mod";
        
        else yazi.innerHTML = "Karanlık Mod";
 
    tema.classList.toggle("karanlik");
}
// sayfalar arası geçişte karanlık mod korunmuyor