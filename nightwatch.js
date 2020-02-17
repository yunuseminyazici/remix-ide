'use strict'
require('@babel/register')()

module.exports = {
  'src_folders': ['test-browser/tests'],
  'output_folder': 'reports',
  'custom_commands_path': ['test-browser/commands'],
  'custom_assertions_path': '',
  'page_objects_path': '',
  'globals_path': '',

  'test_settings': {
    'default': {
      'selenium_port': 4444,
      'selenium_host': 'localhost',
      'globals': {
        'waitForConditionTimeout': 10000,
        'asyncHookTimeout': 100000
      },
      'screenshots': {
        'enabled': false,
        'path': ''
      },
      'desiredCapabilities': {
        'browserName': 'firefox',
        'javascriptEnabled': true,
        'acceptSslCerts': true
      }
    },

    'chrome': {
      'selenium_port': 9515,
      'selenium_host': 'localhost',
      "webdriver" : {
        "host": "localhost",
        "port": 9515
      },
      'desiredCapabilities': {
        'browserName': 'chrome',
        'javascriptEnabled': true,
        'acceptSslCerts': true,
        'chromeOptions': {
          'args': ['window-size=2560,1440', 'start-fullscreen']
        }
      }
    },

    'safari': {
      'desiredCapabilities': {
        'browserName': 'safari',
        'javascriptEnabled': true,
        'acceptSslCerts': true
      }
    },

    'ie': {
      'desiredCapabilities': {
        'browserName': 'internet explorer',
        'javascriptEnabled': true,
        'acceptSslCerts': true
      }
    },

    'firefox': {
      'desiredCapabilities': {
        'browserName': 'firefox',
        'javascriptEnabled': true,
        'acceptSslCerts': true
      }
    }
  }
}
