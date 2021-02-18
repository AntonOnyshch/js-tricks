import {c_s_u} from '../src/convert-signed-unsigned.js'

import 'mocha';
const assert = require('assert');

describe('CONVERT FUNCTIONS', function(){
    describe('#c_s_u. Description: pass negative number to convert it into positive', function(){
        it('Pass "-50". Shoud return "50"', function(){
            const result = c_s_u(-50);
            assert.strictEqual(result, 50);
        })
    });
});