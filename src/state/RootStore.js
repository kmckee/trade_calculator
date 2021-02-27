import { makeAutoObservable } from "mobx";

export default class RootStore {
  accountBalance = null;
  maxLossPerTrade = 0.03;
  side = "Long";
  entryPrice = null;
  stopLossPrice = null;
  errors = [];

  constructor() {
    makeAutoObservable(this);
  }

  get maxDollarLossPerTrade() {
    const amount = this.accountBalance * this.maxLossPerTrade;
    const formatted = amount.toFixed(2);
    return formatted;
  }
  get howManyCoinsToBuy() {
    return null;
  }
}
