import { formatDate } from "./formatDate";

describe("Format date function", () => {
  it("should transform a Date to a string in brazillian format", () => {
    const date = new Date("2022-05-23T00:00:00.000");
    const formatedDate = formatDate(date);

    expect(formatedDate).toBe("23/05/2022");
  });
});
