const { Config } = require('@holochain/tryorama')
const personas_dnaPath = './dist/dna-src.dna.json'
const personas_dna_1 = Config.dna(personas_dnaPath, 'personas_1', {uuid: 'agent1'})

module.exports = {
  config1: {
    instances: {
      personas: personas_dna_1
    }
  }
}
