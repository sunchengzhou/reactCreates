import React, {Component, createContext} from 'react';

const CountContext = createContext()

class Demo extends Component {
  static contextType = CountContext;
  render() {
    const count = this.context;
    return (
      <div>{count}</div>
    )
  }
}

class Middle extends Component {
  render() {
    return (<div>jsx middle
      <Demo />
    </div>)
  }
}
function App() {
  return (
    <CountContext.Provider  value={60}>
      <Middle />
    </CountContext.Provider>
  );
}

export default App;
