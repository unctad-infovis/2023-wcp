import React, { /* useState, */useEffect } from 'react';
import '../styles/styles.less';

// Load helpers.
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
      <h3>Highlighted topics</h3>
      <div className="container">
        <div className="indicator_container">
          <h4>Consumer Product Safety</h4>
          <ul className="indicator_list">
            <li>
              <span className="value">
                <span className="number high">72</span>
              </span>
              {' '}
              countries with consumer protection law
            </li>
            <li>
              <span className="value">
                <span className="number high">54</span>
              </span>
              {' '}
              countries with policy making powers
            </li>
            <li>
              <span className="value">
                <span className="number high">61</span>
              </span>
              {' '}
              countries with enforcement powers
            </li>
            <li>
              <span className="value">
                <span className="number medium">31</span>
              </span>
              {' '}
              countries with cooperation agreements
            </li>
            <li>
              <span className="value">
                <span className="number high">78</span>
              </span>
              {' '}
              countries with education initiatives
            </li>
          </ul>
          <p>Protecting consumers from hazards to their health and safety is one of the central United Nations Guidelines for Consumer Protection principles. Section B of the Guidelines are entirely dedicated to consumers&apos; health and safety regulations and policy.</p>
          <p>Product safety is of utmost importance in today&apos;s market, ensuring the well-being of individuals and safeguarding their interests. It encompasses a range of measures and regulations implemented to mitigate potential risks associated with consumer goods. Manufacturers must adhere to stringent safety standards throughout production, from design to distribution. This includes conducting thorough testing, risk assessments, and quality control to identify and address potential hazards. Additionally, regulatory bodies and consumer protection agencies are crucial in monitoring and enforcing compliance, imposing penalties for non-compliance and facilitating product recalls when necessary. By prioritizing consumer product safety, we can enhance public trust, promote responsible manufacturing practices, and ultimately provide consumers with peace of mind when using the products they rely on daily.</p>
          <p><a href="https://unctad.org/Topic/Competition-and-Consumer-Protection/Working-group-on-consumer-product-safety">For more information on this topic please see UNCTAD Working Group on consumer product safety</a></p>
        </div>
        <div className="indicator_container">
          <h4>E-commerce</h4>
          <ul className="indicator_list">
            <li>
              <span className="value">
                <span className="number high">64</span>
              </span>
              {' '}
              countries with consumer protection law
            </li>
            <li>
              <span className="value">
                <span className="number high">64</span>
              </span>
              {' '}
              countries with policy making powers
            </li>
            <li>
              <span className="value">
                <span className="number high">68</span>
              </span>
              {' '}
              countries with enforcement powers
            </li>
            <li>
              <span className="value">
                <span className="number medium">34</span>
              </span>
              {' '}
              countries with cooperation agreements
            </li>
            <li>
              <span className="value">
                <span className="number high">66</span>
              </span>
              {' '}
              countries with education initiatives
            </li>
          </ul>
          <p>Consumer protection in e-commerce is critical to ensuring a fair and secure online marketplace for consumers. The United Nations Guidelines for Consumer Protection serve as a valuable framework for establishing and maintaining robust consumer safeguards in the digital realm. The Guidelines emphasize the importance of transparency, information disclosure, and fair business practices in e-commerce transactions. They advocate for clear and easily accessible terms and conditions, reliable product information, secure payment methods, and accessible customer support channels.</p>
          <p><a href="https://unctad.org/Topic/Competition-and-Consumer-Protection/working-group-on-consumer-protection-in-e-commerce">For more information on this topic please see: UNCTAD Working Group on consumer protection in e-commerce.</a></p>
        </div>
        <div className="indicator_container">
          <h4>Consumer Financial Services</h4>
          <ul className="indicator_list">
            <li>
              <span className="value">
                <span className="number high">57</span>
              </span>
              {' '}
              countries with consumer protection law
            </li>
            <li>
              <span className="value">
                <span className="number medium">37</span>
              </span>
              {' '}
              countries with policy making powers
            </li>
            <li>
              <span className="value">
                <span className="number medium">37</span>
              </span>
              {' '}
              countries with enforcement powers
            </li>
            <li>
              <span className="value">
                <span className="number low">16</span>
              </span>
              {' '}
              countries with cooperation agreements
            </li>
            <li>
              <span className="value">
                <span className="number medium">49</span>
              </span>
              {' '}
              countries with education initiatives
            </li>
          </ul>
          <p>The United Nations Guidelines for consumer protection (UNGCP) provide concrete recommendations to protect consumers of financial services, recognizing that oversight and enforcement institutions are needed to ensure that healthy financial markets work for the benefit of consumers.</p>
          <p>Consumer financial services encompass a wide range of products and services designed to assist individuals in managing their finances effectively. These services include banking, loans, credit cards, insurance, and investment options. The primary goal of consumer financial services is to provide individuals with the tools and resources needed to make informed financial decisions, achieve financial stability, and fulfil their short-term and long-term goals. These services often involve financial institutions such as banks, credit unions, and investment firms, which offer various products tailored to meet the diverse needs of consumers. Consumer financial services also involve educating individuals about financial literacy, helping them understand concepts such as budgeting, saving, and investing. By availing themselves of these services, consumers can enhance their economic well-being and work towards a secure and prosperous future.</p>
        </div>
        <div className="indicator_container">
          <h4>Sustainable consumption</h4>
          <ul className="indicator_list">
            <li>
              <span className="value">
                <span className="number medium">32</span>
              </span>
              {' '}
              countries with consumer protection law
            </li>
            <li>
              <span className="value">
                <span className="number medium">40</span>
              </span>
              {' '}
              countries with policy making powers
            </li>
            <li>
              <span className="value">
                <span className="number medium">35</span>
              </span>
              {' '}
              countries with enforcement powers
            </li>
            <li>
              <span className="value">
                <span className="number low">18</span>
              </span>
              {' '}
              countries with cooperation agreements
            </li>
            <li>
              <span className="value">
                <span className="number medium">39</span>
              </span>
              {' '}
              countries with education initiatives
            </li>
          </ul>
          <p>Sustainable consumption, as highlighted by the United Nations Guidelines for Consumer Protection, is a fundamental approach to addressing environmental concerns and promoting responsible consumer behaviour. It emphasizes the need for individuals to make conscious choices that minimize their negative impact on the environment. The guidelines stress the importance of providing accurate and reliable information to consumers regarding the environmental attributes of products and services. This includes disclosing energy efficiency, carbon footprint, and other relevant sustainability indicators. Furthermore, the guidelines encourage the development and promotion of eco-friendly products and services, while discouraging deceptive marketing practices that may mislead consumers about the environmental benefits of a product. By embracing sustainable consumption practices, individuals can contribute to preserving natural resources, reducing waste generation, and overall environmental sustainability, leading to a healthier and more equitable future for all.</p>
        </div>

      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
