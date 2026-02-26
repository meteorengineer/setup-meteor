import * as core from '@actions/core';
import { which } from '@actions/io';
import { execSync as exec } from 'child_process';

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