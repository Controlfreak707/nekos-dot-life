import {readdirSync} from 'fs'
import {dirname} from 'path'
import {fileURLToPath} from 'url'
const __dirname=dirname(fileURLToPath(import.meta.url));

let fileNames=readdirSync(__dirname).filter(file=>file!='index.js');

for(const file of fileNames){
  //if(file===index.js){continue};
  const moduleName=file.split('.')[0];
  export const moduleName

}

  filter((file) => file != "index.js")
  forEach((filename) => {
    const moduleName = filename.split(".")[0];
    exports[moduleName] = require(`${__dirname}/${filename}`);
  });
