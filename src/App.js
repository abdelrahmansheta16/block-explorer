import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlockExplorer from './components/BlockExplorer';
import BlockDetail from './components/BlockDetails';
import TransactionDetail from './components/TransactionDetails';
import AccountLookup from './components/LookUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={BlockExplorer} />
          <Route exact path="/lookup" component={AccountLookup} />
          <Route path="/block/:blockNumber" component={BlockDetail} />
          <Route path="/transaction/:transactionHash" component={TransactionDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
