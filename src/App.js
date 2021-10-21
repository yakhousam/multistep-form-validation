import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { View } from "./components/View";
import ThankYou from "./ThankYou";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/thankyou">
          <ThankYou />
        </Route>
        <View />
      </Switch>
    </Router>
  );
}

export default App;
