import ReactDOM from "react-dom";
import { Overlay } from "./style";

const Loader = () => {
  const LoaderRoot = document.getElementById("loader-root");
  return LoaderRoot
    ? ReactDOM.createPortal(
        <Overlay>
          <div className="loader"></div>
        </Overlay>,
        LoaderRoot
      )
    : null;
};

export default Loader;
