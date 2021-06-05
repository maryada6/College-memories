import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderPart from "./components/header"
import FooterPart from "./components/footer"
import PhotoContainer from "./components/PhotoContainer"
import Error from "./components/error"

function App() {
  return (
    <Router>
      <HeaderPart/>
      <Switch>
        <Route exact path="/">
          <PhotoContainer title="image" number={26} />
        </Route>
        <Route path="/*">
          <Error />
        </Route>
      </Switch>
      <FooterPart/>
    </Router>
  );
}

export default App;
