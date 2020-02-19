const capitalize = require("./capitalize").default

describe("capitalize utils", () => {
  test("no parameters", () => {
    expect(capitalize()).toBe("")
  })
  test("undefined parameter", () => {
    expect(capitalize(undefined)).toBe("")
  })
  test("single string", () => {
    expect(capitalize("xpto")).toBe("Xpto")
  })
  test("full string", () => {
    expect(capitalize("test string")).toBe("Test String")
  })
})
