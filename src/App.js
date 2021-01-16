

import "./App.css";
import { BrowserRouter,  NavLink, Redirect, Route, Switch } from "react-router-dom";
import { Bejelentkezes } from "./components/Bejelentkezes";
import { SzallasLista } from "./components/SzallasLista";
import { SzallasSingle } from "./components/SzallasSingle";


 function App() {
  return (
    <BrowserRouter>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={`/bejelentkezes`} activeClassName="active" exact>
                <span className="nav-link">Bejelentkezés</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/osszes-szallas`} activeClassName="active">
                <span className="nav-link">Összes szállás</span>
              </NavLink>
            </li>

          </ul>
        </div>
      </nav>
      <Switch>
        <Route path="/bejelentkezes" exact component={Bejelentkezes} />

        <Route path="/osszes-szallas" component={SzallasLista} />

        <Route path="/szallas-:szallasId">
          {(props) => <SzallasSingle id={props.match.params.szallasId} />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;