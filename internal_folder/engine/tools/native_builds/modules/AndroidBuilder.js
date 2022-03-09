const os = require('os');
const execSync = require('child_process').execSync;
const AndroidBuildVariant = require('../AndroidBuildVariants');

class AndroidBuilder {
  constructor() {
    this._repoDir = `${__dirname}/../../../../..`;
    this._engineAndroidDir = `${this._repoDir}/internal_folder/engine/android`;
  }

  build(buildType) {
    const {config} = AndroidBuildVariant[buildType];
    const _i = os.platform() === 'darwin' ? `-i ''` : `-i`;
    console.log(`Platform: ${os.platform()}`);
    execSync(`sed ${_i} -e 's@"node_modules/react-native/local-cli/cli.js"@"../../node_modules/react-native/local-cli/cli.js"@' ${__dirname}/../../../../../node_modules/react-native/react.gradle`);

    execSync(`internal_folder/engine/android/gradlew \
      -Duser.dir=${__dirname}/../../../../../internal_folder/engine/android \
      app:assemble${config} \
      -DVERSION_CODE=1 \
      -DVERSION_NAME=999.999.999 \
    `, {stdio: 'inherit'});
    const destinationDir = `${this._repoDir}/internal_folder/engine/app_builds/android/${buildType}`;
    execSync(`rm -rf ${destinationDir} && mkdir -p ${destinationDir}`);
    const app = `${this._engineAndroidDir}/app/build/outputs/apk/${config}/app-${config}.apk`;
    const destinationApp = `${destinationDir}/engine.apk`;
    execSync(`cp -a ${app} ${destinationApp}`);
  }
}

module.exports = {
  AndroidBuilder
};
