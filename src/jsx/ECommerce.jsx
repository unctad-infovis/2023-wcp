import React, { /* useState, */useEffect } from 'react';
import '../styles/styles.less';

// Load helpers.
import IndicatorContainer from './components/IndicatorContainer.jsx';
// import formatNr from './helpers/FormatNr.js';
// import roundNr from './helpers/RoundNr.js';

// const appID = '#app-root-2023-wcp';

function App() {
  // Data states.
  // const [data, setData] = useState(false);

  useEffect(() => {
    // const data_file = (window.location.href.includes('unctad.org')) ? '/sites/default/files/data-file/2023-wcp.json' : './assets/data/data.json';
    try {
      // fetch(data_file)
      //   .then((response) => {
      //     if (!response.ok) {
      //       throw Error(response.statusText);
      //     }
      //     return response.text();
      //   })
      //   .then(body => setData(JSON.parse(body)));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="app">
      <div className="content_container">
        {/* On the web: E-commerce */}
        {/* In the excel: Electronic commerce */}
        <IndicatorContainer consumer_protection_law={[67, 105]} policy_making_powers={[64, 88]} enforcement_powers={[69, 96]} cooperation_agreements={[35, 57]} education_initiatives={[64, 95]} title="E-commerce" titles={['Countries with consumer protection law on e-commerce', 'Countries with policy making powers on e-commerce', 'Countries with enforcement powers on e-commerce', 'Countries having cooperation agreements on e-commerce', 'Countries having education initiatives on e-commerce']} />
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
