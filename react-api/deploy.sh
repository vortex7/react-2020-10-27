#!/bin/bash
date

echo "undeploying ..."
./undeploy.sh

echo "building ..."
./build.sh

pm2 start
pm2 save