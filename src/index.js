import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

WebFont.load({
  google: {
    families: ['Ubuntu:400', 'sans-serif']
  }
});

const Index = () => {
  return(
    <>
      <App />

      
    </>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'));
