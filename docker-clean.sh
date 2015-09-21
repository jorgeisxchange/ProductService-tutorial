#!/usr/bin/env bash

echo "REMOVING CONTAINERS";
docker rm -v $(docker ps -a -q -f status=exited)

echo "REMOVING IMAGES";
docker rmi $(docker images -f "dangling=true" -q)


echo "CLEANING UP THE VOLUMES";
docker run -v /var/run/docker.sock:/var/run/docker.sock -v /var/lib/docker:/var/lib/docker --rm martin/docker-cleanup-volumes