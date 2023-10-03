import React from "react";
import ReactDOM from "react-dom";
import { PortalProps } from "../../../types/type";

const ReactPortal: React.FC<PortalProps> = ({ containerId, children }) => {
  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement("div");
    container.setAttribute("id", containerId);
    document.body.appendChild(container);
  }

  return ReactDOM.createPortal(children, container);
};

export default ReactPortal;
