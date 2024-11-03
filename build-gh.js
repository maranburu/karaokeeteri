import fs from 'fs';

console.log('building for github pages...');

const ghDir = 'docs';
const buildDir = 'dist';
const indexFile = `${ghDir}/index.html`;

fs.rmSync(ghDir, { recursive: true, force: true });

fs.cpSync(buildDir, ghDir, {recursive: true});

fs.readFile(indexFile, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(/\/assets/g, 'assets');
    fs.writeFile(indexFile, result, 'utf8', function (err) {
       if (err) return console.log(err);
       console.log('done!');
    });
});