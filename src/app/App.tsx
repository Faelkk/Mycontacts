import { BrowserRouter } from "react-router-dom";

import Routes from "./routes/routes";

import { Container } from "./style";
import ToastContainer from "./components/Toast/ToastContainer/ToastContainer";
import Header from "./components/header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Container>
        <Header />
        <Routes />
      </Container>
    </BrowserRouter>
  );
};

export default App;
