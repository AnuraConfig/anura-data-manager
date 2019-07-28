import assert from "assert"
import ParamterInject from "../../src/configParser/paramterInjector"


describe('ParamterInject', () => {
    describe('#ParamterInject()', () => {
        it('should Inject parameter ', function () {
            const globalVariables = {
                "url": "http://someUrl"
            }
            const config = {
                data: "{\"serviceUrl\":\"@url\"}"
            }
            const res = ParamterInject(config, { globalVariables })
            assert.equal(res, "{\"serviceUrl\":\"http://someUrl\"}")
        })
    })
})