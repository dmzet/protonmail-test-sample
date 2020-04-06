const master = require("../wdio.conf");

exports.config = Object.assign(master.config, {
  baseUrl: 'https://beta.protonmail.com/',  
  specs: ["./protonmail/test/*.test.js"],
  logLevel: 'error',
  reporters: ["spec"],
  maxInstances: 1,
  services: ["browserstack"],
  capabilities: [
    {
      "project": `Protonmail example`,
      "browserstack.debug": true,
      "browser": "chrome",
      "goog:chromeOptions": {
        "args": ["disable-infobars"]
      },
      "resolution": '1280x1024',
      "os": "Windows",
      "os_version": "10",
      "browserstack.geoLocation": "CH",
      "browserstack.console": "errors",
      "browserstack.networkLogs": true
    }
  ],
  //browserstack credentials
  user: process.env.REMOTE_USER,
  key: process.env.REMOTE_PASSWORD,
});
