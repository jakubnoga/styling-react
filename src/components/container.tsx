import React from "react";
import { useMediaQuery } from "./hooks";

const useContainerStyle = (): React.CSSProperties => {
  const isLargerThan400px = useMediaQuery("(min-width: 400px)");
  const isLargerThan550px = useMediaQuery("(min-width: 550px)");

  return {
    position: "relative",
    width: isLargerThan400px ? (isLargerThan550px ? "85%" : "80%") : "100%",
    maxWidth: "960px",
    margin: "0 auto",
    padding: isLargerThan400px ? 0 : "0 20px",
    boxSizing: "border-box",
  };
};

export const Container = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const style: React.CSSProperties = useContainerStyle();

  return (
    <div {...props} style={style}>
      {props.children}
    </div>
  );
};

const useColumnStyle = (cols: number, first = false): React.CSSProperties => {
  let width;
  if (cols < 1 / 3 || cols > 12) {
    width = 100;
  }

  width = (100 * cols) / 12 - (12 - cols / 3);
  const isLargerThan550px = useMediaQuery("(min-width: 550px)");

  return {
    marginLeft: first || cols == 12 ? 0 : isLargerThan550px ? "4%" : 0,
    width: `${width}%`,
    float: "left",
    boxSizing: "border-box",
  };
};

export const Column = (
  props: React.HTMLAttributes<HTMLDivElement> & {
    cols: number;
    first?: boolean;
  }
) => {
  const { cols, first, ...rest } = props;
  const style = useColumnStyle(cols, first);

  return <div {...rest} style={style}></div>;
};

export const Row = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div>
      {props.children}
      <div style={{ display: "table", clear: "both" }}></div>
    </div>
  );
};
