<?php

 // email address verification
  function isEmail($email) {
	 return filter_var($email, FILTER_VALIDATE_EMAIL);
  }

  if($_POST) {

    $emailTo = 'krystian.bialy@onet.pl';

    $clientEmail = addslashes(trim($_POST['email']));
    $subject = addslashes(trim($_POST['subject']));
    $message = addslashes(trim($_POST['message']));

    $array = array('emailMessage' => '', 'subjectMessage' => '', 'messageMessage' => '');

      if(!isEmail($clientEmail)) {
        $array['emailMessage'] = 'Invalid email!';
      }
      if($subject == '') {
        $array['subjectMessage'] = 'Empty subject!';
      }
      if($message == '') {
        $array['messageMessage'] = 'Empty message!';
      }
      if(isEmail($clientEmail) && $subject != '' && $message != '') {
        // send email
		  $headers = 'From: ' . $clientEmail . "\r\n" . "Content-Type: text/html; charset=utf-8\r\n";
		  mail($emailTo, $subject, $message, $headers);
		}
    echo json_encode($array);

  }

?>
