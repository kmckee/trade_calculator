import React from "react";
import styled from "styled-components";

const RedText = styled.span`
  color: red;
`;

const InlineError = ({ error }) => {
  return <RedText>{error}</RedText>;
};

export default InlineError;
