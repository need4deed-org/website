import { createContext, MutableRefObject } from "react";

const AppContainerContext = createContext<
  MutableRefObject<HTMLDivElement | null>
>(undefined as unknown as MutableRefObject<HTMLDivElement | null>);

export default AppContainerContext;
