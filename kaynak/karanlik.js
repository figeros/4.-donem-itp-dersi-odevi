    function modyukle() {
    var btn = document.querySelector(".b_header2");
    btn.addEventListener("click", moddegis);

    var eskitema = localStorage.getItem("mtema");
    var yazi = document.getElementById("mod");
    var tema = document.querySelector("body");

    if(eskitema == "Karanlık Mod"){
       tema.classList.toggle("karanlik");
        yazi.innerHTML = "Aydınlık Mod";
    }
        
    

    function moddegis(){ 
        
        if(yazi.innerHTML == "Karanlık Mod"){

            localStorage.setItem("mtema", yazi.innerHTML);
	        yazi.innerHTML = "Aydınlık Mod"; }

        else {
            localStorage.setItem("mtema", yazi.innerHTML);
            yazi.innerHTML = "Karanlık Mod";
                    
        }
 
        tema.classList.toggle("karanlik");
    }
}