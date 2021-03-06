import { createContext } from "react";
import RootStore from "./RootStore";
import binance from "../data/binance";

const store = new RootStore(binance);
const RootStoreContext = createContext(store);

export default RootStoreContext;
