import {n32s_convert_u} from '../src/convert-signed-unsigned.js'

import 'mocha';
const assert = require('assert');

describe('CONVERT FUNCTIONS', function(){
    describe('#c_s_u. Description: pass negative number to convert it into positive', function(){
        it('Pass "-50". Shoud return "50"', function(){
            const result = n32s_convert_u(-50);
            assert.strictEqual(result, 50);
        });
        it('Pass "-50.3". Shoud return "50.3"', function(){
            const result = n32s_convert_u(-50.3);
            assert.strictEqual(result, 50.3);
        });
    });
});