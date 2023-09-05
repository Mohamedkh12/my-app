import logo from "../src/icons_assets/Logo .svg";

export function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="img">
          <img src={logo} alt="" width="10%" />
        </div>
        <div className="navigation">
          <h3>Dormat Navigation</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="contact">
          <ul>
            <h5>Contact</h5>
            <li>
              <a id="nav" href="tel:+123456789">
                +126 45640847
              </a>
            </li>
            <li>
              <a id="nav" href="mailto:lettlelemon.com">
                Email
              </a>
            </li>
            <li>
              <a id="nav" href="https://example.com">
                Address
              </a>
            </li>
          </ul>
        </div>
        <div className="four">
          <ul>
            <h5>Social Media</h5>
            <li>
              <a id="nav" href="https://www.instagram.com/">
                Instagram
              </a>
            </li>
            <li>
              <a id="nav" href="https://www.linkedin.com/">
                LinkedIn
              </a>
            </li>
            <li>
              <a id="nav" href="https://www.facebook.com/">
                facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
