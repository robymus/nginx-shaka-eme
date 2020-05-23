# Encoded DASH/HLS without DRM (with clear keys)

Just a sandbox effort to try setting up encoded video playback using DASH and HLS with minimal protection of the encoding keys.

More info in my blogposts: [Part 1](https://blog.r2.io/2020/05/23/encoded-hls-dash-2.html), [Part 2](https://blog.r2.io/2020/05/13/encoded-hls-dash-1.html).

# How to run it?

The `server.sh` script launches a preconfigured nginx instance. To actually use it, you should make a few changes first:
- provide some mp4 files in the `video` directory
- change the file names in the test player (`html/index.html`, `html/player.js`)
- provide some https certificates (see `server.sh` - mount in /ssl)
- now the php authentication prototype files (in `html/php`) are not run through this nginx instance (it doesn't support php), but routed through my hosted server, you have to provide a way to run these files and change `nginx.conf` accordingly (look for r2.io/tmp)
