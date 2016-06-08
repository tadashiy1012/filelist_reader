const fs = require('fs');
const path = require('path');

const ALL_EXT = '[ALL]';

module.exports = function(tgtDirectoryPath, filterExt = ALL_EXT, showHidden = false) {
  const promise = new Promise((resolve, reject) => {
    filterExt = filterExt === '*' ? ALL_EXT : filterExt;
    try {
      fs.readdir(tgtDirectoryPath, (err, files) => {
        if (err) throw err;
        const filtered = files.filter((file) => {
          if (filterExt === ALL_EXT) {
            if (!showHidden && file.indexOf('.') === 0) {
              return false;
            } else {
              return true;
            }
          } else if (file.substring(file.lastIndexOf('.') + 1) === filterExt) {
            if (!showHidden && file.indexOf('.') === 0) {
              return false;
            } else {
              return true;
            }
          } else {
            return false;
          }
        });
        resolve(filtered);
      });
    } catch(err) {
      reject(err);
    }
  });
  return promise;
};