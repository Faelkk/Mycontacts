import { ReactNode } from "react";

export interface typeInputHook {
  type: string;
  placeholder: string;
}

export interface TypeHead {
  title: string;
}
export interface TypeFormGroup {
  children: ReactNode;
  error?: string;
}
export interface typeContactForm {
  buttonText: string;
}
export interface typeDanger {
  danger: boolean;
}
export interface TitleModalProps {
  danger?: boolean | string;
}
export interface typeError {
  error?: boolean;
}
