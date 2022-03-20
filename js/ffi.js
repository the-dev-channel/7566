const ffi = require('ffi-napi');
const ref = require('ref-napi');

const { join } = require('path');

const bot = ffi.Library(join(__dirname, '../bin/7566.so'), {
    "init": [ref.types.void, []],
    "printAddress": [ref.types.void, [ref.types.void]],
    "receive": [ref.types.CString, [ref.types.CString, ref.types.Object]],
    "slog": [ref.types.void, [ref.types.CString]],
    "serror": [ref.types.void, [ref.types.CString]],
    "sdebug": [ref.types.void, [ref.types.CString]],
});

module.exports = bot;
