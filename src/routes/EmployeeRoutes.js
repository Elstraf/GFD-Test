import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import EmployeeCreate from "../pages/employee/create";
import EmployeeEdit from "../pages/employee/edit";
import EmployeeIndex from "../pages/employee";
import EmployeeView from "../pages/employee/view";

export default function EmployeeRoutes() {
  console.log("Inside emp routes");
  return (
    <>
      <Router>
        <Route
          render={({ location }) => (
            <TransitionGroup className="transition-group">
              <CSSTransition key={location.key} timeout={300} classNames="fade">
                <section className="route-section">
                  <Switch location={location}>
                    <Route path="/location" exact component={Location} />
                    <Route
                      path="/employee"
                      exact
                      component={(route) => <EmployeeIndex route={route} />}
                    />
                  </Switch>
                </section>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
    </>
  );
}
