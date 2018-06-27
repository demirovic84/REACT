import { Route } from "react-router";
import React from "react";

import App from "./containers/App";

//Redux Smart
import AboutPage from "./containers/AboutPage";
import HomePage from "./containers/HomePage";

//Redux Dumb
import PortfolioPage from "./components/Portfolio";
import ServicesPage from "./components/Services";
import EducationPage from "./components/Education";
import error404 from "./components/404";

export default (
  <Route name="app" path="/" component={App}>
      <Route path="hem" component={HomePage} />
      <Route path="portfolio" component={PortfolioPage} />
      <Route path="services" component={ServicesPage} />
      <Route path="om-mig" component={AboutPage} />
      <Route path="utbildning" component={EducationPage} />
      <Route path="*" component={error404}/>
  </Route>
);
