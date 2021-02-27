import { useContext } from "react";
import RootStoreContext from "./state/RootStoreContext";

const useStore = () => useContext(RootStoreContext);
export default useStore;
