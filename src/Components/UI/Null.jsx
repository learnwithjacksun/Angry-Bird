import { motion } from "framer-motion";
import PropTypes from "prop-types";
const Null = ({toggleModal}) => {
  return (
    <>
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
        className="h-screen fixed inset-0 z-20">
        <div onClick={toggleModal} className="h-screen absolute w-full bg-[rgba(0,0,0,0.5)]">
          <div className="bg-medium absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl p-4 border border-light w-[90%] md:w-[300px] mx-auto z-[999px]">
            <h1 className="text-2xl mb-2 font-semibold">No vex!🙏</h1>
            <p>
              This <span className="text-sub">feature</span> is not available
              yet.
            </p>
            <div className="flex justify-end">
              <button onClick={toggleModal} className="btn bg-light p-2 rounded-lg px-4">
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
Null.propTypes = {
  toggleModal: PropTypes.func,
};

export default Null;
