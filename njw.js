$count = 0;
imagesa = ["Thailand.jpg","Kangaroo.JPG","Hussein.JPG","HK.JPG","Bball.PNG"];

myimages = ["GA.jpg","SYD.jpg","GC.JPG"];
$select = Math.floor(Math.random() * myimages.length);

$("#toAM").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutMe").offset().top-45
    }, 600);
});

$("#toProj").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top-45
    }, 600);
});

$(document).ready(function() {
    $('#topPhoto').attr("src", myimages[$select]);
    function slides(){
        if($count==imagesa.length){
            $count = 0;
        }
        $count = $count + 1;
        $('#myPhoto').attr("src",imagesa[$count]);
        setTimeout(slides, 5000);
    };
    slides();
});
