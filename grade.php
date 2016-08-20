<?php
$field_name = $_POST['cf_name'];
$field_email = $_POST['cf_email'];
$field_grade = $_POST['cf_grade'];

$mail_to = 'peter.zheng88228@gmail.com';
$subject = 'Grades'.$field_name;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Grade: '.$field_grade;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
<script language="javascript" type="text/javascript">
    alert('I have received your exam score. Good job on finishing. \n Peter :)');
    window.location = 'exam.html';
</script>
<?php
}
else { ?>
<script language="javascript" type="text/javascript">
    alert('很抱歉！您的报名表出了问题，请直接联系我们的E－mail：peter.zheng88228@gmail.com 或在我们的微信公众号上联系我们！');
    window.location = 'contact.html';
</script>
<?php
}
?>
