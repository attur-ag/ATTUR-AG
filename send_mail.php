<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_VALIDATE_EMAIL);
    $phone = trim($_POST["phone"]);
    $message = trim($_POST["message"]);

    if (!$email) {
        header("Location: contact.html?success=false&error=invalid_email");
        exit;
    }

    $recipient = "atturagchurch@gmail.com";
    $subject = "New Contact Form Submission from $name";

    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n\n";
    $email_content .= "Message:\n$message\n";

    $email_headers = "From: Attur AG Church <atturagchurch@gmail.com>\r\n";
    $email_headers .= "Reply-To: $email\r\n";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        header("Location: contact.html?success=true");
        exit;
    } else {
        header("Location: contact.html?success=false");
        exit;
    }
} else {
    header("Location: contact.html");
    exit;
}
?>