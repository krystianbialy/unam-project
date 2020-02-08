<?php include 'send-grid-api-key.php'; ?>

<?php
header("Access-Control-Allow-Origin: https://unam-project.netlify.com");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Authorization, Origin, X-Requested-With, Content-Type, Accept");

// email address verification
function isEmail($email)
{
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

if ($_POST)
{

    $emailTo = 'krystian.bialy@onet.pl';

    $clientEmail = addslashes(trim($_POST['email']));
    $subject = addslashes(trim($_POST['subject']));
    $message = addslashes(trim($_POST['message']));

    $array = array(
        'emailMessage' => '',
        'subjectMessage' => '',
        'messageMessage' => ''
    );

    if (!isEmail($clientEmail))
    {
        $array['emailMessage'] = 'Invalid email!';
    }
    if ($subject == '')
    {
        $array['subjectMessage'] = 'Empty subject!';
    }
    if ($message == '')
    {
        $array['messageMessage'] = 'Empty message!';
    }
    if (isEmail($clientEmail) && $subject != '' && $message != '')
    {
        // send email
        $headers = array(
            'Authorization:' . $secretKey,
            'Content-Type: application/json'
        );

        $data = array(
            "personalizations" => array(
                array(
                    "to" => array(
                        "email" => $emailTo
                    )
                )
            ) ,
            "from" => array(
                "email" => $clientEmail
            ) ,
            "subject" => $subject,
            "content" => array(
                array(
                    "value" => $message
                )
            )
        );

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://api.sendgrid.com/v3/mail/send");
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $response = curl_exec($ch);
        curl_close($ch);

        echo $response;
    }
    echo json_encode($array);

}

?>
