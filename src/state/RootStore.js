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
    return "2.00";
  }
  get howManyCoinsToBuy() {}
}
