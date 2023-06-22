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
  title
}) {
  return (
    <div className="indicator_container">
      <h4>{title}</h4>
      <ul className="indicator_list">
        <IndicatorList value={consumer_protection_law} text="countries with consumer protection law" respondents={108} />
        <IndicatorList value={policy_making_powers} text="countries with policy making powers" respondents={108} />
        <IndicatorList value={enforcement_powers} text="countries with enforcement powers" respondents={108} />
        <IndicatorList value={cooperation_agreements} text="countries with cooperation agreements" respondents={108} />
        <IndicatorList value={education_initiatives} text="countries with education initiatives" respondents={108} />
      </ul>
      {text && text.map((paragraph) => <ReactMarkdown>{paragraph}</ReactMarkdown>)}
    </div>
  );
}

IndicatorContainer.propTypes = {
  consumer_protection_law: PropTypes.number.isRequired,
  cooperation_agreements: PropTypes.number.isRequired,
  education_initiatives: PropTypes.number.isRequired,
  enforcement_powers: PropTypes.number.isRequired,
  policy_making_powers: PropTypes.number.isRequired,
  text: PropTypes.instanceOf(Array).isRequired,
  title: PropTypes.string.isRequired
};

IndicatorContainer.defaultProps = {
};

export default IndicatorContainer;
