import { Switch, Route } from "react-router-dom";
import Form from "./pages/Form";
import Home from "./pages/Home";

function App() {
  return (
    <div className="containerPrincipal">
      <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/home/:id" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
