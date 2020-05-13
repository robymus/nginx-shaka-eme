// myapp.js

var manifestUri =
    'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';

let logger;
let player;
let videp;

function log(str, data=null) {
  if (data == null) {
    console.log(str);
    logger.append(str+"\n");
  }
  else {
    console.log(str, data);
    logger.append(str+"\n");
    logger.append("-> "+JSON.stringify(data)+"\n");
  }
}

function initApp() {
  video = document.getElementById('video');  
  logger = document.getElementById('log');

  // Install built-in polyfills to patch browser incompatibilities.
  shaka.polyfill.installAll();

  // Check to see if the browser supports the basic APIs Shaka needs.
  if (shaka.Player.isBrowserSupported()) {
    // Everything looks good!
    // Create a Player instance.
    player = new shaka.Player(video);

    // Listen for error events.
    player.addEventListener('error', onErrorEvent);
    log("player ready");
  } else {
    // This browser does not have the minimum set of APIs we need.
    log('Browser not supported!');
  }
}

function playVideo(manifestUri) {
  // Try to load a manifest.
  // This is an asynchronous process.
  player.load(manifestUri).then(function() {
    // This runs if the asynchronous load is successful.
    log('The video has now been loaded!');
  }).catch(onError);  // onError is executed if the asynchronous load fails.
}

function onErrorEvent(event) {
  // Extract the shaka.util.Error object from the event.
  log("errorEvent", event.detail);
}

function onError(error) {
  // Log the error.
  log('onError: '+error.code, error);
}

document.addEventListener('DOMContentLoaded', initApp);

function playTestHLS(videoFile) {
  // this just constructs a test manifest
  const url = 'https://localhost.r2.io/hls/'+videoFile+'/master.m3u8';
  log("Playing HLS: "+url);
  playVideo(url);
}

function playTestDASH(videoFile) {
  // this just constructs a test manifest
  const url = 'https://localhost.r2.io/dash/'+videoFile+'/manifest.mpd';
  log("Playing DASH: "+url);
  /*
  player.configure({ 
    drm: { 
      servers: { 
        'org.w3.clearkey': 'https://r2.io/tmp/dash_clear_key.php' 
      } 
    } 
  });
  */
  player.configure({
    drm: {
      clearKeys: {
        // 'key-id-in-hex': 'key-in-hex',
        '0123456789abcdef0123456789abcdef': 'e890d7c082e819c66e60328634f89780',
      }
    }
  });  
  playVideo(url);
}
