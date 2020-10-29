#!/bin/bash

if [ "$#" -lt 3 ]; then
  echo "Usage: $0 <service> <collection> <file>"
  exit -1
fi

SERVICE=$1
COLLECTION=$2
FILE=$3

if [ ! -d "$FILE" ]; then
  echo "$FILE not found"
  exit -1
fi

echo $COLLECTION
curl --silent -X POST -H 'accept: application/json' -H 'content-type: application/json' --data-binary "@$FILE" http://$HOSTNAME/$SERVICE/create/$COLLECTION > /dev/null

