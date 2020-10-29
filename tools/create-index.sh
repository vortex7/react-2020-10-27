#!/bin/bash

TOOLS_DIR="$(dirname ""$0"")"

if ! [ -d "$TOOLS_DIR/create-index/node_modules" ]; then
  cd $TOOLS_DIR/create-index
  npm install
  cd -
fi

if [ "$#" -lt 3 ]; then
  echo "Usage: $0 <database> <collection> '<field1>,<field2>'"
  exit -1
fi

DATABASE=$1
COLLECTON=$2
FIELDS=$3

echo $DATABASE
echo $COLLECTION
echo $FIELDS

TOOLS_DIR="$(dirname ""$0"")"

node $TOOLS_DIR/create-index/index.js $DATABASE $COLLECTION $FIELDS
