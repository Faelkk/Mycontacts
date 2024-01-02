import EventManager from "../../lib/EventManager";

interface toastDataProps {
type: string
text: string
}

export const eventManager = new EventManager();

export const toast: (toastData: toastDataProps) => void = ({ type, text }) => {

  
  eventManager.emit("addtoast", { type, text });
};
