import React from "react";
import ReactDOM from "react-dom";
import "../Skeleton/css/normalize.css";
import "./index.css";
import { Button, PrimaryButton } from "./components/button";
import { defaultTheme, ThemeContext } from "./theme";
import { Column, Container, Row } from "./components/container";

const App = () => (
  <Container>
    <Row>
      <Column first cols={3}>
        <Button>Button</Button>
      </Column>
      <Column cols={4}>
        <PrimaryButton>Primary Button</PrimaryButton>
      </Column>
      <Column cols={3}>
        <Button>Button</Button>
      </Column>
      <Column cols={4}>
        <PrimaryButton>Primary Button</PrimaryButton>
      </Column>
    </Row>
    <Row>
      <Column first cols={3}>
        <Button>Button</Button>
      </Column>
      <Column cols={4}>
        <PrimaryButton>Primary Button</PrimaryButton>
      </Column>
      <Column cols={3}>
        <Button>Button</Button>
      </Column>
      <Column cols={4}>
        <PrimaryButton>Primary Button</PrimaryButton>
      </Column>
    </Row>
  </Container>
);

ReactDOM.render(
  <ThemeContext.Provider value={defaultTheme}>
    <App />
  </ThemeContext.Provider>,
  document.getElementById("app")
);
