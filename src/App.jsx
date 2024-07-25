import { useState, useEffect } from "react";
import Header from "./Components/UI/Header";
import Tap from "./Components/UI/Tap";
import Footer from "./Components/UI/Footer";

const App = () => {
  const [coin, setCoin] = useState(() => {
    const savedCoin = localStorage.getItem("coin");
    return savedCoin !== null ? parseInt(savedCoin, 10) : 0;
  });
  const [count, setCount] = useState(1);
  const [showCounts, setShowCounts] = useState([]);

  useEffect(() => {
    localStorage.setItem("coin", coin);
  }, [coin]);

  const handleShowCount = () => {
    setCoin((prev) => prev + count);

    const newCount = {
      id: Date.now(),
      count,
      position: Math.random() > 0.5 ? "left-0" : "right-0",
    };

    setShowCounts((prev) => [...prev, newCount]);

    setTimeout(() => {
      setShowCounts((prev) => prev.filter((c) => c.id !== newCount.id));
    }, 1000);
  };

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  const clearCoin = () => {
    localStorage.removeItem("coin");
    setCoin(0);
  };

  return (
    <>
      <div className="h-screen w-[90%] md:w-[480px] mx-auto flex flex-col justify-between py-4">
        <Header increaseCount={increaseCount} coin={coin} count={count} clearCoin={clearCoin} />
        <Tap handleShowCount={handleShowCount} showCounts={showCounts} />
        <Footer />
      </div>
    </>
  );
};

export default App;
