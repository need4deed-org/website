import { useState } from 'react';
import './Header.css'; // Import your CSS file for styling (optional)

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          className={`navbar-toggler ${isOpen ? 'collapsed' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className={`navbar-toggler-icon ${isOpen ? 'd-none' : ''}`}>
          </span>
          <span className={`fa-solid fa-xmark ${isOpen ? '' : 'd-none'}`}>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#volunteer-opportuinities-section">Freiwilligenarbeit mit Geflüchteten</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">BAS (2022)</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
