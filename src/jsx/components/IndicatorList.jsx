import React from 'react';
import PropTypes from 'prop-types';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import IsVisible from 'react-is-visible';

function IndicatorList({
  text,
  value
}) {
  return (
    <li>
      <IsVisible once>
        {(isVisible) => (
          <svg viewBox="0 0 36 36">
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#72bf44" strokeWidth="4" strokeDasharray={`${(value[0] / value[1]) * 100}, 100`} className={`${(isVisible) ? 'animate' : ''}`} />
          </svg>
        )}
      </IsVisible>
      <span className="value">
        <span className={`number ${(value[0]) > 50 ? 'high' : ((value[0]) > 30) ? 'medium' : 'low'}`}>{value[0]}</span>
      </span>
      {' '}
      {text}
    </li>
  );
}

IndicatorList.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.instanceOf(Array).isRequired,
};

IndicatorList.defaultProps = {
};

export default IndicatorList;
