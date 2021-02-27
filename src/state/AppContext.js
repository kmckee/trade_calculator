import { createContext } from "react";
import RootStore from "./RootStore";

const store = new RootStore();
const AppContext = createContext(store);

export default AppContext;
