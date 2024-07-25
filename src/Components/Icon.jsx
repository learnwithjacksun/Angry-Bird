import PropTypes from "prop-types";

const Icon = ({ label, style }) => {
  return (
    <>
      <span className={`material-symbols-rounded text-subtext ${style}`}>
        {label}
      </span>
    </>
  );
};

Icon.propTypes = {
  label: PropTypes.string,
  style: PropTypes.string,
};

export default Icon;
