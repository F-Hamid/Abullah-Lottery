import React, { useEffect, useContext, useState } from "react";

import CoinToss from "./coinToss/CoinToss";
import Trades from "./trades/Trades";

const App = () => {
  const [data, setData] = useState({});

  // useEffect(() => {
  //   setData("test");
  // }, []);

  const getData = (items) => {
    setData(items);
  };
  return (
    <div className="w-screen h-screen center flex-row ">
      <CoinToss getData={getData} />
      <Trades data={data} />
    </div>
  );
};

export default App;
