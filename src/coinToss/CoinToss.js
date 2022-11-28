import React, { useEffect, useState } from "react";

const CoinToss = () => {
  const [coin, setCoin] = useState(0);
  let [head, setHead] = useState(0);
  let [tail, setTail] = useState(0);
  let [total, setTotal] = useState(0);
  let [newGame, setNewGame] = useState(false);

  const coinToss = () => {
    if (total < 10) {
      let toss = Math.floor(Math.random() * 2);

      setTotal(total);
      if (toss === 1 && head < 6) {
        head++;
        setHead(head);
      } else if (toss === 1 && head === 6) {
        tail++;
        setTail(tail);
      }
      if (toss === 0 && tail < 4) {
        tail++;
        setTail(tail);
      } else if (toss === 0 && tail === 4) {
        head++;
        setHead(head);
      }
      setCoin(toss);
      setTotal(head + tail);
    } else {
    }
  };

  return (
    <div className="w-1/2 h-full center  bg-teal-500">
      <div className="gif center text-4xl w-[10rem] h-[5rem] bg-white m-8">
        <h2>{coin}</h2>
      </div>
      <div className="gif center text-4xl w-[10rem] h-[5rem] bg-white m-8">
        <h2>Head:{head}</h2>
      </div>
      <div className="gif center text-4xl w-[10rem] h-[5rem] bg-white m-8">
        <h2>Tail:{tail}</h2>
      </div>
      <div className="gif center text-4xl w-[10rem] h-[5rem] bg-white m-8">
        <h2>Total:{total}</h2>
      </div>
      <button
        className="bg-orange-400 text-2xl text-white p-2"
        onClick={coinToss}
      >
        CoinToss
      </button>
      <button
        className="bg-blue-400 text-2xl text-white p-2 m-3"
        onClick={newGame}
      >
        New Game
      </button>
    </div>
  );
};

export default CoinToss;
