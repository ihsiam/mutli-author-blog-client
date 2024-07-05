import { CiMenuBurger } from "react-icons/ci";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "/logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="row">
          <input type="checkbox" name="" id="toggle" />
          <div className="col-4">
            <div className="image-menubar">
              <Link className="logoImage" to="/">
                <img src={logo} alt="" srcSet="" />
              </Link>
              <label className="menuIcon" htmlFor="toggle">
                <CiMenuBurger />
              </label>
            </div>
          </div>
          <div className="col-8">
            <ul className="link-items toggle">
              <li className="link-item">
                <Link to="/about">About</Link>
              </li>
              <li className="link-item">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="link-item">
                <Link to="/policy">Policy</Link>
              </li>
              <div className="social-icon">
                <li className="link-item">
                  <Link to="/">
                    <span>
                      <FaFacebook />
                    </span>
                  </Link>
                </li>
                <li className="link-item">
                  <Link to="/">
                    <span>
                      <FaTwitter />
                    </span>
                  </Link>
                </li>
                <li className="link-item">
                  <Link to="/">
                    <span>
                      <FaYoutube />
                    </span>
                  </Link>
                </li>
                <li className="link-item">
                  <Link to="/">
                    <span>
                      <FaGithub />
                    </span>
                  </Link>
                </li>
                <li className="link-item">
                  <Link to="/">
                    <span>
                      <FaLinkedin />
                    </span>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
