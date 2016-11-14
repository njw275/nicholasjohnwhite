window.onload = headers;
window.onload = slides;

function headers() {
  var images = ["GA.jpg","SYD.jpg","GC.JPG"];
  var select = Math.floor(Math.random() * images.length);
  
  document.getElementById("topPhoto").src = images[select];
}

var count = 0;
var imagesa = ["Thailand.jpg","Kangaroo.JPG","Hussein.JPG","HK.JPG","Bball.PNG"];
function slides() {
  if (count==imagesa.length){
    count = 0;
  }
  document.images[1].src = imagesa[count];
  count++;
  setTimeout(slides, 5000);
}



window.addEventListener("hashchange", function() { scrollBy(0, -50) })
