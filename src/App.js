import "./App.css"

import React from "react"
import Home from "./templates/home"
import { NavLink, Switch, Route } from "react-router-dom"

const App = () => (
  <div className="app mdl-layout mdl-js-layout">
    <header className="mdl-layout__header mdl-layout__header--transparent">
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title">CV:n 💜 Tillsammans</span>
        <div className="mdl-layout-spacer" />
        <Navigation />
      </div>
    </header>
    <div className="mdl-layout__drawer">
      <span className="mdl-layout-title">CV:n Tillsammans</span>
      <nav className="mdl-navigation">
        <NavLink className="mdl-navigation__link" to="">
          Link
        </NavLink>
        <NavLink className="mdl-navigation__link" to="/about">
          About
        </NavLink>
        <NavLink className="mdl-navigation__link" to="/component">
          Component
        </NavLink>
      </nav>
    </div>
    <Main />
  </div>
)

const Navigation = () => (
  <nav className="mdl-navigation">
    <NavLink className="mdl-navigation__link" to="">
      Link
    </NavLink>
    <NavLink className="mdl-navigation__link" to="">
      Link
    </NavLink>
    <NavLink className="mdl-navigation__link" to="">
      Link
    </NavLink>
    <NavLink className="mdl-navigation__link" to="">
      Link
    </NavLink>
  </nav>
)

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
)

const About = () => (
  <div className="about">
    <h1>About Me</h1>
    <p>
      Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident
      corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum
      molestias?
    </p>
    <p>
      Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident
      corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum
      molestias?
    </p>
  </div>
)

const Contact = () => (
  <div className="contact">
    <h1>Contact Me</h1>
    <p>
      You can reach me via email: <strong>hello@example.com</strong>
    </p>
  </div>
)

export default App
