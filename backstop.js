const test1 = require("./test1");
const test2 = require("./test2");

const config = {
  id: "backstop_default",
  viewports: [
    {
      label: "phone",
      width: 320,
      height: 480
    },
    {
      label: "tablet",
      width: 1024,
      height: 768
    }
  ],
  onBeforeScript: "puppet/onBefore.js",
  onReadyScript: "puppet/onReady.js",
  scenarios: [],
  paths: {
    bitmaps_reference: "test/backstop/bitmaps_reference",
    bitmaps_test: "test/backstop/bitmaps_test",
    engine_scripts: "test/backstop/engine_scripts",
    html_report: "test/backstop/html_report",
    ci_report: "test/backstop/ci_report"
  },
  report: ["browser"],
  engine: "puppeteer",
  engineOptions: {
    args: ["--no-sandbox"]
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: true,
  debugWindow: false
};

config.scenarios = [...test1.scenarios, ...test2.scenarios];

module.exports = config;
