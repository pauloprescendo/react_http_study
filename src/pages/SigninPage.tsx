import SigninLinks from '../components/SigninLinks';
import SigninForm from '../components/SigninForm';
import logoImage from "../images/logo.png";
import styles from "../styles/signin-page.module.css";

function SigninPage() {
  return (
    <div className={styles.main}>
      <div className={`${styles.content} d-flex flex-column justify-content-center`}>
        <img src={logoImage} alt="Mobile2You" className={styles.logo} />
        <aside className="col-sm">
          <div className="card">
            <article className="card-body">
              <SigninLinks />
              <hr></hr>
              <SigninForm />
            </article>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default SigninPage;
