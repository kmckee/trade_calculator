import { create } from "axios";
const axios = create({
  baseURL: "https://api.binance.com/api/v3/",
  timeout: 1000,
});

const binance = {
  getSymbols: () => {
    return axios
      .get("exchangeInfo")
      .then((res) => res.data.symbols.filter((s) => s.status === "TRADING"));
  },
  getPriceChangeStatistics: (symbol) => {
    if (!symbol) {
      return Promise.reject("Must specify a symbol.");
    }
    return axios.get(`ticker/24hr?symbol=${symbol}`).then((res) => res.data);
  },
};

export default binance;
