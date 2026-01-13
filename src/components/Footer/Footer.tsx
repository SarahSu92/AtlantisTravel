import './Footer.scss';
import { Link } from 'react-router';

export const Footer = () => {
  return (
    <>
      <div className="contact-wrapper">
        <div className="footercontent">
          <h4 className="underline">Links</h4>
          <Link to="/" className="links">
            Home
          </Link>
          <Link to="/DestinationPage" className="links">
            Destinations
          </Link>
          <Link to="/AboutPage" className="links">
            About us
          </Link>
          <Link to="/ContactPage" className="links">
            Contact
          </Link>
        </div>

        <div className="footercontent">
          <h4 className="underline">Follow Us</h4>
          <a
            className="followus"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            Facebook
          </a>
          <a
            className="followus"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            Instagram
          </a>
        </div>
        <div className="footercontent">
          <h4 className="underline">Legal</h4>
          
        </div>
      </div>
      <div className="copyright">
        &copy; 2025 AtlantisFrame AB. All rights reserved.
      </div>
    </>
  );
};
