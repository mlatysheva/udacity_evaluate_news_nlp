import { checkInput } from '../src/client/js/inputChecker.js'
// const checkInput = require('../src/client/js/inputChecker.js');

test('empty string', () =>

{ expect(checkInput('')).
toBeNull

});