const mathOperations = require('./index');
//index.test.js
describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
      expect(mathOperations.sum(1, 2)).toBe(3);
    });
    test(`subsrating 2 -1 should return 1`,()=>{
        expect(mathOperations.diff(2,1)).toBe(1);
    })
   })