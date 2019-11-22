import React from 'react';
import IndexPage from './components/pages/index.page';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import storeConfigure from "./redux/stores/index";
import { Provider } from "react-redux";

const store = storeConfigure();
const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={IndexPage} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
