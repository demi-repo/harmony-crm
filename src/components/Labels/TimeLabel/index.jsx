import React from "react";
import InlineSVG from "react-inlinesvg";
import PropTypes from "prop-types";

import clockIcon from "../../../assets/icons/clock.svg";

const TimeLabel = ({ content, color }) => {
  return (
    <div className={"time-label " + color}>
      <InlineSVG src={clockIcon} />
      <div className="time-label-content">{content}</div>
    </div>
  );
};

TimeLabel.propTypes = {
  content: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default TimeLabel;
