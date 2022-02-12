const ffi = require('ffi-napi');
const ref = require('ref-napi');

const { join } = require('path');

const bot = ffi.Library(join(__dirname, '../bin/7566.so'), {
    "init": [ref.types.void, []],
    "printAddress": [ref.types.void, [ref.types.void]],
    "receive": [ref.types.void, [ref.types.CString]],
    "runCommand": [ref.types.CString, [ref.types.CString, ref.types.Object]]
});

module.exports = bot;
