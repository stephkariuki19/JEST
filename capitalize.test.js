const capitalize = require("./capitalize")
//or import capitalize from './capitalize';

describe("Capitalize",()=>{
    test('test capitalize',()=>{
        expect(capitalize("stephanie")).toBe("Stephanie")
    })
})

