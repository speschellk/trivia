<?php

/* Configuration */
$subject = 'Submission received'; // Set email subject line here
$mailto  = 'your email address'; // Email address to send form submission to
/* END Configuration */

$Name       = $_POST['Name'];
$email          = $_POST['email'];
$timestamp = date("F jS Y, h:iA.", time());

// HTML for email to send submission details
$body = "
<br>
<p>The following information was submitted through the contact form on your website:</p>
<p><b>Name</b>: $Name<br>
<b>Email</b>: $email<br>
<p>This form was submitted on <b>$timestamp</b></p>
";

// Success Message
$success = "
<div class=\"row-fluid\">
    <div class=\"span12\">
        <h3>Submission successful</h3>
        <p>Thanks for your message!</strong>.</p>
    </div>
</div>
";

$headers = "From: $firstName $lastName <$email> \r\n";
$headers .= "Reply-To: $email \r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$message = "<html><body>$body</body></html>";

if (mail($mailto, $subject, $message, $headers)) {
    echo "$success"; // success
} else {
    echo 'Form submission failed. Please try again...'; // failure
}

?>