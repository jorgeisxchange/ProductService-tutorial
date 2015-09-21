#!/usr/bin/env bash

cd authserver;
mvn clean package docker:build
cd ..;

cd product;
mvn clean package docker:build
cd ..;

cd ui;
mvn clean package docker:build
cd ..;