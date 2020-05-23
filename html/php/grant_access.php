<?php
// this will drop a cookie for the user, so check_access can check it and do something accordingly
// this is just a placeholder for testing, it should do some checking for authentication before
// used for encrypted HLS playback, to protect the encryption key

setcookie('video-1-auth', '1', time()+60);
?>
