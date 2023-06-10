const reverseString = require("./reverse")

describe("Reversing strings",()=>{
    test('testing reversal',()=>{
        expect(reverseString('momo')).toBe("omom")
    })
})