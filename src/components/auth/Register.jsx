import { CiLock, CiMail, CiUser } from "react-icons/ci";
import { SlPicture } from "react-icons/sl";
export default function Register() {
  return (
    <div className="container regPage">
      <div className="register">
        <h1 className="reg-title">Register now</h1>
        <div className="reg-form">
          <div className="form-item">
            <span className="item-logo">
              <CiUser />
            </span>
            <input type="text" placeholder="username" />
          </div>

          <div className="form-item">
            <span className="item-logo">
              <CiMail />
            </span>
            <input type="email" placeholder="email" />
          </div>

          <div className="form-item">
            <span className="item-logo">
              <CiLock />
            </span>
            <input type="password" placeholder="password" />
          </div>

          <div className="form-item">
            <span className="item-logo">
              <SlPicture />
            </span>
            <input type="file" />
          </div>

          <button className="reg-btn btn">Register</button>
        </div>
      </div>
    </div>
  );
}
