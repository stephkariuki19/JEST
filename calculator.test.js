const calculator = require("./calculator")

describe("Testing calulator functions",()=>{

    test("testing sum",()=>{
        expect(calculator.sumFunction(2,3)).toBe(5)
    })
    test("testing subtraction",()=>{
        expect(calculator.minusFunction(8,3)).toBe(5)
    })
    test("testing multiplication",()=>{
        expect(calculator.multiplyFunction(2,3)).toBe(6)
    })
    test("testing division",()=>{
        expect(calculator.divideFunction(6,3)).toBe(2)
    })
})