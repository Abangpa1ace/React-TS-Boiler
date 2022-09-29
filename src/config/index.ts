

module.exports = function setEnv(env) {
  return require(`./${env}.ts`)
}