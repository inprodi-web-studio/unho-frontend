import React, { useState } from "react";
import { cn } from "../helpers/cn";
import { theme } from "antd";

const Splitter = ({
  id = "drag-bar",
  dir,
  isDragging,
  ...props
}: any) => {
  const [ isFocused, setIsFocused ] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const { token } = theme.useToken();

  const styles : React.CSSProperties = {
    top : 0,
    right : 0,
    zIndex : 10,
    width : "3px",
    flexShrink : 0,
    height : "100%",
    position : "absolute",
    cursor : "col-resize",
    transition : "background-color 0.15s 0.15s ease-in-out",
    backgroundColor : isHovered ? token.colorPrimaryBorder : isDragging ? token.colorPrimary : "transparent",
  };

  return (
    <div
      id={ id }
      tabIndex={0}
      style={ styles }
      className={ cn(
        "sample-drag-bar",
        isHovered && "sample-drag-bar--hover",
        dir === "horizontal" && "sample-drag-bar--horizontal",
        (isDragging || isFocused) && "sample-drag-bar--dragging",
      )}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onMouseEnter={ () => setIsHovered(true) }
      onMouseLeave={ () => setIsHovered(false) }
      {...props}
    />
  );
};

export default Splitter;
