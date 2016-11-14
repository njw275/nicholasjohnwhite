$count = 0;
imagesa = ["Thailand.jpg","Kangaroo.JPG","Hussein.JPG","HK.JPG","Bball.PNG"];

myimages = ["GA.jpg","SYD.jpg","GC.JPG"];
$select = Math.floor(Math.random() * myimages.length);

$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutMe").offset().top-45
    }, 600);
});

$(document).ready(function() {
  $('#topPhoto').src = myimages[$select];
  
  if($count==imagesa.length){
    $count = 0;
  }
  $count = $count + 1;
  setTimeout(function(){
      $('#myPhoto').src = imagesa[$count];}, 5000);
});
