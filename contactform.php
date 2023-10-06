<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $service = $_POST['service'];
    $message = $_POST['project'];

    $mailTo = "brandon.bellick@gmail.com";
    $headers = "From: " . $mailFrom;
    $txt = "You have received an e-mail from " . $name . ".\n\n" . $message;

    if (mail($mailTo, $service, $txt, $headers)) {
        // Email sent successfully
        header("Location: index.php?mailsend=success");
    } else {
        // Email sending failed
        header("Location: index.php?mailsend=error");
    }
}
?>
