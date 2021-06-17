<?php
//çok orijinal bir php dosyası
$gorselyeri = "gorsel/";

if (isset($_GET["kisaad"])) {
  $gorselyeri .= $_GET["kisaad"];
}

$gorselyeri .= "*.png";
gorselal($gorselyeri);


function gorselal($gorselyeri) {
  $cikti = glob($gorselyeri);
  header("Content-Type: text/plain");
  if (count($cikti) === 0) {
    echo "Girdiğiniz isme sahip bir görsel bulunamadı.";
  } else {
    foreach ($cikti as $gorsel) {
      echo "{$gorsel}\n";
    }
  }
}
?>