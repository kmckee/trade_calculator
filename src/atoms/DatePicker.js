import React from "react";
import { action } from "mobx";
import { DatePicker as MuiDatePicker } from "@material-ui/pickers";

const DatePicker = ({ onChange, ...rest }) => {
  return (
    <MuiDatePicker
      disableToolbar
      variant="inline"
      format="MM/dd/yyyy"
      onChange={action(onChange)}
      {...rest}
    />
  );
};

export default DatePicker;
