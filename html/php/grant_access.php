<?php
// this will drop a cookie for the user, so check_access can check it and do something accordingly
// this is just a placeholder for testing, it should do some checking for authentication before
// used for encrypted HLS playback, to protect the encryption key

// input parameters:
// X-Original-URI header contains the original uri
// X-Real-IP header containes users ip address

$uri = $_SERVER['HTTP_X_ORIGINAL_URI'];
$ip = $_SERVER['HTTP_X_REAL_IP'];

setcookie('video-1-auth', '1', time()+60);
?>
