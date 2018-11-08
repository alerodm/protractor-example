function buildChromeArgs() {
  const baseArgs = ['disable-infobars=true'];
  const headlessArgs = ['--headless', '--no-sandbox', '--disable-extensions', '--disable-dev-shm-usage'];

  return process.env.HEADLESS === 'true' ? [...baseArgs, ...headlessArgs] : baseArgs;
}

module.exports = {
  browserName: process.env.browserName || 'chrome',
  shardTestFiles: true,
  maxInstances: 2,
  chromeOptions: {
    args: buildChromeArgs(),
  },
};
