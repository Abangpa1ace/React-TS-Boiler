DEFAULT_TARGET=dev
TARGET=${1:-$DEFAULT_TARGET}

RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color
BOLD=$(tput bold)
NORMAL=$(tput sgr0)

if [[ $TARGET != dev0[1-2] && $TARGET != dev && $TARGET != test0[1-2] && $TARGET != test ]]; then
  echo "\n$RED$BOLD$TARGET$NORMAL is invalid TARGET_ENV value.\n"
else
  echo "\nTARGET_ENV -$BLUE$BOLD $TARGET\n"
  TARGET_ENV=$TARGET NODE_ENV=development webpack-dev-server --progress --config ./config/webpack.dev.config.js
fi