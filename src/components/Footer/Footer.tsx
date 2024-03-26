import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h6>About Us</h6>
          <ul>
            <li><a href="#">The Project</a></li>
            <li><a href="#">Working with Refugees</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h6>Legal</h6>
          <ul>
            <li><a href="#">Impressum</a></li>
            <li><a href="#">Data Privacy</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h6>Contact</h6>
          <ul>
          <li>E-mail: <a href="info@need4deed.org">info@need4deed.org</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
