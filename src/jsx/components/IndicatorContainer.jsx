import React from 'react';
import PropTypes from 'prop-types';

// https://github.com/remarkjs/react-markdown
import ReactMarkdown from 'react-markdown';

// Load helpers.
import IndicatorList from './IndicatorList.jsx';

function IndicatorContainer({
  consumer_protection_law,
  cooperation_agreements,
  education_initiatives,
  enforcement_powers,
  policy_making_powers,
  text,
  title,
  titles
}) {
  return (
    <div className="indicator_container">
      <h4>{title}</h4>
      <ul className="indicator_list">
        <IndicatorList value={consumer_protection_law} text={titles[0]} />
        <IndicatorList value={policy_making_powers} text={titles[1]} />
        <IndicatorList value={enforcement_powers} text={titles[2]} />
        <IndicatorList value={cooperation_agreements} text={titles[3]} />
        {education_initiatives && <IndicatorList value={education_initiatives} text={titles[4]} />}
      </ul>
      {text && text.map((paragraph) => <ReactMarkdown key={paragraph}>{paragraph}</ReactMarkdown>)}
    </div>
  );
}

IndicatorContainer.propTypes = {
  consumer_protection_law: PropTypes.instanceOf(Array).isRequired,
  cooperation_agreements: PropTypes.instanceOf(Array).isRequired,
  policy_making_powers: PropTypes.instanceOf(Array).isRequired,
  enforcement_powers: PropTypes.instanceOf(Array).isRequired,
  education_initiatives: PropTypes.oneOfType([
    PropTypes.instanceOf(Array),
    PropTypes.bool
  ]).isRequired,
  text: PropTypes.instanceOf(Array).isRequired,
  title: PropTypes.string.isRequired,
  titles: PropTypes.instanceOf(Array).isRequired,
};

IndicatorContainer.defaultProps = {
};

export default IndicatorContainer;
