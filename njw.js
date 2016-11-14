window.onload = slides;

var count = 0;
var imagesa = ["Thailand.jpg","Kangaroo.JPG","Hussein.JPG","HK.JPG","Bball.PNG"];

var myimages = ["GA.jpg","SYD.jpg","GC.JPG"];
var select = Math.floor(Math.random() * myimages.length);

function slides() {
  document.getElementById("topPhoto").src = myimages[select];
  
  if (count==imagesa.length){
    count = 0;
  }
  document.images[1].src = imagesa[count];
  count++;
  setTimeout(slides, 5000);
}



window.addEventListener("hashchange", function() { scrollBy(0, -45) })
