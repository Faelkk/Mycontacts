import EventManager from "../../lib/EventManager";
import { typeToast } from "../../types/type";

export const eventManager = new EventManager();

export const toast: (toastData: typeToast) => void = ({ type, text }) => {
  eventManager.emit("addtoast", { type, text });
};
