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
        {/* On the web: Consumer product safety */}
        {/* In the excel: Physical safety */}
        {/* In the excel: Product hazard */}
        <IndicatorContainer consumer_protection_law={[74, 105]} policy_making_powers={[56, 88]} enforcement_powers={[63, 96]} cooperation_agreements={[31, 57]} education_initiatives={[76, 95]} title="Consumer product safety" text={['']} titles={['Countries with consumer protection law on Product safety', 'Countries with policy making powers on Product safety', 'Countries with enforcement powers on Product safety', 'Countries having cooperation agreements on Product Safety', 'Countries having education initiatives on Product safety']} />
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
