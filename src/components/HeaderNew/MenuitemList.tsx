import { HashLink } from "react-router-hash-link";

import { MenuItemType } from "../../config/types";
import MenuItem from "./MenuItem";

interface Props {
  items: MenuItemType[];
  menuItemColor?: string;
}

export default function MenuitemList({ items, menuItemColor }: Props) {
  return (
    <>
      {items.map(([text, whatsOnClick]) =>
        typeof whatsOnClick === "function" ? (
          <MenuItem
            text={text}
            key={text}
            color={menuItemColor}
            onClickHandler={whatsOnClick}
          />
        ) : (
          // @ts-expect-error TS2786
          <HashLink smooth to={whatsOnClick}>
            <MenuItem text={text} key={text} color={menuItemColor} />
          </HashLink>
        ),
      )}
    </>
  );
}
