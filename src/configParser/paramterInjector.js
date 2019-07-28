import { DEFAULT_PARAMETER_KEY } from "../constants"


export default function ParamterInject(config, { globalVariables, paramKey = DEFAULT_PARAMETER_KEY }) {
  let data = config.data
  Object.entries(globalVariables).forEach(([key, value]) => {
    data = data.replace(new RegExp(paramKey + key, 'g'), value)
  })
  return data
}