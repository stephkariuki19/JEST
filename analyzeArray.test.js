const analyzeArray = require("./analyzeArray");

describe("Results of analyzeArray", () => {
  test("testing full object", () => {
    expect(analyzeArray([3, 4])).toEqual({
      average: 3.5,
      min: 3,
      max: 4,
      length: 2,
    });
  });
});
