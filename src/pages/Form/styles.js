import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 1200px;

  form {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 15px;
    width: 400px;
    height: 445px;
    border: 1px solid black;
    padding: 30px;
    border-radius: 8px;
    background-color: darkgray;
    box-sizing: border-box;
  }
`;
