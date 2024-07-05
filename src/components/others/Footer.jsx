import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-6 links">
            <Link className="linkItem" to="/">
              Home
            </Link>
            <Link className="linkItem" to="/about">
              About
            </Link>
            <Link className="linkItem" to="/contact">
              Contact
            </Link>
            <Link className="linkItem" to="/policy">
              Policy
            </Link>
          </div>
          <div className="col-6 copyRights">
            <h1 className="crTitle">
              © 2024 People&apos;s Blog™. All Rights Reserved.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
