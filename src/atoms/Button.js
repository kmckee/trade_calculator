import React from "react";
import MuiButton from "@material-ui/core/Button";

const Button = ({ children, primary, cancel, ...rest }) => {
  const color = primary ? "primary" : cancel ? "secondary" : undefined;
  return (
    <MuiButton variant="contained" color={color} {...rest}>
      {children}
    </MuiButton>
  );
};

Button.defaultProps = {
  primary: true,
};

export default Button;
