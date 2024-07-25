import { motion } from "framer-motion"
import PropTypes from "prop-types";
import bird from "../../assets/angrybird.png"
const Tap = ({handleShowCount, showCounts}) => {
  return (
      <>
      <div className="flex items-center justify-center">
          <div className="relative">
            <img
            src={bird}
            width={200}
              alt="Coin Tap"
              className="active:scale-75 duration-200"
              onClick={handleShowCount}
            />
            {showCounts.map((showCount) => (
              <motion.div
                key={showCount.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`absolute ${showCount.position} text-4xl font-bold text-yellow-500`}
                style={{ top: Math.random() * 50 + "%" }}
              >
                +{showCount.count}
              </motion.div>
            ))}
          </div>
        </div>
      </>
  )
}
Tap.propTypes = {
    handleShowCount: PropTypes.func,
    showCounts: PropTypes.array
}

export default Tap