
var slider = document.getElementById('imprestion');

function star1() {
   slider.style.marginLeft='0px';
   document.getElementById('star1').style.filter='none';
   document.getElementById('star2').style.filter='grayscale(1)';
   document.getElementById('star3').style.filter='grayscale(1)';
   document.getElementById('star4').style.filter='grayscale(1)';
   document.getElementById('star5').style.filter='grayscale(1)';
   document.getElementById('msg').innerHTML='I dont like';
}
function star2() {
   slider.style.marginLeft='-150px';
   document.getElementById('star1').style.filter='none';
   document.getElementById('star2').style.filter='none';
   document.getElementById('star3').style.filter='grayscale(1)';
   document.getElementById('star4').style.filter='grayscale(1)';
   document.getElementById('star5').style.filter='grayscale(1)';
   document.getElementById('msg').innerHTML='Good';
}
function star3() {
   slider.style.marginLeft='-300px';
   document.getElementById('star1').style.filter='none';
   document.getElementById('star2').style.filter='none';
   document.getElementById('star3').style.filter='none';
   document.getElementById('star4').style.filter='grayscale(1)';
   document.getElementById('star5').style.filter='grayscale(1)';
   document.getElementById('msg').innerHTML='Very Good';
}
function star4() {
   slider.style.marginLeft='-450px';
   document.getElementById('star1').style.filter='none';
   document.getElementById('star2').style.filter='none';
   document.getElementById('star3').style.filter='none';
   document.getElementById('star4').style.filter='none';
   document.getElementById('star5').style.filter='grayscale(1)';
   document.getElementById('msg').innerHTML='Nice';
}
function star5() {
   slider.style.marginLeft='-600px';
   document.getElementById('star1').style.filter='none';
   document.getElementById('star2').style.filter='none';
   document.getElementById('star3').style.filter='none';
   document.getElementById('star4').style.filter='none';
   document.getElementById('star5').style.filter='none';
   document.getElementById('msg').innerHTML='Excellent';
}
