const assert = require('power-assert');
const path = require('path');
const reader = require('../index.js');

const testDir = path.join(__dirname, 'test_dir');

describe('filelist_reader test', () => {
  it('Pattern of arguments expected', (done) => {
    reader(testDir).then((result) => {
      console.log(result);
      assert(result !== undefined);
      assert(Array.isArray(result));
      assert(result.length === 3);
      done();
    });
  });
  it('Pattern of arguments expected B', (done) => {
    reader(testDir, 'html').then((result) => {
      assert(result !== undefined);
      assert(Array.isArray(result));
      assert(result.length === 1);
      assert(result[0].substring(result[0].lastIndexOf('/') + 1) === 'moge.html');
      done();
    });
  });
  it('Pattern of arguments expected C', (done) => {
    reader(testDir, '*', true).then((result) => {
      assert(result !== undefined);
      assert(result.length === 4);
      done();
    });
  });
  it('Pattern of not as expected argument', (done) => {
    reader().catch((err) => {
      assert(err !== undefined);
      done();
    });
  });
});