import React from "react";
import { action } from "mobx";
import MuiTextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

const TextField = ({
  money,
  percentage,
  number,
  onChange,
  children,
  ...rest
}) => {
  return (
    <MuiTextField
      variant="outlined"
      InputProps={{
        startAdornment: money ? (
          <InputAdornment position="start">$</InputAdornment>
        ) : null,
        endAdornment: percentage ? (
          <InputAdornment position="end">%</InputAdornment>
        ) : null,
      }}
      type={money || percentage || number ? "number" : "text"}
      onChange={action("updateText", (e) => onChange(e))}
      {...rest}
    >
      {children}
    </MuiTextField>
  );
};

TextField.defaultProps = {
  onChange: () => {},
};
export default TextField;
