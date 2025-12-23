import React from 'react';
import ReactDOM from 'react-dom/client';
import RandomQuote from './components/RandomQuote';

// 为墨水屏优化添加的样式
const style = document.createElement('style');
style.textContent = `
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
  @media (prefers-color-scheme: dark) {
    body {
      background: #ffffff !important;
      color: #000000 !important;
    }
  }
`;
document.head.appendChild(style);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RandomQuote />
  </React.StrictMode>
);
