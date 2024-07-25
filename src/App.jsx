import { useState } from "react";
import Icon from "./Components/Icon";
import Header from "./Components/UI/Header";
import Tap from "./Components/UI/Tap";

const items = [
  { icon: "check_circle", label: "Tasks" },
  { icon: "add", label: "Tap" },
  { icon: "bomb", label: "Boost" },
  { icon: "leaderboard", label: "Stats" },
];

const App = () => {
  const [coin, setCoin] = useState(0);
  const [count, setCount] = useState(1);
  const [showCounts, setShowCounts] = useState([]);

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
    console.log("click");
  };

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div className="h-screen w-[90%] md:w-[480px] mx-auto flex flex-col justify-between py-4">
        <Header increaseCount={increaseCount} coin={coin} count={count} />
        <Tap handleShowCount={handleShowCount} showCounts={showCounts} />
        
        <footer className="flex items-center justify-center">
          <ul className="flex items-center justify-center bg-medium p-2 gap-2 rounded-xl shadow-2xl border border-light">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex flex-col items-center justify-center rounded-lg bg-light text-sm h-14 w-14"
              >
                <Icon label={item.icon} style="text-xl" />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </>
  );
};

export default App;
