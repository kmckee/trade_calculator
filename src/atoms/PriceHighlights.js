import React, { useState, useEffect } from "react";
import styled from "styled-components";
import binance from "../state/binance";

const Container = styled.dl`
  dt {
    font-weight: bold;
    display: inline-block;
  }
  dd {
    color: #666;
    display: inline-block;
    margin-left: 0.5em;
    margin-right: 1em;
  }
`;

const PriceHighlights = ({ symbol }) => {
  // TODO: Custom hook that gives live updating price data?
  const [priceInfo, setPriceInfo] = useState({});
  useEffect(() => {
    if (!symbol) return;
    binance
      .getPriceChangeStatistics(symbol)
      .then((res) => setPriceInfo(res))
      .catch(console.error);
  }, [symbol]);
  if (!symbol) return null;
  return (
    <Container>
      <dt>High:</dt>
      <dd>{priceInfo.highPrice}</dd>
      <dt>Current:</dt>
      <dd>{priceInfo.lastPrice}</dd>
      <dt>Low:</dt>
      <dd>{priceInfo.lowPrice}</dd>
    </Container>
  );
};

export default PriceHighlights;
