import WebApp from "@twa-dev/sdk";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
const Modal = ({ toggleModal }) => {
  const [user, setUser] = useState()
  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUser(WebApp.initDataUnsafe.user)
    }
  },[])

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="h-screen fixed inset-0 flex items-end justify-center z-20"
      >
        <div
          onClick={toggleModal}
          className="h-screen absolute w-full bg-[rgba(0,0,0,0.5)]"
        >
          <div className="bg-medium absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl p-4 border border-light w-[90%] md:w-[300px] mx-auto z-[999px]">
            <div className="font-semibold">
              <p className="text-xl">Hello, <span className="text-sub">{user? `${user.first_name} ${user.last_name}` : "User"}</span></p>
            </div>
            <p className="py-4">
              Click on{" "}
              <span className="text-sub bg-light px-1 rounded-full">Amount Per Tap</span> to
              increase your tapping power!
            </p>
            <div className="flex justify-end">
              <button
                onClick={toggleModal}
                className="btn bg-light p-2 rounded-lg px-4"
              >
                <span>Okay</span>
                <span>👍</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
Modal.propTypes = {
  toggleModal: PropTypes.func,
};

export default Modal;
