import RootStore from "./RootStore";

describe("RootStore", () => {
  let subject, binance;
  beforeEach(() => {
    binance = {
      getSymbols: jest.fn(() => Promise.resolve([{}, {}, {}])),
    };
    subject = new RootStore(binance);
  });
  it("defaults to longs", () => {
    expect(subject.side).toBe("Long");
  });
  it("calculates maxDollarLossPerTrade for 2% of $100", () => {
    subject.accountBalance = 100;
    subject.maxLossPerTrade = 0.02;
    expect(subject.maxDollarLossPerTrade).toBe(2.0);
  });
  it("calculates maxDollarLossPerTrade for 20% of $100", () => {
    subject.accountBalance = 100;
    subject.maxLossPerTrade = 0.2;
    expect(subject.maxDollarLossPerTrade).toBe(20.0);
  });
  it("calculates the number of coins to purchase", () => {
    subject.accountBalance = 1000;
    subject.maxLossPerTrade = 0.02;
    subject.stopLossPrice = 8;
    subject.entryPrice = 10;
    expect(subject.howManyCoinsToBuy).toBe(10.0);
  });
  it("calculates the number of coins to purchase with other numbers", () => {
    subject.accountBalance = 1983;
    subject.maxLossPerTrade = 0.02;
    subject.entryPrice = 25;
    subject.stopLossPrice = 23.12;
    expect(subject.howManyCoinsToBuy).toBeCloseTo(21.09574);
  });
  describe("validations", () => {
    it("adds an error if long with an entry price less than stop loss price", () => {
      subject.entryPrice = 10;
      subject.stopLossPrice = 11;
      expect(subject.errors[0]).toBe(
        "Long positions must have entry price higher than stop loss price"
      );
    });
    it("has no error if long with an entry price greater than stop loss price", () => {
      subject.entryPrice = 11;
      subject.stopLossPrice = 10;
      expect(subject.errors.length).toBe(0);
    });
  });
  describe("loadSymbols", () => {
    it("loads symbols", () => {
      subject.loadSymbols();
      expect(binance.getSymbols).toHaveBeenCalled();
    });
  });
});
