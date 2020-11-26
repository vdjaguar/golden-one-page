<?php
        $email   = $_POST["email"];
        $to      = "vdjaguar@gmail.com";
        $sub     = "Форма подписки";
        $message = "Email подписки: $email";
        mail ($to,$sub,$message,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email");