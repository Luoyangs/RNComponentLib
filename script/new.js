const path = require('path');
const fs = require('fs');
const writeFile = require('write');
const uppercamelcase = require('uppercamelcase');
const template = require('./template/component.template');

function lowerhyphenate(str) {
  return str
    .replace(/([A-Z])/g, '-$1')
    .replace(/(\/|^)-/, '$1')
    .toLowerCase();
}

const components = fs
  .readdirSync(path.join(__dirname, '../src/components'), 'utf-8')
  .filter((name) => !name.endsWith('.ts') && !name.endsWith('.DS_Store'));

// yarn new compontA
const componentName = process.argv[2]; // get component name like componentA
if (!componentName) {
  console.error('Please enter new component name');
  process.exit(1);
}

// check componentA exist
if (components.includes(componentName)) {
  console.error(`${componentName} has already exist.`);
  process.exit(1);
}
components.push(componentName);

function replaceComponent(str, component) {
  return String(str)
    .replace(/(<%component%>)/g, lowerhyphenate(component))
    .replace(/(<%COMPONENT%>)/g, uppercamelcase(component));
}

function combinedReplace(temp) {
  const regexp = new RegExp(
    ' *<% for %>\\n?([\\s\\S]*?) *<% /for %>\\n?',
    'mg'
  );
  return temp.replace(regexp, (matches, cycleTemp) => {
    return components
      .map((component) => replaceComponent(cycleTemp, component))
      .join('');
  });
}

function writeSingleFile(config) {
  const filePath = replaceComponent(config.path, componentName);
  const templates = Array.isArray(config.temp) ? config.temp : [config.temp];

  if (config.type === 'update') {
    let index = 0;
    let fileData = fs.readFileSync(path.resolve(filePath), 'utf-8');
    const regular = new RegExp('\\n(.*?)<% component temp position %>', 'mg');

    fileData = fileData.replace(regular, (matches) => {
      const temp = templates[index++];
      if (temp) {
        return replaceComponent(temp, componentName) + matches;
      } else {
        return matches;
      }
    });

    writeFile.sync(path.resolve(filePath), fileData);
  } else {
    const fileData = replaceComponent(config.temp, componentName);
    writeFile.sync(path.resolve(filePath), fileData);
  }
}

function writeCombinedFile(config) {
  const { path: filePath, temp: fileTemp } = config;
  let index = 0;
  let fileData = fs.readFileSync(path.resolve(filePath), 'utf-8');
  const regular = new RegExp(
    '<% combination temp start %>([\\s\\S]*?)<% combination temp end %>',
    'mg'
  );

  fileData = fileData.replace(regular, (matches, data) => {
    const temp = Array.isArray(fileTemp) ? fileTemp[index++] : fileTemp;

    if (temp) {
      // remove last line of data
      data = data.match(/[\s\S]*\n/)[0];
      const newData = combinedReplace(temp);
      return matches.replace(data, newData);
    } else {
      return matches;
    }
  });

  writeFile.sync(path.resolve(filePath), fileData);
}

writeSingleFile(template.componentSrcIndex);
writeSingleFile(template.componentSrcType);
writeSingleFile(template.componentSrcStyle);
writeSingleFile(template.componentIndex);
writeSingleFile(template.componentReadme);
writeSingleFile(template.componentExample);

writeCombinedFile(template.component);
writeCombinedFile(template.app);
