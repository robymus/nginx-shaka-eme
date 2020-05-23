<?php
// check access based on cookie
// input parameters:
// X-Original-URI header contains the video id, eg: /hls/1234.mp4/encryption.key
// X-Real-IP header containes users ip address
// Should check cookies if authenticated

$uri = $_SERVER['HTTP_X_ORIGINAL_URI'];
$ip = $_SERVER['HTTP_X_REAL_IP'];
$cookie = $_COOKIE['video-1-auth'];  // should check cookie based on videoid, also only single use, hash, etc.

$auth = $cookie == 1;

http_response_code($auth ? 200 : 401);

