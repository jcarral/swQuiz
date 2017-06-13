<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" type="" href="./static/css/main.css">
    <link rel="stylesheet" href="./static/fontAwesome/css/font-awesome.min.css">
</head>

<body>
    <header class="header">
        <div class="container header-container">
            <div class="header-title">
                <img src="./static/images/logo.png" width="48px" height="48px" alt="" class="header-logo" />
                <h1 class="header-title "><a href="./" class="title">Sistemas web: &nbsp;<strong>QUIZ</strong></a></h1>
            </div>
            <div class="header-btns">
                <div class="btn-login btn-header">SignIn</div>
                <div class="btn-register btn-header">SignUp</div>
            </div>
        </div>

    </header>
    <div class="container">
        <?php
          require_once(__DIR__ . $viewRoute);
         ?>
    </div>
    <footer class="footer">
        <a href="http://github.com/jcarral/swQuiz" class="fa fa-github"></a>
    </footer>

    <script src="./static/script/bundle.js"></script>
</body>

</html>
