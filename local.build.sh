#!/bin/bash

DIR=`pwd`
vAPI="v0.1"
echo "Starting local proxy: $DIR"
API_ADDR=`ifconfig | sed -En 's/127.0.0.1//;s/.*inet (addr:)?(([0-9]*\.){3}[0-9]*).*/\2/p' | tail -1`
echo "API address: $API_ADDR"
rm -R $DIR/dist
mkdir $DIR/dist

echo "Kill previous gulp watcher if exists"
killall gulp

#echo "Test UI"
#gulp test
#status=$?
#if [ $status -ne 0 ]; then
#    echo "UI tests has not passed"
#    exit
#fi

echo "Build UI app and watch for changes"
gulp build-watch &
mkdir $DIR/nginx-local/build
cp -f $DIR/nginx-local/mime.types $DIR/nginx-local/build/mime.types
echo "Create local config"
sed -e "s;API_ADDR;${API_ADDR};g;s;API_VER;${vAPI};g" $DIR/nginx-local/nginx.conf.template > $DIR/nginx-local/build/nginx.conf
echo "Create kubetrack build config with API host 'workloads'"
sed -e "s;API_ADDR;workloads;g;s;API_VER;${vAPI};g" $DIR/nginx-local/nginx.conf.template > $DIR/nginx-conf/nginx.conf
echo "Starting local docker"
docker run --rm -it -p 7272:7272 -v $DIR/nginx-local/build:/etc/nginx:ro -v $DIR/dist:/www/mvp:ro --name dashboard_ct nginx
