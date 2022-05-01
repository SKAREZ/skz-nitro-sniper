PACKAGE_VERSION=$(node -p -e "try { require('./package.json').version } catch { '0.0.0' }")
LATEST_VERSION=$(curl --silent "https://raw.githubusercontent.com/skarez/skz-nitro-sniper/main/package.json" | grep '"version":' | sed -E 's/.*"([^"]+)".*/\1/')

function compareVersions {
   echo "$@" | awk -F. '{ printf("%d%03d%03d%03d\n", $1,$2,$3,$4); }';
}

function installAll() {
  echo "$(tput setaf 6)Installing packages..."
  install-pkg "http://archive.ubuntu.com/ubuntu/pool/main/g/glib2.0/libglib2.0-0_2.56.4-0ubuntu0.18.04.8_amd64.deb" &> /dev/null
  echo "$(tput setaf 2)Packages installed."
  echo "$(tput setaf 6)Cloning the latest version..."
  git reset --hard HEAD
  git pull
  echo "$(tput setaf 2)Latest version cloned."
  echo "$(tput setaf 6)Installing dependencies..."
  npm install &> /dev/null
  echo "$(tput setaf 2)Dependencies installed."
  echo "$(tput setaf 2)Starting SKZ..."
  npx node ./src/index.js
}

rm -rf settings.env
if [ $(compareVersions $PACKAGE_VERSION) -eq $(compareVersions $LATEST_VERSION) ] && [ -d "node_modules" ] && [ -d "node_modules/discord.js" ]; then
  npx node ./src/index.js
else
  installAll
fi