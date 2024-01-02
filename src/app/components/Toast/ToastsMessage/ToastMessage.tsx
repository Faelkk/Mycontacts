import React, { memo, useEffect } from "react";
import { Container } from "./Style";

import xCircleIcon from "../../../../assets/x-circle.svg";
import checkCircleIcon from "../../../../assets/check-circle.svg";
import { ToastMessageProps } from "../../../../types/type";



const ToastMessage: React.FC<ToastMessageProps> = ({
  messageObject,
  isLeaving,
  onRemoveMessage,
  animatedRef,
}) => {
  useEffect(() => {
    const messageTimeout = setTimeout(() => {
      onRemoveMessage && onRemoveMessage(messageObject.id);
    }, messageObject.message.duration || 7000);

    return () => {
      clearTimeout(messageTimeout);
    };
  }, [messageObject, onRemoveMessage]);

  function handleRemoveToast() {
    onRemoveMessage && onRemoveMessage(messageObject.id);
  }

  const { type, text } = messageObject.message;

  return (
    <Container
      type={type}
      onClick={handleRemoveToast}
      id={messageObject.id}
      tabIndex={0}
      role="button"
      isLeaving={isLeaving}
      ref={animatedRef as HTMLDivElement}
    >
      {type === "danger" && <img src={xCircleIcon} alt="Error" />}
      {type === "success" && <img src={checkCircleIcon} alt="Success" />}
      <span>{text}</span>
    </Container>
  );
};

export default memo(ToastMessage);
