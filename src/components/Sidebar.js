import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div>
        <h1>Links</h1>
        <nav>
          <NavLink to="/employee">Employee</NavLink>
        </nav>
      </div>
    </>
  );
}
