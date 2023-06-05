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
      <h2>Analysis per selected topics</h2>
      <div className="container">
        <div className="indicator_container">
          <h3>Product Safety</h3>
          <ul className="indicator_list">
            <li>
              <span className="value">
                <span className="number">72</span>
                {' '}
                countries
              </span>
              {' '}
              with consumer protection law
            </li>
            <li>
              <span className="value">
                <span className="number">54</span>
                {' '}
                countries
              </span>
              {' '}
              with policy making powers
            </li>
            <li>
              <span className="value">
                <span className="number">61</span>
                {' '}
                countries
              </span>
              {' '}
              with enforcement powers
            </li>
            <li>
              <span className="value">
                <span className="number">31</span>
                {' '}
                countries
              </span>
              {' '}
              with cooperation agreements
            </li>
            <li>
              <span className="value">
                <span className="number">78</span>
                {' '}
                countries
              </span>
              {' '}
              with education initiatives
            </li>
          </ul>
        </div>
        <div className="indicator_container">
          <h3>E-commerce</h3>
          <ul className="indicator_list">
            <li>
              <span className="value">
                <span className="number">64</span>
                {' '}
                countries
              </span>
              {' '}
              with consumer protection law
            </li>
            <li>
              <span className="value">
                <span className="number">64</span>
                {' '}
                countries
              </span>
              {' '}
              with policy making powers
            </li>
            <li>
              <span className="value">
                <span className="number">68</span>
                {' '}
                countries
              </span>
              {' '}
              with enforcement powers
            </li>
            <li>
              <span className="value">
                <span className="number">34</span>
                {' '}
                countries
              </span>
              {' '}
              with cooperation agreements
            </li>
            <li>
              <span className="value">
                <span className="number">66</span>
                {' '}
                countries
              </span>
              {' '}
              with education initiatives
            </li>
          </ul>
        </div>
        <div className="indicator_container">
          <h3>Financial services</h3>
          <ul className="indicator_list">
            <li>
              <span className="value">
                <span className="number">57</span>
                {' '}
                countries
              </span>
              {' '}
              with consumer protection law
            </li>
            <li>
              <span className="value">
                <span className="number">37</span>
                {' '}
                countries
              </span>
              {' '}
              with policy making powers
            </li>
            <li>
              <span className="value">
                <span className="number">37</span>
                {' '}
                countries
              </span>
              {' '}
              with enforcement powers
            </li>
            <li>
              <span className="value">
                <span className="number">16</span>
                {' '}
                countries
              </span>
              {' '}
              with cooperation agreements
            </li>
            <li>
              <span className="value">
                <span className="number">49</span>
                {' '}
                countries
              </span>
              {' '}
              with education initiatives
            </li>
          </ul>
        </div>
        <div className="indicator_container">
          <h3>Sustainable consumption</h3>
          <ul className="indicator_list">
            <li>
              <span className="value">
                <span className="number">32</span>
                {' '}
                countries
              </span>
              {' '}
              with consumer protection law
            </li>
            <li>
              <span className="value">
                <span className="number">40</span>
                {' '}
                countries
              </span>
              {' '}
              with policy making powers
            </li>
            <li>
              <span className="value">
                <span className="number">35</span>
                {' '}
                countries
              </span>
              {' '}
              with enforcement powers
            </li>
            <li>
              <span className="value">
                <span className="number">18</span>
                {' '}
                countries
              </span>
              {' '}
              with cooperation agreements
            </li>
            <li>
              <span className="value">
                <span className="number">39</span>
                {' '}
                countries
              </span>
              {' '}
              with education initiatives
            </li>
          </ul>
        </div>

      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
