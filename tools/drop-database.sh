#!/bin/bash

if [ "$#" -lt 1 ]; then
  echo "Usage: $0 <database>"
  exit -1
fi

DATABASE=$1
TOOLS_DIR="$(dirname ""$0"")"

mongo --host localhost $DATABASE $TOOLS_DIR/drop-database.js
