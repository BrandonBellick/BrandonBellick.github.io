<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $service = $_POST['service'];
    $message = $_POST['project'];

    // Create a string with the form data
    $form_data = "Name: " . $name . "\n";
    $form_data .= "Email: " . $mailFrom . "\n";
    $form_data .= "Service: " . $service . "\n";
    $form_data .= "Project Description:\n" . $message . "\n\n";

    // Define the file where you want to save the form submissions
    $file_path = "form_submissions.txt";

    // Open the file for writing (append mode)
    $file = fopen($file_path, "a");

    // Check if the file was opened successfully
    if ($file) {
        // Write the form data to the file
        fwrite($file, $form_data);

        // Close the file
        fclose($file);

        // Redirect the user to a thank-you page or wherever you'd like
        header("Location: index.php?mailsend=success");
        exit;
    } else {
        // Handle the case where the file couldn't be opened (e.g., display an error message)
        header("Location: index.php?mailsend=error");
        exit;
    }
}
?>
