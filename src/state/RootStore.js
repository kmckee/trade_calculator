import { makeAutoObservable, action } from "mobx";

export default class RootStore {
  accountBalance = "";
  maxLossPerTrade = 0.02;
  get side() {
    // For now this is readonly.
    // Add shorts later.
    return "Long";
  }
  entryPrice = "";
  stopLossPrice = "";
  takeProfitPrice = "";
  entryDate = "";
  symbols = [];
  symbol = null;
  binance = null;

  constructor(binance) {
    this.binance = binance;
    makeAutoObservable(this, { binance: false });
  }

  get errors() {
    const items = [];
    if (this.side === "Long" && this.entryPrice <= this.stopLossPrice) {
      items.push(
        "Long positions must have entry price higher than stop loss price"
      );
    }
    return items;
  }

  get maxDollarLossPerTrade() {
    const amount = this.accountBalance * this.maxLossPerTrade;
    const formatted = Math.round(amount * 100) / 100;
    return formatted;
  }

  loadSymbols() {
    this.binance.getSymbols().then(
      action("fetchSuccess", (data) => {
        console.log("data", data);
        this.symbols = data;
      }),
      action("fetchError", (err) => {
        console.error(err);
      })
    );
  }

  get howManyCoinsToBuy() {
    // k5 = entryPrice
    // k6 = stopLossPrice
    // k7 = maxDollarLossPerTrade
    //=IF('https://d.docs.live.net/e7c32b792f525cc3/Desktop/[MTG Historical Trades.xlsm]Sheet1'!
    // V5="Long",IF(K5>K6,K7/(K5-K6),"For a long position, entry price has to be higher than stop loss price."),
    // IF('https://d.docs.live.net/e7c32b792f525cc3/Desktop/[MTG Historical Trades.xlsm]Sheet1'!V5="Short",
    // IF(K6>K5,K7/(K6-K5),"For a short position, entry price has to be lower than stop loss price."),0))
    return this.maxDollarLossPerTrade / (this.entryPrice - this.stopLossPrice);
  }
}
