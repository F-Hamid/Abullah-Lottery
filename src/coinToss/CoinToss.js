import React, { useEffect, useState, useContext } from "react";
// import Trades from "../trades/Trades";

export const tradesContext = React.createContext({});

const CoinToss = ({ getData }) => {
  const [coin, setCoin] = useState(0);
  let [head, setHead] = useState(0);
  let [tail, setTail] = useState(0);
  let [total, setTotal] = useState(0);
  let [tossArray, setTossArray] = useState([]);
  let [newGame, setNewGame] = useState(false);

  let data = { head, tail, total, coin, tossArray, newGame };

  //  On every change
  useEffect(() => {
    // Enable new game/reset button
    if (total === 10) {
      setNewGame(true);
    }
    // provide trades with data
    getData(data);
  }, [total]);

  const coinToss = () => {
    if (total < 10) {
      let toss = Math.floor(Math.random() * 2);
      setCoin(toss);

      setTotal(total);
      if (toss === 1 && head < 6) {
        head++;
        setHead(head);
        setTossArray([...tossArray, 1]);
      } else if (toss === 1 && head === 6) {
        tail++;
        setTail(tail);
        setTossArray([...tossArray, 0]);
      }
      if (toss === 0 && tail < 4) {
        tail++;
        setTail(tail);
        setTossArray([...tossArray, 0]);
      } else if (toss === 0 && tail === 4) {
        head++;

        setHead(head);
        setTossArray([...tossArray, 1]);
      }

      setTotal(head + tail);
    }
  };
  const restart = () => {
    setCoin(0);
    setTail(0);
    setHead(0);
    setTotal(0);
    setTossArray([]);
    setNewGame(false);
  };

  return (
    <div className="w-full h-full center flex-col  bg-teal-500">
      <div className="gif center text-4xl w-[10rem] h-[5rem] bg-white m-8">
        <h2>Coin:{coin}</h2>
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
        className={`bg-blue-400 text-2xl text-white p-2 m-3 ${
          newGame ? "opacity-100" : "opacity-40"
        }`}
        onClick={restart}
        disabled={!newGame}
      >
        New Game
      </button>
      {/* <Trades /> */}
    </div>
  );
};

export default CoinToss;
