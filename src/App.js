import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Books from "./components/Books";
import Create from "./components/Create";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Books} />
          <Route path="/create" exact component={Create} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
