import React from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import useStore from "../useStore";
import Button from "../atoms/Button";
import TextField from "../atoms/TextField";
import SymbolPicker from "../atoms/SymbolPicker";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  > div {
    margin-bottom: 2em;
  }
`;

const LongPosition = () => {
  const store = useStore();
  return (
    <Form>
      <SymbolPicker
        value={store.symbol}
        onChange={(e, newValue) => {
          store.symbol = newValue;
        }}
      />
      <TextField
        label="Account Balance"
        money
        value={store.accountBalance}
        onChange={(e) => (store.accountBalance = e.target.value)}
      />
      <TextField
        label="Max Loss Per Trade"
        percentage
        value={store.maxLossPerTrade}
        onChange={(e) => (store.maxLossPerTrade = e.target.value)}
      />
      <Button primary>Add</Button>
    </Form>
  );
};

export default observer(LongPosition);
