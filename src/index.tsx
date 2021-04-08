import React from "react";
import ReactDOM from "react-dom";
import "../Skeleton/css/normalize.css";
// import "./index.css";
import { Button, PrimaryButton } from "./components/button";
import { defaultTheme } from "./theme";
import { Column, Container, Row } from "./components/container";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const App = () => (
  <Container>
    <Row>
      <Column cols={3}>
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
      <Column cols={3}>
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

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */
    line-height: 1.6;
    font-weight: 400;
    font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
      sans-serif;
    color: #222;
  }
`



ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle></GlobalStyle>
    <App />
  </ThemeProvider>,
  document.getElementById("app")
);
