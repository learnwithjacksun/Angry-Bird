import { useState } from "react";
import Icon from "../Icon";
import Null from "./Null";
import { AnimatePresence } from "framer-motion";
const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const items = [
    { icon: "check_circle", label: "Tasks" },
    { icon: "add", label: "Tap" },
    { icon: "bomb", label: "Boost" },
    { icon: "leaderboard", label: "Stats" },
  ];
  
  return (
    <>
      <footer className="flex items-center justify-center flex-col">
        <ul className="flex items-center justify-center bg-medium p-2 gap-2 rounded-2xl shadow-2xl border border-light">
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => setShowModal(true)}
              className="flex flex-col items-center justify-center rounded-lg bg-light text-sm h-14 w-14"
            >
              <Icon label={item.icon} style="text-xl" />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-sub mt-2">built with 💘 by <a className="text-primary" href="https://github.com/learnwithjacksun/Angry-Bird">Gift Jacksun <i className="fa-brands fa-github"></i></a></p>
      </footer>
      <AnimatePresence>
        {showModal && <Null toggleModal={() => setShowModal(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Footer;
