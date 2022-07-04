import "./App.css";
import JanaLogin from "./pages/JanaLogin";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Expanded from "./pages/Expanded";
import Example from "./pages/Example";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Switch> */}
          {/* <Route path="/">
            <JanaLogin />
          </Route> 
           <Route path="/home">
            <HomePage/>
          </Route> 
          <Route path="/expand">
            <Expanded />
          </Route> */}
          {/* <Route path="/example"> */}
            <Example />
          {/* </Route>
        </Switch>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
