import './Header.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">

        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#">Freiwilligenarbeit mit Geflüchteten</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">BAS (2022)</a>
          </li>
        </ul>
      </div>
  </nav>
  );
}

export default Header;


