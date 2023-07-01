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
        <IndicatorList value={consumer_protection_law} text="Countries with consumer protection law on Sustainable consumption" />
        <IndicatorList value={policy_making_powers} text="Countries with policy making powers on Sustainable consumption" />
        <IndicatorList value={enforcement_powers} text="Countries with enforcement powers on Sustainable consumption" />
        <IndicatorList value={cooperation_agreements} text="Countries having cooperation agreements on sustainable consumption" />
        <IndicatorList value={education_initiatives} text="Countries having education initiatives on Sustainable consumption" />
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
