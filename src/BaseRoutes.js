import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Sidebar from "./components/Sidebar";
import EmployeeRoutes from "./routes/EmployeeRoutes";
import baseStyles from "./styles/base.module.css";

export default function BaseRoutes() {
  return (
    <>
      <div className={baseStyles.box}>
        <Router>
          <div className={baseStyles.Sidebar}>
            <Sidebar />
          </div>
          <div className={baseStyles.content}>
            <Route
              render={({ location }) => (
                <TransitionGroup className="transition-group">
                  <CSSTransition
                    key={location.key}
                    timeout={300}
                    classNames="fade"
                  >
                    <section className="route-section">
                      <Switch location={location}>
                        <Route
                          path="/employee"
                          component={(route) => (
                            <EmployeeRoutes route={route} />
                          )}
                        />
                      </Switch>
                    </section>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
          </div>
        </Router>
      </div>
    </>
  );
}
