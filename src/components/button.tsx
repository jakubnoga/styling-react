import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  primary?: boolean;
}

export const Button = styled.button`
  display: inline-block;
  height: 38px;
  padding: 0 30px;
  color: ${(props) => props.theme.primaryTextColor};
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.dividerColor};
  cursor: pointer;
  box-sizing: border-box;
  margin-bottom: 1rem;
  
  :focus,
  :hover {
    color: #333;
    border-color: #888;
    outline: 0;
  }
`;

export const PrimaryButton = styled(Button)`
  color: #fff;
  background-color: ${(props) => props.theme.primaryColor};
  border-color: ${(props) => props.theme.primaryColor};

  :focus,
  :hover {
    color: #fff;
    background-color: ${(props) => props.theme.primaryDarkColor};
    border-color: ${(props) => props.theme.primaryDarkColor};
  }
`;
