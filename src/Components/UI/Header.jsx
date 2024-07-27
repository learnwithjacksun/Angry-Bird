import PropTypes from "prop-types";
import Icon from "../Icon";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";
import Null from "./Null";
import WebApp from "@twa-dev/sdk";
const f = new Intl.NumberFormat("en-US");
const Header = ({ increaseCount, coin, count, clearCoin }) => {
  const [showModal, setShowModal] = useState(false);
  const [connect, setConnect] = useState(false)
  const [user, setUser] = useState()
  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUser(WebApp.initDataUnsafe)
    }
  },[])
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowModal(true);
      const timer2 = setTimeout(() => {
        setShowModal(false);
      }, 2500);

      return () => clearTimeout(timer2);
    }, 2500);

    return () => clearTimeout(timer1);
  }, []);

  return (
    <>
      <header className="flex flex-col">
        <div className="flex justify-between items-center pb-4 border-b border-medium">
          <h2 className="font-medium text-base">
            Hey, <span className="text-sub">{user? user:"Angry Bird"}</span>
          </h2>
          <button
          onClick={() => setConnect(true)}
            className="btn-primary px-4 py-1 rounded-full">
            <div>
              <Icon label="wallet" style="text-xl" />
            </div>
            <span>Collect Wallet</span>
          </button>
        </div>
        <div className="text-center mt-4 relative">
          <h1 className="text-3xl md:text-4xl">🏆{f.format(coin)}</h1>
          <div
            onClick={increaseCount}
            className="bg-medium flex cursor-pointer items-center justify-center border border-light mt-2 py-1 w-[70%] mx-auto rounded-3xl"
          >
            <span className="text-sub text-sm">Amount per tap: +{count}</span>
          </div>
          <div onClick={clearCoin} className="absolute right-2 top-0 h-10 w-10 flex items-center justify-center bg-medium rounded-full border border-light">
            <Icon label="refresh" style="text-sub" />
          </div>
        </div>
      </header>

      <AnimatePresence>
        {showModal && <Modal toggleModal={() => setShowModal(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {connect && <Null toggleModal={() => setConnect(false)} />}
      </AnimatePresence>
    </>
  );
};

Header.propTypes = {
  increaseCount: PropTypes.func.isRequired,
  coin: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  clearCoin: PropTypes.func.isRequired
};

export default Header;
