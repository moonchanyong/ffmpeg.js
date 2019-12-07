const resolveURL = require('resolve-url');
const { version, dependencies } = require('../../../package.json');
const defaultOptions = require('../../constants/defaultOptions');

/*
 * Default options for browser worker
 */
module.exports = {
  ...defaultOptions,
  workerPath: `https://unpkg.com/@ffmpeg/ffmpeg@v${version}/dist/worker.min.js`,
  corePath: `https://unpkg.com/@ffmpeg/core@v${dependencies['@ffmpeg/core'].substring(1)}/ffmpeg-core.js`,
  workerBlobURL: true,
};
