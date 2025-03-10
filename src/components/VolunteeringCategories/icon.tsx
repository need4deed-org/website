import {
  ChatsTeardrop,
  Baby,
  Bicycle,
  CalendarStar,
  PingPong,
  Users,
} from "@phosphor-icons/react";
import { IconName } from "./types";

type IconMap = {
  [key in IconName]: JSX.Element;
};

// eslint-disable-next-line import/prefer-default-export
export const iconNameMap: IconMap = {
  [IconName.ChatsTeardrop]: <ChatsTeardrop />,
  [IconName.Baby]: <Baby />,
  [IconName.Bicycle]: <Bicycle />,
  [IconName.CalendarStar]: <CalendarStar />,
  [IconName.PingPong]: <PingPong />,
  [IconName.Users]: <Users />,
};
