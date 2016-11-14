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
  
  
  if($count==imagesa.length){
    $count = 0;
  }
  $('#me').src = imagesa[$count];
  $count++;
  setTimeout(function(){
      $('#topPhoto').src = myimages[$select];}, 5000);


});
