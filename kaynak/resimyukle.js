function resimyukle(id) {

  var secici_adres = "http://localhost/kaynak/resim_secici.php";

  var imgid = id;
 
  fetch(secici_adres + "?kisaad=" + imgid)
      .then(checkStatus)
      .then(yaziayir)
      .then(gorselgoster)
      .catch(console.log);
      
}

function yaziayir(yazi) {
    return yazi.split("\n");
}

function gorselgoster(rsmler) {
  var i;
  var imgler = document.querySelectorAll("img");

  for (i = 0; i < rsmler.length-1; i++) {    
    let adres = "http://localhost/kaynak/" + rsmler[i];
    imgler[i].src = adres;
  }
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300 || response.status == 0) {
    return response.text();
  } else {
    return Promise.reject(new Error(response.status + ": " + response.statusText));
  }
}
