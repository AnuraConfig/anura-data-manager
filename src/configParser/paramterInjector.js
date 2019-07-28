export default function ParamterInject(config, { globalVariables, paramKey }) {
  let data = config.data
  Object.entries(globalVariables).forEach(([key, value]) => {
    data = data.replace(new RegExp(paramKey + key, 'g'), value)
  })
  return data
}