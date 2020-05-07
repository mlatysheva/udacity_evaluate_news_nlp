import { checkInput } from '../src/client/js/inputChecker'

test('empty string', () =>

{ expect(checkInput('')).
toBeNull

});