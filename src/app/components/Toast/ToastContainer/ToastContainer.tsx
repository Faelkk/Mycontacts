import { useEffect } from "react";
import { Container } from "./Style";
import ToastMessage from "../ToastsMessage/ToastMessage";
import { eventManager } from "../../../Utils/toast";
import {
  typeHandleAddToast,
  typeRender,
  typeToastMessage,
} from "../../../../types/type";
import useAnimatedList from "../../../../hooks/useAnimatedList";

const ToastContainer = () => {
  const { setItems, handleRemoveItems, renderList } = useAnimatedList();

  useEffect(() => {
    const handleAddToast = ({ type, text }: typeHandleAddToast) => {
      setItems(
        (prevState) =>
          [
            ...prevState,
            {
              id: Math.random().toString(),
              message: { type, text, duration: 5000 },
            },
          ] as typeToastMessage[]
      );
    };

    eventManager.on("addtoast", handleAddToast);
    return () => {
      eventManager.removeListener("addtoast", handleAddToast);
    };
  }, []);

  return (
    <Container>
      {renderList(
        (message: typeToastMessage, { isLeaving, animatedRef }: typeRender) => {
          console.log(isLeaving, animatedRef);

          return (
            <ToastMessage
              key={message.id}
              messageObject={message}
              onRemoveMessage={handleRemoveItems}
              isLeaving={isLeaving}
              animatedRef={animatedRef}
            />
          );
        }
      )}
    </Container>
  );
};

export default ToastContainer;
