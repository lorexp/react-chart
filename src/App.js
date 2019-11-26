import React from 'react';

import Header from './components/Header';
import  ExampleChart from './components/Chart';

import moment from 'moment';

import 'moment/locale/pt-br';


const data = [
    [{ type: 'string', label: 'Mês'},
    'Percentual de Lucro no mês'
    ],
    [moment("1", "MM").format('MMMM'), 1],
    [moment("2", "MM").format('MMMM'), 5],
    [moment("3", "MM").format('MMMM'), 4],
    [moment("4", "MM").format('MMMM'), 10],
    [moment("5", "MM").format('MMMM'), 11],
    [moment("6", "MM").format('MMMM'), 120],
    [moment("7", "MM").format('MMMM'), 1],
    [moment("8", "MM").format('MMMM'), 1],
    [moment("9", "MM").format('MMMM'), 1],
    [moment("10", "MM").format('MMMM'), 1],
    [moment("11", "MM").format('MMMM'), 1],
    [moment("12", "MM").format('MMMM'), null],
  ];

const App = () => (
  <div className="App">
    <Header />
    <ExampleChart data={data}/>
  </div>
);

export default App;
