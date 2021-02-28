import "./App.css";
import { observer } from "mobx-react-lite";
import useStore from "./useStore";
import Button from "./atoms/Button";
import TextField from "./atoms/TextField";
import DatePicker from "./atoms/DatePicker";

import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

function App() {
  const store = useStore();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <header></header>
      <main>
        <DatePicker
          value="10/19/1983"
          onChange={console.log}
          label="Entry Date"
        />
        <TextField
          label="Account Balance"
          money
          value={store.accountBalance}
          onChange={(e) => (store.accountBalance = e.target.value)}
        />
        <TextField
          label="Max Loss Per Trade"
          percentage
          value={store.maxLossPerTrade}
          onChange={(e) => (store.maxLossPerTrade = e.target.value)}
        />
        <TextField label="Comments" multiline />
        <Button>Test</Button>
      </main>
      <footer></footer>
    </MuiPickersUtilsProvider>
  );
}

export default observer(App);
