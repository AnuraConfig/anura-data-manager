import configConvertor from './configParser/configConvertor'
import paramterInject from './configParser/paramterInjector'
import ConfigParser from './configParser/parserObject'
import commonTest from './tests'
import * as validation from './validation'
import * as  interfaces from './interfaces'

const defaultParse = [
  {
    key: "data",
    name: "parameter inject",
    condition: true,
    parse: paramterInject
  },
  {
    key: "data",
    name: "config Convertor",
    condition: (config, options) => !options.isRaw,
    parse: (config, options) => configConvertor.getObject(config.data, config.type)
  },
]

export { validation, commonTest, configConvertor, interfaces, ConfigParser, defaultParse }