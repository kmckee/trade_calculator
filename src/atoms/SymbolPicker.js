import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { action } from "mobx";
import styled from "styled-components";
import useStore from "../useStore";
import TextField from "./TextField";
import Autocomplete from "./Autocomplete";
import PriceHighlights from "./PriceHighlights";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  > div {
    height: 100%;
  }
`;

const SymbolPicker = ({ onChange, ...rest }) => {
  const store = useStore();
  useEffect(() => {
    store.loadSymbols();
  }, [store]);
  return (
    <Container>
      <Autocomplete
        options={store.symbols}
        getOptionLabel={(option) => option.symbol}
        onChange={action("updateSymbol", (event, newValue) => {
          console.log(event, newValue);
          onChange(event, newValue);
        })}
        style={{ width: "12em" }}
        renderInput={(params) => (
          <TextField {...params} label="Symbol" variant="outlined" />
        )}
        {...rest}
      />
      <PriceHighlights symbol={store?.symbol?.symbol} />
    </Container>
  );
};

export default observer(SymbolPicker);
