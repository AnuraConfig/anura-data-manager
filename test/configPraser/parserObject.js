import chai from "chai"
import { defaultParse } from "../../src"
import ConfigParser from "../../src/configParser/parserObject"

const expect = chai.expect


describe('ConfigParser', function () {
  describe('#parseConfig', function () {

    beforeEach(function () {
      this.newConfig = new ConfigParser(defaultParse)
    })

    it('should replace var and parse config', function () {
      const config = {
        data: "{\"serviceUrl\":\"@url\"}",
        type: 'JSON'
      }
      const globalVariables = {
        "url": "http://someUrl"
      }
      const parseConfig = this.newConfig.parseConfig(config, { globalVariables })
      expect(parseConfig).to.deep.equal({ data: { serviceUrl: 'http://someUrl' }, type: 'JSON' })
    })

    it('should only replace var', function () {
      const config = {
        data: "{\"serviceUrl\":\"@url\"}",
        type: 'JSON'
      }
      const globalVariables = {
        "url": "http://someUrl"
      }
      const parseConfig = this.newConfig.parseConfig(config, { globalVariables, isRaw: true })
      expect(parseConfig).to.deep.equal({ data: "{\"serviceUrl\":\"http://someUrl\"}", type: 'JSON' })
    })

    it('should ignore global var', function () {
      const config = {
        data: "{\"serviceUrl\":\"@url\"}",
        type: 'JSON'
      }
      const globalVariables = {
        "url": "http://someUrl"
      }
      const parseConfig = this.newConfig.parseConfig(config, { globalVariables, isRaw: true, applyVariable: false })
      expect(parseConfig).to.deep.equal({ data: "{\"serviceUrl\":\"@url\"}", type: 'JSON' })
    })
  })
})