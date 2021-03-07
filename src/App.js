import "./App.css";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import LongPosition from "./organisms/LongPosition";
import Page from "./Page";

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Page>
        <LongPosition />
      </Page>
    </MuiPickersUtilsProvider>
  );
}

export default App;
