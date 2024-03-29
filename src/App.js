import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Theme from "./components/Theme";

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Homepage} exact />
        </Switch>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
