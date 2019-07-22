import _ from 'lodash'


export default class ConfigParser {
  constructor(parsers) {
    this.parsers = parsers
  }

  parseConfig(configFile, options) {
    let newConfig = _.cloneDeep(configFile)
    this.parsers.forEach(parser => {
      if ((typeof (parser.condition) === "function") ? parser.condition(newConfig, options) : parser.condition)
        newConfig[parser.key] = parser.prase(newConfig, options)
    })
    return newConfig
  }

}