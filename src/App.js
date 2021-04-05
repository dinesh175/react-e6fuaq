import React from "react";
import "./style.css";
import Login from "./component/Login";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink activeClassName="active" to="/login">
              Login
            </NavLink>
            <NavLink activeClassName="active" to="/Signup">
              Signup
            </NavLink>

            
          </div>
          <div className="content">
            <Switch>
              <Route path="/login" component={Login} />
               <Route path="/Signup" component={Signup} />
             
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
