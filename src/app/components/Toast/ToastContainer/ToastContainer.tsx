import { useEffect } from "react";
import { Container } from "./Style";
import ToastMessage from "../ToastsMessage/ToastMessage";
import { eventManager } from "../../../Utils/toast";
import {
  HandleAddToast,
  Message,
  RenderInfo,
  Toast,
} from "../../../../types/type";
import useAnimatedList from "../../../../hooks/useAnimatedList";

const ToastContainer = () => {
  const { setItems, handleRemoveItems, renderList } = useAnimatedList();

  useEffect(() => {
    const handleAddToast = ({ type, text }: HandleAddToast) => {
      setItems(
        (prevState) =>
          [
            ...prevState,
            {
              id: Math.random().toString(),
              message: { type, text, duration: 5000 },
            },
          ] as Message<Toast>[]
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
        (message: Message<Toast>, { isLeaving, animatedRef }: RenderInfo) => {
          return (
            <ToastMessage
              key={message.id}
              messageObject={message as Message<Toast>}
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
