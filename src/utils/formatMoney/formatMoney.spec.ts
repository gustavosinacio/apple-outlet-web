import { formatMoney } from "./formatMoney";

const INTL_SPACE_UNICODE = "\xa0";

describe("Utils functions", () => {
  it("should transform a 1 digit number into money string in brazillian format", () => {
    const formatedMoney = formatMoney(7);

    expect(formatedMoney).toBe(`R$${INTL_SPACE_UNICODE}7,00`);
  });

  it("should transform a 5 digit number into money string in brazillian format", () => {
    const formatedMoney = formatMoney(51423.78);

    expect(formatedMoney).toBe(`R$${INTL_SPACE_UNICODE}51.423,78`);
  });
});
