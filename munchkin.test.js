const { isValidLevel } = require("./munchkinHelpers");

test("is valid level tests", () => {
    expect(isValidLevel("shannon")).toBe(false);
    expect(isValidLevel(1)).toBe(true);
    expect(isValidLevel("1")).toBe(true);
})