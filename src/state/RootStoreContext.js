import { createContext } from "react";
import RootStore from "./RootStore";

const store = new RootStore();
const RootStoreContext = createContext(store);

export default RootStoreContext;
