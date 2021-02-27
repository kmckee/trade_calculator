import RootStore from "./RootStore";

describe("RootStore", () => {
  let subject;
  beforeEach(() => {
    subject = new RootStore();
  });
  it("defaults to longs", () => {
    expect(subject.side).toBe("Long");
  });
  it("calculates maxDollarLossPerTrade for 2% of $100", () => {
    subject.accountBalance = 100;
    subject.maxLossPerTrade = 0.02;
    expect(subject.maxDollarLossPerTrade).toBe("2.00");
  });
  it("calculates maxDollarLossPerTrade for 20% of $100", () => {
    subject.accountBalance = 100;
    subject.maxLossPerTrade = 0.2;
    expect(subject.maxDollarLossPerTrade).toBe("20.00");
  });
});
