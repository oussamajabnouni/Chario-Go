import React from "react";
import {
  MainMenu,
  MenuItem,
  SelectedItem,
  Icon,
  Arrow,
  LeftMenuBox,
} from "./left-menu.style";
import Popover from "components/popover/popover";
import { MenuDown } from "assets/icons/MenuDown";
import { FruitsVegetable } from "assets/icons/FruitsVegetable";
import { FacialCare } from "assets/icons/FacialCare";
import { Handbag } from "assets/icons/Handbag";
import { DressIcon } from "assets/icons/DressIcon";
import { FurnitureIcon } from "assets/icons/FurnitureIcon";
import { BookIcon } from "assets/icons/BookIcon";
import { MedicineIcon } from "assets/icons/MedicineIcon";
import { Restaurant } from "assets/icons/Restaurant";
import {
  HOME_PAGE,
  GROCERY_PAGE,
  CLOTHING,
  MAKEUP_PAGE,
  BAGS_PAGE,
  FURNITURE_PAGE,
  BOOK_PAGE,
  MEDICINE_PAGE,
  RESTAURANT_PAGE,
} from "constants/navigation";
import Router, { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";

import Logo from "layouts/logo/logo";
const MENU_ITEMS = [
  {
    link: GROCERY_PAGE,
    icon: <FruitsVegetable />,
    label: "Grocery",
    intlId: "navGroceryMenu",
    dynamic: true,
  },
  {
    link: RESTAURANT_PAGE,
    label: "Foods",
    icon: <Restaurant />,
    intlId: "navFoodsMenu",
  },
];

const CategoryMenu = (props: any) => {
  const handleOnClick = (item) => {
    if (item.dynamic) {
      Router.push("/[type]", `${item.link}`);
      props.onClick(item);
      return;
    }
    Router.push(`${item.link}`);
    props.onClick(item);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {MENU_ITEMS.map((item) => (
        <MenuItem
          key={item.link}
          {...props}
          onClick={() => handleOnClick(item)}
        >
          {item.icon && item.icon}
          <FormattedMessage id={item.intlId} defaultMessage="your nav label" />
        </MenuItem>
      ))}
    </div>
  );
};

type Props = {
  logo: string;
};

export const LeftMenu: React.FC<Props> = ({ logo }) => {
  const router = useRouter();
  const initialMenu = MENU_ITEMS.find((item) => item.link === router.pathname);
  const [activeMenu, setActiveMenu] = React.useState(
    initialMenu ?? MENU_ITEMS[0]
  );

  return (
    <LeftMenuBox>
      <Logo
        imageUrl={logo}
        alt={"Shop Logo"}
        onClick={() => setActiveMenu(MENU_ITEMS[0])}
      />

      {/* {router.pathname !== HOME_PAGE && ( */}
      <MainMenu>
        {router.pathname !== HOME_PAGE && (
          <Popover
            className="right"
            handler={
              <SelectedItem>
                <span>
                  <Icon>{activeMenu?.icon}</Icon>
                  <span>
                    <FormattedMessage
                      id={activeMenu?.intlId}
                      defaultMessage={activeMenu?.label}
                    />
                  </span>
                </span>
                <Arrow>
                  <MenuDown />
                </Arrow>
              </SelectedItem>
            }
            content={<CategoryMenu onClick={setActiveMenu} />}
          />
        )}
      </MainMenu>
    </LeftMenuBox>
  );
};
