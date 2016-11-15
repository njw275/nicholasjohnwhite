<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="main.css">
    <title>Nicholas White</title>

  </head>
  <body>
    <nav>
      <a href="/" style="float: left;">Nicholas White</a>
      <a href=#aboutMe id="button">About Me</a>
      <a href="MyCV.pdf">My CV</a>
      <a href="contact.html">Contact</a>
    </nav>

    <?php

    $name = $_POST["name"];
    $email = $_POST["email"];
    $msg = $_POST["comment"];
    print("Thank you ".$name." for your comment! If you had any questions or concerns look for a response in your inbox! It will be mailed to ".$email.". Have a good day!");
    mail("njw275@nyu.edu","Comment from nicholasjohnwhite.com",$msg);

    ?>

  </body>
</html>
