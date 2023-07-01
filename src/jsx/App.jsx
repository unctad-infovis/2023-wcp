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
      <h2>Highlighted topics</h2>
      <p>Consumer law and policy is a vast and multidisciplinary field that encompasses a wide range of subjects.</p>
      <p>This section focuses on consumer product safety, the promotion of sustainable consumption, and e-commerce and financial services.</p>
      <div className="container">
        <IndicatorContainer consumer_protection_law={[72, 103]} policy_making_powers={[54, 87]} enforcement_powers={[61, 95]} cooperation_agreements={[31, 57]} education_initiatives={[78, 98]} title="Consumer product safety" text={['Protecting consumers from hazards to their health and safety is a basic consumer right as recognized in Section B of the UN Guidelines, which is dedicated to consumers\' health and safety regulations and policies.', 'All consumers should have access to non-hazardous products. The protection of consumers from hazards to their health and safety is a priority for UNCTAD member States.', 'For more on this topic, please see the work done by the [UNCTAD Working Group on consumer product safety](https://unctad.org/Topic/Competition-and-Consumer-Protection/Working-group-on-consumer-product-safety).']} titles={['Countries with consumer protection law on Product safety', 'Countries with policy making powers on Product safety', 'Countries with enforcement powers on Product safety', 'Countries having cooperation agreements on Product Safety', 'Countries having education initiatives on Product safety']} />
        <IndicatorContainer consumer_protection_law={[32, 103]} policy_making_powers={[40, 87]} enforcement_powers={[35, 95]} cooperation_agreements={[18, 57]} education_initiatives={[39, 98]} title="Sustainable consumption" text={['Sustainable consumption includes meeting the needs of present and future generations for goods and services in ways that are economically, socially and environmentally sustainable. UNCTAD is one of the lead organizations for the One Planet Network Consumer Information for Sustainable Consumption and Production.', 'To learn more on this topic, please see: [Consumer Information for SCP | One Planet network](https://www.oneplanetnetwork.org/programmes/consumer-information-scp) and the following publications: [Competition and Consumer Protection Policies for Sustainability](https://unctad.org/publication/competition-and-consumer-protection-policies-sustainability), [Achieving the Sustainable Development Goals through Consumer Protection](https://unctad.org/publication/achieving-sustainable-development-goals-through-consumer-protection)']} titles={['Countries with consumer protection law on Sustainable consumption', 'Countries with policy making powers on Sustainable consumption', 'Countries with enforcement powers on Sustainable consumption', 'Countries having cooperation agreements on sustainable consumption', 'Countries having education initiatives on Sustainable consumption']} />
        <IndicatorContainer consumer_protection_law={[64, 103]} policy_making_powers={[64, 87]} enforcement_powers={[68, 95]} cooperation_agreements={[34, 57]} education_initiatives={[66, 98]} title="E-commerce" text={['E-commerce, which includes mobile commerce, has become increasingly relevant to consumers worldwide. The opportunities it offers should be harnessed to help facilitate economic development and growth based on emerging network technologies of computers, mobile phones and connected devices that can promote consumer welfare.', 'For more on this topic, please see the work done by [the UNCTAD Working Group on consumer protection in e-commerce](https://unctad.org/Topic/Competition-and-Consumer-Protection/working-group-on-consumer-protection-in-e-commerce).']} titles={['Countries with consumer protection law on e-commerce', 'Countries with policy making powers on e-commerce', 'Countries with enforcement powers on e-commerce', 'Countries having cooperation agreements on e-commerce', 'Countries having education initiatives on e-commerce']} />
        <IndicatorContainer consumer_protection_law={[57, 103]} policy_making_powers={[37, 87]} enforcement_powers={[37, 95]} cooperation_agreements={[16, 57]} education_initiatives={[49, 98]} title="Consumer financial services" text={['Consumer confidence and trust in a well-functioning market for financial services promotes financial stability, growth, efficiency and innovation over the long term. Recent financial crises have placed a renewed focus on consumer protection, calling for effective regulatory, supervisory and enforcement frameworks in the financial sector to contribute to consumer welfare.', 'For more information on information on this topic, please see the document [Financial consumer protection, including financial education and literacy](https://unctad.org/system/files/official-document/cicplpd29_en.pdf).']} titles={['Countries with consumer protection law on financial services', 'Countries with policy making powers on financial services', 'Countries with enforcement powers on financial services', 'Countries having cooperation agreements on financial services', 'Countries having education initiatives on financial services']} />
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
