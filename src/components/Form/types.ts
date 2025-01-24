import {
  DeepKeys,
  FieldValidators,
  FormState,
  FormValidators,
} from "@tanstack/react-form";
import { ComponentType, ReactNode } from "react";

export type ReactFormApiLike<T> = {
  Subscribe: ComponentType<{
    selector: (state: FormState<T>) => FormState<T>;
    children: (selectedState: Partial<T>) => ReactNode;
  }>;
};

type Header = {
  title: string;
  help?: {
    title: string;
    para?: string;
  };
};

type Field<T> = {
  name: DeepKeys<T>;
  header?: Header;
  label: string;
  type?: string;
  required?: boolean;
  validators?: FieldValidators<T, DeepKeys<T>>;
};

type Section<T> = {
  header?: Header;
  fields: Field<T>[];
};

export type Structure<T> = {
  header?: Header;
  validators?: FormValidators<T, undefined> | undefined;
  main?: Section<T>;
  sections?: Section<T>[];
  submit: {
    label: string;
    errors: boolean;
  };
};
