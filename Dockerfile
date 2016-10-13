FROM nginx:1.11

RUN apt-get update \
	&& apt-get -y install curl \
	&& curl -sL https://deb.nodesource.com/setup | bash - \
	&& apt-get -y install nodejs \
	&& npm install -g gulp-cli

ADD . /tmp/mvp

RUN cd /tmp/mvp \
    && rm -r node_modules \
    && rm -r dist \
	&& npm install \
	&& gulp build \
	&& mkdir -p /www/mvp \
	&& cp -R dist/* /www/mvp \
	&& rm -rf /tmp/mvp

COPY nginx-conf/nginx.conf /etc/nginx/nginx.conf
COPY nginx-conf/mime.types /etc/nginx/

EXPOSE 7272