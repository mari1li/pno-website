<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];

    // Configure your email settings
    $to = "linh.truongngocmy@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $message = "Name: $name\nPhone: $phone\nEmail: $email";

    // Send the email
    mail($to, $subject, $message);

    // You can add additional logic here, like redirecting to a thank you page
    // header("Location: thank-you.html");
    exit();
}
?>
