#!/usr/bin/env bash
set -o errexit

# change to script's directory
cd "$(dirname "$0")"

# sourcing variable from config file
source ./config.file

# override config if there are any local config changes
if [ -f "./config.file.local" ]; then
  source ./config.file.local
fi

echo "=== run docker container from the $CDT_IMAGE_NAME image ==="
# -d: Detach docker container, let it run in background
# --name: Assign name to the container
# --mount: Mount filesystem from host to container.
# -w: Enforce working directory inside the container.
docker run -i --name $CDT_CONTAINER_NAME -d \
--mount type=bind,src="$(pwd)"/contracts,dst=/opt/eosio/bin/contracts \
--mount type=bind,src="$(pwd)"/scripts,dst=/opt/eosio/bin/scripts \
-w "/opt/eosio/bin" $CDT_IMAGE_NAME /bin/sh
