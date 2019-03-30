PROJECT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"
export ANDROID_HOME=/Users/viseo/Library/Android/sdk
export PATH=$PATH:~/.npm-global/bin/
export PATH=$PATH:${PROJECT_DIR}/node_modules/.bin
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools

cd $PROJECT_DIR
npm install
react-native run-android

react-native log-android