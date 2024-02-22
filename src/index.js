const core = require('@actions/core');
const { which } = require('@actions/io');
const { execSync: exec } = require('child_process');

(async () => {
  try {
    const meteorRelease = core.getInput('meteor-release');
    if (process.platform === 'win32') {
      exec(`"${await which('choco')}" install meteor`)
      core.addPath(exec('echo %LocalAppData%\\.meteor').toString().replace(/[\n\r]/g, ''));
    } else {
      exec(`curl https://install.meteor.com/${meteorRelease ? `?release=${meteorRelease}` : ''} | sh`);
    }
  } catch (err) {
    core.setFailed(err.message);
  }
})();