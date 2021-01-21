import React from 'react';
import './App.css';

const metasDoAno = ['Estudar', 'Estudar estudar muito', 'Estudar mais']

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

class App extends React.Component {
  render() {
    return ( <div className="App">{ metasDoAno.map((metas ) => task(metas))}</div> )
  }
}








export default App;
