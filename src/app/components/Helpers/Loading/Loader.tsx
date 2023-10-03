import { Overlay } from "./style";

import Spiner from "./Spiner";
import ReactPortal from "../../ReactPortal/ReactPortal";
import UseHome from "../../../pages/Home/useHome";

const Loader = () => {
  const { loading } = UseHome();
  if (!loading) return null;

  return (
    <>
      <ReactPortal containerId="loader-root">
        <Overlay>
          <Spiner size={90} />
        </Overlay>
      </ReactPortal>
    </>
  );
};

export default Loader;
