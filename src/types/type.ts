import { ChangeEvent, ReactNode } from "react";

export interface typeInputHook {
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
}

export interface TypeHead {
  title: string;
}
export interface TypeFormGroup {
  children: ReactNode;
  error?: string;
  isloading?: boolean;
  className?: string;
}
export interface typeContactForm {
  buttonText?: string;
  onSubmit?: (formData: TypeForm) => void;
}
export interface typeDanger {
  danger: boolean;
  title: string;
  children: ReactNode;
  onCancel: () => void;
  onConfirm: () => void;
  isModalVisible: boolean;
  isLoading: boolean;
}
export interface TitleModalProps {
  danger?: boolean | string;
  type?: string;
}
export interface typeError {
  error?: string | undefined;
  maxLength?: string;
}
export interface typeTarget {
  target: EventTarget;
}

export interface typeErrorHooks {
  field: string;
  message: string;
}
export interface typeOrder {
  orderby: string;
}

export interface typeLoader {
  isLoading?: boolean;
}
export interface typeErrorIsTrue {
  justifyContent: string;
}
export type typeContacts = typeContactsArray[];

export interface typeContactsArray {
  id: string;
  name: string;
  email: string;
  phone: string;
  category_id: string;
  category_name: string;
}
export interface ResultTypeError {
  status: number;
  statusText: string;
}

export interface TypeContactsById {
  id: string | undefined;
  name: string;
  phone: string | undefined;
  email: string | undefined;
  categoryId: string | undefined;
  category_name?: string;
}

export interface ErrorBody {
  error: string;
}

export interface CategoriesFetch {
  name: string;
  id: string;
}
export interface typesSpiner {
  size: number;
}
export interface TypeForm {
  id?: string;
  name: string;
  email: string | undefined;
  phone: string | undefined;
  category?: string | undefined;
}

export interface typeCategory {
  id?: string;
  name: string;
  email: string | undefined;
  phone: string | undefined;
  category_id?: string | undefined;
}

export interface typeDomain {
  id?: string;
  name: string;
  email: string | undefined;
  phone: string | undefined;
  categoryId?: string | undefined;
}
export interface TypeCreate {
  name: string;
  email: string | undefined;
  phone: string | undefined;
  category_id: string | undefined;
}

export interface TypePost {
  path: string;
  body: TypeCreate;
}
export interface TypeButton {
  type: string;
  isLoading?: boolean;
  disabled?: boolean;
  children: ReactNode;
  danger?: boolean;
  onClick?: () => void;
}

export interface typeMessageListener {
  (payload: any): void;
}

export interface typeToast {
  type: string;
  text: string;
  duration: number;
}
export interface typeMessage {
  message: typeToast;
  id: string;
}

export interface typeToastMessage extends typeMessage {
  onRemoveMessage?: (id: string) => void;
}

export interface typeChangeMessage {
  messageObject: typeMessage;
  isLeaving: boolean;
  onRemoveMessage?: (id: string) => void;
  animatedRef: HTMLDivElement;
}

export interface typeContainerToast {
  type: string;
  messageObject?: typeChangeMessage;
  id: string;
}

export interface typeHandleAddToast {
  text: string;
  type: string;
}

export interface typeRefContact {
  setFieldsValue: (contact: TypeForm) => void;
  resetFields: () => void;
}

export interface PortalProps {
  containerId: string;
  children: ReactNode;
}
export interface TypeEdits {
  loading: boolean;
  contactById: typeContactsArray | undefined;
  handleSubmit: (formData: TypeForm) => void;
  contactForm: typeRefContact;
}
export interface typeIsModalVisible {
  isLeaving: boolean;
}

export interface typeRender {
  isLeaving: boolean;
  animatedRef: HTMLDivElement;
}
