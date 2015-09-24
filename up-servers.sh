#!/usr/bin/env bash

clear;
echo "[BASH LOG - up-servers.sh][$(date)]: Script has started";

buildDirs=($(find . -maxdepth 1 -not -path '*/\.*' -type d -printf '%P\n'))

for dir in "${buildDirs[@]}"; do 
	cd $dir;
	echo "[BASH LOG - up-servers.sh][$(date)]: Building $dir...";
	mvn clean package docker:build;
	cd ..; 
done

echo "[BASH LOG - up-servers.sh][$(date)]: Running docker-compose to up the servers...";

docker-compose up;

echo "[BASH LOG - up-servers.sh][$(date)]: END of script";
echo "";
