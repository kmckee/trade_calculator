import React from "react";
import styled from "styled-components";
import InlineError from "./InlineError";
import InlineLoading from "./InlineLoading";
import useLivePrice from "../hooks/useLivePrice";
import Paper from "@material-ui/core/Paper";

const Container = styled(Paper)`
  display: flex;
  padding: 0.4em 1em;
  margin: 0 1em;
  min-width: 16em;
  justify-content: center;
  .current {
    font-size: 2em;
    margin: 0 0.25em;
  }
  .daily {
    display: flex;
    flex-direction: column;
  }
  .high {
    color: green;
  }
  .low {
    color: red;
  }
`;

const PriceHighlights = ({ symbol }) => {
  const { price, loading, error } = useLivePrice(symbol);
  if (!symbol) return null;
  if (loading) {
    return (
      <Container>
        <InlineLoading />
      </Container>
    );
  }
  if (error) {
    return (
      <Container>
        <InlineError error={error} />
      </Container>
    );
  }
  return (
    <Container>
      <span className="current">{price.lastPrice}</span>
      <div className="daily">
        <span className="high">{price.highPrice}</span>
        <span className="low">{price.lowPrice}</span>
      </div>
    </Container>
  );
};

export default PriceHighlights;
