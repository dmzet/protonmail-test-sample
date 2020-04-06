const master = require("../wdio.conf");

exports.config = Object.assign(master.config, {
  baseUrl: 'https://beta.protonmail.com/',  
  specs: ["./protonmail/test/*.*.js"],
  logLevel: 'error',
  reporters: ["spec"],
  maxInstances: 1,
  capabilities: [
    {
      "browserName": "firefox",
      "goog:chromeOptions": {
        "args": ["disable-infobars"]
      }
    }
  ],
});
