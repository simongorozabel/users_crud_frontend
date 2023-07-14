import { useState } from "react";
import "./Nav.css";
const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <h1>Users Crud</h1>

      <ul className="ul">
        <li>GitHub</li>
        <li>History</li>
      </ul>

      <button onClick={() => setToggle(!toggle)} className="btn">
        <div className={toggle ? "line1 transform1" : "line1"}></div>
        <div className={toggle ? "" : "line1"}></div>
        <div className={toggle ? "line1 transform2" : "line1"}></div>
      </button>

      <div className={toggle ? "toggle nav" : "noToggle nav"}>
        <ul>
          <li>Users</li>
          <li>Nothing</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
