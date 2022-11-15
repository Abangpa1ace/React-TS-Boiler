DEFAULT_TARGET=dev
TARGET=${1:-$DEFAULT_TARGET}

echo "TARGET_ENV: $TARGET"

webpack-dev-server --config webpack.config.js --env $TARGET