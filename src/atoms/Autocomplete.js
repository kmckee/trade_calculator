import React from "react";
import MuiAutocomplete from "@material-ui/lab/Autocomplete";

const Autocomplete = ({ children, ...rest }) => {
  return <MuiAutocomplete {...rest}>{children}</MuiAutocomplete>;
};

Autocomplete.defaultProps = {};

export default Autocomplete;
