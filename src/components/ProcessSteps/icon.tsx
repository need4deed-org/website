import {
  AddressBookIcon,
  HandHeartIcon,
  ListChecksIcon,
  NotepadIcon,
  ShootingStarIcon,
  SparkleIcon,
  StrategyIcon,
} from "@phosphor-icons/react";

export enum IconName {
  ListChecks = "listChecks",
  Notepad = "notepad",
  Strategy = "strategy",
  ShootingStar = "shootingStar",
  AddressBook = "addressBook",
  HandHeart = "handHeart",
  Sparkle = "sparkle",
}

type IconMap = {
  [key in IconName]: JSX.Element;
};

export const iconNameMap: IconMap = {
  [IconName.ListChecks]: <ListChecksIcon />,
  [IconName.Notepad]: <NotepadIcon />,
  [IconName.Strategy]: <StrategyIcon />,
  [IconName.ShootingStar]: <ShootingStarIcon />,
  [IconName.AddressBook]: <AddressBookIcon />,
  [IconName.HandHeart]: <HandHeartIcon />,
  [IconName.Sparkle]: <SparkleIcon />,
};
