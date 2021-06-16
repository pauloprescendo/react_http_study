import { Link } from "react-router-dom";
import logoImage from "../../images/logo.png";
import "./styles.css";

function Signin() {
  return (
    <div className="main">
      <div className="content d-flex flex-column justify-content-center">
        <img src={logoImage} alt="Mobile2You" className="logo" />
        <aside className="col-sm">
          <div className="card">
            <article className="card-body">
              <Link to="#" className="float-right btn btn-outline-primary">
                Sign up
              </Link>
              <h4 className="card-title mb-4 mt-1">Sign in</h4>
              <p>
                <Link to="#" className="btn btn-block btn-outline-info">
                  <i className="fab fa-google"></i>Login via Twitter
                </Link>
                <Link to="#" className="btn btn-block btn-outline-primary">
                  <i className="fab fa-facebook-f"></i>Login via facebook
                </Link>
              </p>
              <hr></hr>
              <form action="/users" method="get">
                <div className="form-group">
                  <input
                    name=""
                    className="form-control"
                    placeholder="Email"
                    type="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="******"
                    type="password"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6 text-right">
                    <Link to="#" className="small">
                      Forgot password?
                    </Link>
                  </div>
                </div>
              </form>
            </article>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Signin;
