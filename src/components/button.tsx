import React, { useContext } from "react";
import { ThemeContext } from "../theme";

type HTMLButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

function useButtonStyle(primary = false): React.CSSProperties {
  const ctx = useContext(ThemeContext);

  return {
    display: "inline-block",
    height: "38px",
    padding: "0 30px",
    color: primary ? ctx.textColor : ctx.primaryTextColor,
    textAlign: "center",
    fontSize: "11px",
    fontWeight: 600,
    lineHeight: "38px",
    letterSpacing: ".1rem",
    textTransform: "uppercase",
    textDecoration: "none",
    whiteSpace: "nowrap",
    backgroundColor: primary ? ctx.primaryColor : "transparent",
    borderRadius: "4px",
    border: `1px solid ${primary ? ctx.primaryColor : ctx.dividerColor}`,
    cursor: "pointer",
    boxSizing: "border-box",
  };
}

export interface ButtonProps {
  primary?: boolean;
}

export const Button = <P extends HTMLButtonProps & ButtonProps>(props: P) => {
  const { primary, ...rest } = props;

  return (
    <button style={useButtonStyle(primary)} {...rest}>
      {props.children}
    </button>
  );
};

export const PrimaryButton = <P extends HTMLButtonProps & ButtonProps>(
  props: P
) => <Button primary>{props.children}</Button>;
