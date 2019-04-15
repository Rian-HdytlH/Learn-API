import React, { Component } from 'react';
import Login from './component/login';
import Register from './component/register';
import Home from './component/Home';
import List from './component/event/list'; 
import { BrowserRouter, Route, Switch} from 'react-router-dom' 

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
	      <Switch>
	      	<Route exact path="/" component={Home} />
	      	<Route path="/masuk" component={Login} />
	      	<Route path="/daftar" component={Register} />
          <Route path="/event" component={List} />
	      </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
