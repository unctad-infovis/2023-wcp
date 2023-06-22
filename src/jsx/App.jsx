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
      <p>Consumer law and policy is an incredibly vast and multidisciplinary field that encompasses a wide range of subjects. With the emergence of the Digital economy, there has been a heightened focus from experts, businesses, and consumers on particular areas within this field, such as consumer product safety and sustainability. In this context, it is essential to examine how these highlighted topics are addressed by consumer legislation, policy-making powers, enforcement measures, educational initiatives, and cooperation agreements. By exploring these aspects, we can understand the extent to which these issues are addressed and protected within the realm of consumer law and policy.</p>
      <div className="container">
        <IndicatorContainer consumer_protection_law={[72, 103]} policy_making_powers={[54, 87]} enforcement_powers={[61, 95]} cooperation_agreements={[31, 57]} education_initiatives={[78, 98]} title="Consumer Product Safety" text={['Protecting consumers from hazards to their health and safety is one of the central United Nations Guidelines for Consumer Protection principles. Section B of the Guidelines are entirely dedicated to consumers&apos; health and safety regulations and policy.', 'Product safety is of utmost importance in today&apos;s market, ensuring the well-being of individuals and safeguarding their interests. It encompasses a range of measures and regulations implemented to mitigate potential risks associated with consumer goods. Manufacturers must adhere to stringent safety standards throughout production, from design to distribution. This includes conducting thorough testing, risk assessments, and quality control to identify and address potential hazards. Additionally, regulatory bodies and consumer protection agencies are crucial in monitoring and enforcing compliance, imposing penalties for non-compliance and facilitating product recalls when necessary. By prioritizing consumer product safety, we can enhance public trust, promote responsible manufacturing practices, and ultimately provide consumers with peace of mind when using the products they rely on daily.', '[For more information on this topic please see UNCTAD Working Group on consumer product safety](https://unctad.org/Topic/Competition-and-Consumer-Protection/Working-group-on-consumer-product-safety)']} />
        <IndicatorContainer consumer_protection_law={[64, 103]} policy_making_powers={[64, 87]} enforcement_powers={[68, 95]} cooperation_agreements={[34, 57]} education_initiatives={[66, 98]} title="E-commerce" text={['Consumer protection in e-commerce is critical to ensuring a fair and secure online marketplace for consumers. The United Nations Guidelines for Consumer Protection serve as a valuable framework for establishing and maintaining robust consumer safeguards in the digital realm. The Guidelines emphasize the importance of transparency, information disclosure, and fair business practices in e-commerce transactions. They advocate for clear and easily accessible terms and conditions, reliable product information, secure payment methods, and accessible customer support channels.', 'For more information on this topic please see:  [UNCTAD Working Group on consumer protection in e-commerce](https://unctad.org/Topic/Competition-and-Consumer-Protection/working-group-on-consumer-protection-in-e-commerce).']} />
        <IndicatorContainer consumer_protection_law={[57, 103]} policy_making_powers={[37, 87]} enforcement_powers={[37, 95]} cooperation_agreements={[16, 57]} education_initiatives={[49, 98]} title="Consumer Financial Services" text={['The United Nations Guidelines for consumer protection (UNGCP) provide concrete recommendations to protect consumers of financial services, recognizing that oversight and enforcement institutions are needed to ensure that healthy financial markets work for the benefit of consumers.', 'Consumer financial services encompass a wide range of products and services designed to assist individuals in managing their finances effectively. These services include banking, loans, credit cards, insurance, and investment options. The primary goal of consumer financial services is to provide individuals with the tools and resources needed to make informed financial decisions, achieve financial stability, and fulfil their short-term and long-term goals. These services often involve financial institutions such as banks, credit unions, and investment firms, which offer various products tailored to meet the diverse needs of consumers. Consumer financial services also involve educating individuals about financial literacy, helping them understand concepts such as budgeting, saving, and investing. By availing themselves of these services, consumers can enhance their economic well-being and work towards a secure and prosperous future.']} />
        <IndicatorContainer consumer_protection_law={[32, 103]} policy_making_powers={[40, 87]} enforcement_powers={[35, 95]} cooperation_agreements={[18, 57]} education_initiatives={[39, 98]} title="Sustainable consumption" text={['Sustainable consumption, as highlighted by the United Nations Guidelines for Consumer Protection, is a fundamental approach to addressing environmental concerns and promoting responsible consumer behaviour. It emphasizes the need for individuals to make conscious choices that minimize their negative impact on the environment. The guidelines stress the importance of providing accurate and reliable information to consumers regarding the environmental attributes of products and services. This includes disclosing energy efficiency, carbon footprint, and other relevant sustainability indicators. Furthermore, the guidelines encourage the development and promotion of eco-friendly products and services, while discouraging deceptive marketing practices that may mislead consumers about the environmental benefits of a product. By embracing sustainable consumption practices, individuals can contribute to preserving natural resources, reducing waste generation, and overall environmental sustainability, leading to a healthier and more equitable future for all.']} />
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
