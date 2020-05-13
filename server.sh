#!/bin/sh
IMAGE=nytimes/nginx-vod-module:1.4.2
docker run -p 443:443 \
	-v $PWD/video:/opt/video \
	-v $PWD/html:/opt/html \
	-v $PWD/nginx.conf:/usr/local/nginx/conf/nginx.conf \
	-v $PWD/dhparam.pem:/usr/local/nginx/conf/dhparam.pem \
	-v /etc/letsencrypt/live/localhost.r2.io:/ssl \
	${IMAGE}

