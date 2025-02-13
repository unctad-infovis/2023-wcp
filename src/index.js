import React from 'react';

import { createRoot } from 'react-dom/client';

import App from './jsx/App.jsx';
import AppECommerce from './jsx/ECommerce.jsx';
import AppProductSafety from './jsx/ProductSafety.jsx';

const container = document.getElementById('app-root-2023-wcp');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

const container_ecommerce = document.getElementById('app-root-2023-wcp_ecommerce');
if (container_ecommerce) {
  const root_ecommerce = createRoot(container_ecommerce);
  root_ecommerce.render(<AppECommerce />);
}

const container_productsafety = document.getElementById('app-root-2023-wcp_productsafety');
if (container_productsafety) {
  const root_productsafety = createRoot(container_productsafety);
  root_productsafety.render(<AppProductSafety />);
}
