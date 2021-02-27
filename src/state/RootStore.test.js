import RootStore from "./RootStore";

describe("RootStore", () => {
  let subject;
  beforeEach(() => {
    subject = new RootStore();
  });
  it("defaults to longs", () => {
    expect(subject.side).toBe("Long");
  });
  it("calculates maxDollarLossPerTrade", () => {
    subject.accountBalance = 100;
    subject.maxLossPerTrade = 0.02;
    expect(subject.maxDollarLossPerTrade).toBe("2.00");
  });
});
