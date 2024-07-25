import PropTypes from "prop-types";
import Icon from "../Icon";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";

const f = new Intl.NumberFormat("en-US");

const Header = ({ increaseCount, coin, count }) => {
  const [showModal, setShowModal] = useState(false);

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
          <h2 className="font-medium text-xl">
            Hey, <span className="text-sub">Angry Bird!</span>
          </h2>
          <button className="btn-primary px-4 py-1 rounded-full">
            <div>
              <Icon label="wallet" style="text-xl" />
            </div>
            <span>Collect Wallet</span>
          </button>
        </div>
        <div className="text-center mt-4 ">
          <h1 className="text-3xl md:text-4xl">🏆{f.format(coin)}</h1>
          <div
            onClick={increaseCount}
            className="bg-medium flex cursor-pointer items-center justify-center border border-light mt-2 py-1 w-1/2 mx-auto rounded-3xl"
          >
            <span className="text-sub">Amount per tap: +{count}</span>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {showModal && <Modal toggleModal={() => setShowModal(false)} />}
      </AnimatePresence>
    </>
  );
};

Header.propTypes = {
  increaseCount: PropTypes.func.isRequired,
  coin: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default Header;
