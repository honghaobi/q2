#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const petsPath = path.join(__dirname, 'pets.json');

const node = path.basename(process.argv[0]);
const file = path.basename(process.argv[1]);
const cmd = process.argv[2];
const subCmd = process.argv[3];

if (cmd === 'read') {
  fs.readFile(petsPath, 'utf8', function (err, data) {
    if (err) {
      throw err;
    }
    const pets = JSON.parse(data);

    if (subCmd) {
      console.log(pets[subCmd]);
    } else if (!subCmd) {
      console.log(pets);
    } else {
      console.error(`Usage: ${node} ${file} read INDEX`);
      process.exit(1);
    }
  });
} else if (cmd === 'create') {
  fs.readFile(petsPath, 'utf8', function (readErr, data) {
    if (readErr) {
      throw readErr;
    }

    const pets = JSON.parse(data);
    const age = process.argv[3];
    const kind = process.argv[4];
    const name = process.argv[5];

    if (!age || !kind || !name) {
      console.error(`Usage: ${node} ${file} ${cmd} AGE KIND NAME`);
      process.exit(1);
    }

    pets.push({ 'age':parseInt(age), 'kind':kind, 'name':name });

    const petsJSON = JSON.stringify(pets);

    fs.writeFile(petsPath, petsJSON, function (writeErr) {
      if (writeErr) {
        throw writeErr;
      }
      console.log(pets);
    });
  });
} else if (cmd === 'update') {
  fs.readFile(petsPath, 'utf8', function (readErr, data) {
    if (readErr) {
      throw readErr;
    }

    const pets = JSON.parse(data);
    const index = process.argv[3];
    const age = process.argv[4];
    const kind = process.argv[5];
    const name = process.argv[6];

    if (!index || !age || !kind || !name) {
      console.error(`Usage: ${node} ${file} ${cmd} INDEX AGE KIND NAME`);
      process.exit(1);
    }
    if (index >= 0 && index <= pets.length) {
      pets[index].age = JSON.parse(age);
      pets[index].kind = kind;
      pets[index].name = name;
    } else {
      console.error('the pet you want to replace does not exist');
      process.exit(1);
    }

    const petsJSON = JSON.stringify(pets);

    fs.writeFile(petsPath, petsJSON, function (writeErr) {
      if (writeErr) {
        throw writeErr;
      }

      console.log(pets);
    });
  });
} else if (cmd === 'destroy') {
  fs.readFile(petsPath, 'utf8', function (readErr, data) {
    if (readErr) {
      throw readErr;
    }

    const pets = JSON.parse(data);
    const index = process.argv[3];

    if (!index) {
      console.error(`Usage: ${node} ${file} ${cmd} INDEX `);
      process.exit(1);
    }

    if (index >= 0 && index <= pets.length) {
      pets.splice(index, 1);
    } else {
      console.error('the pet you want to delete does not exist');
      process.exit(1);
    }

    const petsJSON = JSON.stringify(pets);

    fs.writeFile(petsPath, petsJSON, function (writeErr) {
      if (writeErr) {
        throw writeErr;
      }
      console.log(pets);
    });
  });
} else {
  console.error(`Usage: ${node} ${file} [read | create | update | destroy]`);
  process.exit(1);
}
