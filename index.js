let replaceWithPath = (obj = {}, prefix = '', tmp = {}) => {
  Object.keys(obj).forEach(key => {
    let name = prefix + key.toUpperCase()
    tmp[key] = (typeof obj[key] !== 'object' || Array.isArray(obj[key])) ? name : replaceWithPath(obj[key], name + '_')
  })
  return tmp
}

module.exports = replaceWithPath
