import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;

  @media (min-width: 400px) {
    width: 85%;
    padding: 0;
  }

  @media (min-width: 550px) {
    width: 80%;
  }
`;

export const Column = styled.div<React.HTMLAttributes<HTMLDivElement> & { cols: number; }>`
  width: 100%;
  float: left;
  box-sizing: border-box;

  @media (min-width: 550px) {
    margin-left: 4%;
    width: ${(props) => (100 * props.cols) / 12 - (12 - props.cols / 3) + "%"};

    :first-child {
      margin-left: 0;
    }
  }
`;

export const Row = styled.div`
  :after {
    content: "";
    display: table;
    clear: both;
  }
`;
