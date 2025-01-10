import { FormState } from "@tanstack/react-form";
import { ComponentType, ReactNode } from "react";

export type ReactFormApiLike<T> = {
  Subscribe: ComponentType<{
    selector: (state: FormState<T>) => FormState<T>;
    children: (selectedState: Partial<T>) => ReactNode;
  }>;
};
