$count = 0;
imagesa = ["Thailand.jpg","Kangaroo.JPG","Hussein.JPG","HK.JPG","Bball.PNG"];

myimages = ["GA.jpg","SYD.jpg","GC.JPG"];
$select = Math.floor(Math.random() * myimages.length);

$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutMe").offset().top-45
    }, 2000);
});

$(document).ready(function() {
  $('#topPhoto').src = myimages[$select];
  
  if($count==$images.length){
    $count = 0;
  }
  $(document).images[1].src = imagesa[$count];
  $count++;
  setTimeout(function(), 5000);


});
