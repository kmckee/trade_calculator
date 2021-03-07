import React from "react";
import { action } from "mobx";
import { DatePicker as MuiDatePicker } from "@material-ui/pickers";

const DatePicker = ({ onChange, ...rest }) => {
  return (
    <MuiDatePicker
      disableToolbar
      variant="inline"
      inputVariant="outlined"
      format="MM/dd/yyyy"
      onChange={action("updateDate", (date) => onChange(date))}
      {...rest}
    />
  );
};

export default DatePicker;
