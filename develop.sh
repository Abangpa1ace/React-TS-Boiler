DEFAULT_TARGET=dev
TARGET=${1:-$DEFAULT_TARGET}

echo "TARGET_ENV: $TARGET"
webpack serve --env development