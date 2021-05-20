import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className="Signin">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Digite seu e-mail" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>
        <Link to="users">
          <Button variant="primary">Entrar</Button>
        </Link>
      </Form>
    </div>
  );
}

export default Signin;
