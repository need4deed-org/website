import {
  BabyIcon,
  BicycleIcon,
  CalendarStarIcon,
  ChatsTeardropIcon,
  PingPongIcon,
  SparkleIcon,
  UsersIcon,
} from "@phosphor-icons/react";
import { IconName } from "./types";

type IconMap = {
  [key in IconName]: JSX.Element;
};

// eslint-disable-next-line import/prefer-default-export
export const iconNameMap: IconMap = {
  [IconName.ChatsTeardrop]: <ChatsTeardropIcon />,
  [IconName.Baby]: <BabyIcon />,
  [IconName.Bicycle]: <BicycleIcon />,
  [IconName.CalendarStar]: <CalendarStarIcon />,
  [IconName.PingPong]: <PingPongIcon />,
  [IconName.Users]: <UsersIcon />,
  [IconName.Sparkle]: <SparkleIcon />,
};
