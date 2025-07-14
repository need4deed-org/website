import { FadersHorizontalIcon, XIcon } from "@phosphor-icons/react";

export enum IconName {
  FadersHorizontal = "fadersHorizontal",
  X = "x",
}

export type IconMap = {
  [key in IconName]: JSX.Element;
};

export const iconNameMap: IconMap = {
  [IconName.FadersHorizontal]: <FadersHorizontalIcon />,
  [IconName.X]: <XIcon />,
};
