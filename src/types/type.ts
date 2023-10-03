import { ReactNode } from "react";

export interface Contact {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  category_id?: string;
  category_name?: string;
}
export interface ContactsArrayWithCategoryId extends ContactsArray {
  categoryId: string;
}

export interface Message<T> {
  message: T;
  id: string;
}

export interface Toast {
  type: string;
  text: string;
  duration: number;
}

export interface RenderInfo {
  isLeaving: boolean;
  animatedRef: HTMLDivElement;
}

export interface ContainerToast {
  type: string;
  messageObject?: Message<RenderInfo>;
  id: string;
}

export interface HandleAddToast {
  text: string;
  type: string;
}

export interface PortalProps {
  containerId: string;
  children: ReactNode;
}

export interface ButtonProps {
  type: string;
  isLoading?: boolean;
  disabled?: boolean;
  children: ReactNode;
  danger?: boolean;
  onClick?: () => void;
}

export interface LoaderProps {
  isLoading?: boolean;
}

export interface ErrorInfo {
  error?: string;
  maxLength?: string;
}

export interface OrderInfo {
  orderby: string;
}

export interface ErrorHooks {
  field: string;
  message: string;
}

export interface FormInfo {
  id?: string;
  name: string;
  email?: string;
  phone?: string;
  category?: string;
}

export interface CategoryInfo {
  id?: string;
  name: string;
  email?: string;
  phone?: string;
  category_id?: string;
}

export interface DomainInfo {
  id?: string;
  name: string;
  email?: string;
  phone?: string;
  categoryId?: string;
}

export interface CreateInfo {
  name: string;
  email?: string;
  phone?: string;
  category_id?: string;
}

export interface PostInfo {
  path: string;
  body: CreateInfo;
}

export interface ContactsArray {
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

export interface CategoriesFetch {
  name: string;
  id: string;
}

export interface EditsInfo {
  loading: boolean;
  contactById: ContactsArray;
  handleSubmit: (formData: FormInfo) => void;
  contactForm: RefContact;
}

export interface IsModalVisible {
  isLeaving: boolean;
}

export interface RefContact {
  setFieldsValue: (contact: FormInfo) => void;
  resetFields: () => void;
}

export interface ContactsById {
  id: string | undefined;
  name: string;
  phone: string | undefined;
  email: string | undefined;
  categoryId: string | undefined;
  category_name?: string;
}

export interface ErrorBody {
  error?: string;
}

export interface SpinnerProps {
  size: number;
}

export interface HeadInfo {
  title: string;
}

export interface FormGroupProps {
  children: ReactNode;
  error?: string;
  isloading?: boolean;
  className?: string;
}

export interface ContactFormProps {
  buttonText?: string;
  onSubmit?: (formData: FormInfo) => void;
}

export interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: () => void;
}

export interface ModalProps {
  isLoading: boolean;
  danger: boolean;
  title: string;
  children: React.ReactNode;
  onCancel: () => void;
  onConfirm: () => void;
  isModalVisible: boolean;
}

export interface isInDanger {
  danger: boolean;
}

export interface ToastMessageProps {
  messageObject: {
    message: {
      type: string;
      text: string;
      duration?: number;
    };
    id: string;
  };
  isLeaving: boolean;
  onRemoveMessage?: (id: string) => void;
  animatedRef?: HTMLDivElement;
}
