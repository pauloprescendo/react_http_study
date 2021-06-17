import { BrowserRouter } from 'react-router-dom'
import "./styles/global.css";

import Routes from "./routes";

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
