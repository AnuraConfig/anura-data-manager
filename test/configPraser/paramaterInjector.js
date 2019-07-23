import assert from "assert"
import chai from "chai"
import ParamterInject from "../../src/configParser/paramaterInjector"

const expect = chai.expect

describe('ParamterInject', () => {
    describe('#ParamterInject()', () => {
        it('should Inject parameter ', function () {
            const globalVariables = {
                "url": "http://someUrl"
            }
            const config = {
                data: "{\"serviceUrl\":\"@url\"}"
            }
            const res = ParamterInject(config, { globalVariables, paramKey: "@" })
            
            assert.equal(res, "{\"serviceUrl\":\"http://someUrl\"}")
        })
    })
})