window.onload = slides;

function slides() {
  var images = ["GA.jpg","SYD.jpg","GC.JPG"];
  var select = Math.floor(Math.random() * images.length);
  
  document.getElementById("topPhoto").src = images[select];
}

window.addEventListener("hashchange", function() { scrollBy(0, -50) })
