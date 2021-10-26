import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { View } from "./components/View";
import { ThankyouPage } from "./ThankYou";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/thankyou">
          <ThankyouPage />
        </Route>
        <View />
      </Switch>
    </Router>
  );
}

export default App;
