<?php
$field_name = $_POST['pname'];
$field_age = $_POST['page'];
$field_email = $_POST['pemail'];
$field_phone = $_POST['pphone'];
$field_message = $_POST['pmsg'];

$mail_to = 'peter.zheng88228@gmail.com';
$subject = 'IT 少年宫报名表'.$field_name;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'Age: '.$field_age."\n";
$body_message .= 'Phone #: '.$field_phone."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Message: '.$field_message;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('感谢您的报名表，我们会在12小时内与您联系！');
		window.location = 'contact.html';
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