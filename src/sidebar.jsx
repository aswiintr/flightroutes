import { useState } from "react";
import logo from "./logo.svg";
import "./sidebar.css"; // Fixed the import path and added quotes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const navItems = ["home"]; // Fixed the missing '=' sign

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Fixed the variable name

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}> {/* Fixed the className */}
      <div className="sidebar-inner">
        <header className="sidebar-header">
        <button
  type="button"
  className="sidebar-burger"
  onClick={() => setIsOpen(!isOpen)}
>
  <span>{isOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}</span>
</button>

          <img src={logo} className="sidebar-logo" alt="Logo" /> {/* Fixed the curly braces */}
        </header>
        <nav className="sidebar-menu">
          {navItems.map((item) => (
           <button className="sidebar-button" key="home">
           <span><FontAwesomeIcon icon={faHome} /></span>
           <span>Home</span>
         </button>
         
          ))}
        </nav>
      </div>
    </aside>
  );
};
export default Sidebar;