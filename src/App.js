import "./App.css";
import { observer } from "mobx-react-lite";
import useStore from "./useStore";

function App() {
  const store = useStore();
  return <div className="App">The default side is: {store.side}</div>;
}

export default observer(App);
