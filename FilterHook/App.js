"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Filter from './Filter';

const wordsList = ['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate'];

ReactDOM.render(
  <Filter
  wordsList={wordsList}
  />
  , document.getElementById('container')
);

