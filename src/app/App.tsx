import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Routes from "./routes/routes";
import { Container } from "./style";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes />
      </Container>
    </BrowserRouter>
  );
};

export default App;
