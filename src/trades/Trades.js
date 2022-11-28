import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Trades = ({ data }) => {
  const [coinToss, setCoinToss] = useState({});
  const { total, tossArray, newGame } = coinToss;

  console.log(tossArray);
  if (tossArray) {
    for (let i = 0; i < tossArray.length; i++) {
      if (tossArray && tossArray[i] === 1) tossArray[i] = 1000;
      if (tossArray && tossArray[i] === 0) tossArray[i] = -1000;
    }
  }

  console.log(tossArray);
  let profit = tossArray && tossArray.reduce((total, x) => total + x, 0);

  useEffect(() => {
    setCoinToss(data);
  }, [data]);

  return (
    <div className="w-full h-full center flex-col">
      <h1>Trades</h1>
      <div className="trades w-full h-[70%] bg-blue-300 center flex-col">
        {tossArray &&
          tossArray.map((item) => {
            return (
              <div key={uuidv4()}>
                {(item === 1000 && (
                  <h2 className="text-green-700 font-extrabold">$1000</h2>
                )) ||
                  (item === -1000 && (
                    <h2 className="text-orange-700 font-extrabold">-$1000</h2>
                  ))}
              </div>
            );
          })}
      </div>
      <h2>trade:{total}</h2>
      <h2>Net Profit:{profit}</h2>
    </div>
  );
};

export default Trades;
