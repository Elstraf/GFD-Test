import { Link, NavLink } from "react-router-dom";
import SidebarStyles from "../styles/sidebar.module.css";
export default function Sidebar() {
  return (
    <>
      <div className={SidebarStyles.box}>
        <h1>Links</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/employee">Employee</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
