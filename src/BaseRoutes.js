import axios from "axios";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Sidebar from "./components/Sidebar";
import Home from "./pages/home/Home";
import EmployeeRoutes from "./routes/EmployeeRoutes";
// const getData = async () => {
//   const res = axios.get("http://localhost:3004/employees");
//   res.then((result) => {
//     console.log(result);
//   });
// };

// useEffect(() => {
//   getData();
// }, []);

export default function BaseRoutes() {
  return (
    <>
      <Router>
        <Sidebar />
        <Route
          render={({ location }) => (
            <TransitionGroup className="transition-group">
              <CSSTransition key={location.key} timeout={300} classNames="fade">
                <section className="route-section">
                  <Switch location={location}>
                    <Route
                      path="/employee"
                      component={(route) => <EmployeeRoutes route={route} />}
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
