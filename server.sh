#!/bin/sh
# IMAGE=nytimes/nginx-vod-module:1.4.2
# IMAGE=robymus/nginx-vod-njs:1.17.10
IMAGE=robymus/nginx-vod-auth:1.17.10
docker run -p 443:443 \
	-v $PWD/video:/opt/video \
	-v $PWD/html:/opt/html \
	-v $PWD/nginx.conf:/usr/local/nginx/conf/nginx.conf \
	-v $PWD/dhparam.pem:/usr/local/nginx/conf/dhparam.pem \
	-v /etc/letsencrypt/live/localhost.r2.io:/ssl \
	${IMAGE}

