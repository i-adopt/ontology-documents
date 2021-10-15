const Path = require('path');
module.exports = {

  // redirect output to
  outPath: Path.join(__dirname, '..', '..', '..', 'i-adopt.github.io'),

  // path to the widoco executable
  widocoPath: Path.join(__dirname, '..', '..', '..', 'widoco-1.4.14-jar-with-dependencies.jar'),

  // path to the ontology file
  ontFile: Path.join(__dirname, '..', '..', 'ontology', 'i-adopt.owl'),

  // path to the widoco configuration
  confFile: Path.join(__dirname, '..', '..', 'widoco', 'widoco.conf'),

  // path to the texts
  textFolder: Path.join(__dirname, '..', '..', 'widoco', 'texts'),

};
