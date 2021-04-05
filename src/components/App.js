import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "../components/ui/Theme";
import Header from '../components/ui/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/Services" component={() => <div>Services</div>} />       
          <Route exact path="/About" component={() => <div>About</div>} />
          <Route exact path="/Portfolio" component={() => <div>Portfolio</div>} />
          <Route exact path="/Contact" component={() => <div>Contact</div>} />
        </Switch>
      </Router>
        hi
    </ThemeProvider>
  );
}

export default App;

