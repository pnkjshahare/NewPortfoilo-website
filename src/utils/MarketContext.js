import React, { createContext, useContext, useMemo, useState } from "react";

const MarketContext = createContext({ trend: "up", setTrend: () => {} });

export const MarketProvider = ({ children }) => {
  const [trend, setTrend] = useState("up");
  const value = useMemo(() => ({ trend, setTrend }), [trend]);

  return <MarketContext.Provider value={value}>{children}</MarketContext.Provider>;
};

export const useMarketTrend = () => useContext(MarketContext);
