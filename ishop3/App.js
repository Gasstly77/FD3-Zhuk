import React from 'react';
import ReactDOM from 'react-dom';

import ShopList from './src/components/Shop/ShopList.jsx';

let goodsArr=require('./src/data/product.json');
let shopName='LIDL';

ReactDOM.render(
  <ShopList
    shopName={shopName}
    goodsArr={goodsArr}
  />
  , document.getElementById('container') 
);
