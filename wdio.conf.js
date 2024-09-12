export const config = {
  //  runner: 'local',
//    port: 4723,

    user: 'oauth-rafael501baldin-f5d49',
    key: '8aabdf37-0760-4af9-9bfe-438a61c90386',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',

    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [
    /*    {
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        'appium:deviceName': 'ebac',
        'appium:platformVersion': '9.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': `${process.cwd()}/app/ebacshop.apks`,
        'appium:appWaitActivity': '.MainActivity',
        'appium:disableIdLocatorAutocompletion': true
    }
    */
    {
        platformName: 'Android',
        'appium:app': 'storage:filename=ebacshop (2).aab', // The filename of the mobile app
        'appium:deviceName': 'Android GoogleAPI Emulator',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
        "appium:disableIdLocatorAutocompletion": true,
        'sauce:options': {
           build: 'appium-build-exmod',
           name: '<Exercício m17>',
           deviceOrientation: 'PORTRAIT',
           appiumVersion: '2.0.0'
         },
       }    
    ],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
            await driver.takeScreenshot();
    }
}
