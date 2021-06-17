import React from "react";
import { Link } from "react-router-dom";


const SigninLinks: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default SigninLinks;
