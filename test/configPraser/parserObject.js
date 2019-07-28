import assert from "assert"
import chai from "chai"
import configConvertor from "../../src/configParser/configConvertor"
import ParamterInject from "../../src/configParser/paramterInjector"
import ConfigParser from "../../src/configParser/parserObject"

const expect = chai.expect
const defaultParse = [
  {
    key: "data",
    name: "parameter inject",
    condition: true,
    parse: ParamterInject
  },
  {
    key: "data",
    name: "config Convertor",
    condition: (config, options) => !options.isRaw,
    parse: (config, options) => configConvertor.getObject(config.data, config.type)
  },
]

describe('ConfigParser', function () {
  describe('#parseConfig', function () {

    beforeEach(function () {
      this.newConfig = new ConfigParser(defaultParse)
    })

    it('should parse config  ', function () {
      const config = {
        data: "{\"serviceUrl\":\"@url\"}",
        type: 'JSON'
      }
      const globalVariables = {
        "url": "http://someUrl"
      }
      const parseConfig = this.newConfig.parseConfig(config, { globalVariables })
      console.log(parseConfig)
    })
  })
})