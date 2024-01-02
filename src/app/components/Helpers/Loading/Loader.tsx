import { Overlay } from "./style";


import ReactPortal from "../../ReactPortal/ReactPortal";
import Spinner from "./Spinner";

interface LoaderProps {
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  if (!loading) return null;

  return (
    <>
      <ReactPortal containerId="loader-root">
        <Overlay>
          <Spinner size={90} />
        </Overlay>
      </ReactPortal>
    </>
  );
};

export default Loader;