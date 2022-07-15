import Button from "@mui/material/Button";
import { useHistory, useParams } from "react-router-dom";
import { Container } from "./style";

const Home = () => {
  const history = useHistory();
  const { id } = useParams();

  const turnBack = () => {
    history.push("/");
  };

  return (
    <Container>
      <h1>Seja bem vindo(a) {id}</h1>
      <Button variant="outlined" onClick={turnBack}>
        Voltar
      </Button>
    </Container>
  );
};

export default Home;
