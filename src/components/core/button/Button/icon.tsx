import { FadersHorizontalIcon } from "@phosphor-icons/react";

export enum IconName {
  FadersHorizontal = "fadersHorizontal",
}

export type IconMap = {
  [key in IconName]: JSX.Element;
};

export const iconNameMap: IconMap = {
  [IconName.FadersHorizontal]: <FadersHorizontalIcon />,
};
