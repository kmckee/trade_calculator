import { useState, useEffect, useRef } from "react";
import binance from "../data/binance";

function useLivePrice(symbol, refreshMs = 5000) {
  const [price, setPrice] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const timerRef = useRef(null);
  useEffect(() => {
    setLoading(true);
    timerRef.current = setInterval(() => {
      if (!symbol) return;
      binance
        .getPriceChangeStatistics(symbol)
        .then((res) => {
          setPrice(res);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setError(err);
        });
    }, refreshMs);
    return () => {
      clearInterval(timerRef.current);
    };
  }, [symbol, refreshMs]);
  return {
    price,
    loading,
    error,
  };
}

export default useLivePrice;
