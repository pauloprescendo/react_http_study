import React from "react";
import { Link } from "react-router-dom";

const SigninForm: React.FC = () => {
  return (
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
        <input className="form-control" placeholder="******" type="password" />
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
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
  );
};

export default SigninForm;
