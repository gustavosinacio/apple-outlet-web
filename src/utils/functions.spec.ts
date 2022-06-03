import { formatDate, formatMoney } from "./functions";

const INTL_SPACE_UNICODE = "\xa0";

describe("Utils functions", () => {
  it("should transform a 1 digit number into money string in brazillian format", () => {
    const formatedMoney = formatMoney(7);

    expect(formatedMoney).toBe(`R$${INTL_SPACE_UNICODE}7,00`);
  });
  it("should transform a 1 digit number with floating point into money string in brazillian format", () => {
    const formatedMoneyWithcents = formatMoney(5.37);

    expect(formatedMoneyWithcents).toBe(`R$${INTL_SPACE_UNICODE}5,37`);
  });

  it("should transform a 2 digit number into money string in brazillian format", () => {
    const formatedMoney = formatMoney(37);

    expect(formatedMoney).toBe(`R$${INTL_SPACE_UNICODE}37,00`);
  });
  it("should transform a 2 digit number with floating point into money string in brazillian format", () => {
    const formatedMoney = formatMoney(21.463);

    expect(formatedMoney).toBe(`R$${INTL_SPACE_UNICODE}21,46`);
  });

  it("should transform a 5 digit number into money string in brazillian format", () => {
    const formatedMoney = formatMoney(51423.78);

    expect(formatedMoney).toBe(`R$${INTL_SPACE_UNICODE}51.423,78`);
  });
});

describe("Utils format date function", () => {
  it("should transform a Date to a string in brazillian format", () => {
    const date = new Date("2022-05-23T00:00:00.000");
    const formatedDate = formatDate(date);

    expect(formatedDate).toBe("23/05/2022");
  });
});
