import MuiButton from "@material-ui/core/Button";

import React from "react";

const Button = ({ children, ...rest }) => {
  return <MuiButton {...rest}>{children}</MuiButton>;
};

export default Button;
