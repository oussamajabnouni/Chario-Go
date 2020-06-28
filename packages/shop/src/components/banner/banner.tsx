import React, { useCallback } from "react";
import { FormattedMessage } from "react-intl";
import {
  Box,
  Image,
  Content,
  Title,
  Description,
  SearchWrapper,
} from "./banner.style";

import { Restaurant } from "assets/icons/Restaurant";
import { FruitsVegetable } from "assets/icons/FruitsVegetable";

import { Waypoint } from "react-waypoint";
import { useAppDispatch } from "contexts/app/app.provider";
import Search from "features/search/search";
import CardType from "../CardType/cardType";

const MENU_ITEMS = [
  {
    iconG: <FruitsVegetable />,
    iconF: <Restaurant />,
  },
];

interface Props {
  imageUrl: string;
  intlTitleId: string;
  intlDescriptionId: string;
}

export const Banner: React.FC<Props> = ({
  imageUrl,
  intlTitleId,
  intlDescriptionId,
}) => {
  const dispatch = useAppDispatch();
  const setSticky = useCallback(() => dispatch({ type: "SET_STICKY" }), [
    dispatch,
  ]);
  const removeSticky = useCallback(() => dispatch({ type: "REMOVE_STICKY" }), [
    dispatch,
  ]);

  return (
    <Box>
      <Image backgroundImage={`url(${imageUrl})`} />
      <Content>
        <Title>
          <FormattedMessage
            id={intlTitleId}
            defaultMessage="Set Your Title Through Language File"
            values={{ minute: 90 }}
          />
        </Title>
        <Description>
          <FormattedMessage
            id={intlDescriptionId}
            defaultMessage="Set Your Description Through Language File"
          />
        </Description>
        <SearchWrapper>
          <Search
            className="banner-search"
            shadow="0 21px 36px rgba(0,0,0,0.05)"
          />
        </SearchWrapper>
        <SearchWrapper>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: 6,
              marginTop: "2.5rem",
              height: "5rem",
              width: 800,
            }}
          >
            <div
              style={{
                marginLeft: "50px",
                width: 325,
              }}
            >
              {MENU_ITEMS.map((item) => (
                <CardType
                  icon={item.iconG}
                  restaurantType="Superarché"
                  description="Supermarchés, Épiceries Fines."
                ></CardType>
              ))}
            </div>
            <div
              style={{
                marginLeft: "50px",
                width: 325,
              }}
            >
              {MENU_ITEMS.map((item) => (
                <CardType
                  icon={item.iconF}
                  restaurantType="Restaurants"
                  description="Vos plats préférés près de chez vous."
                ></CardType>
              ))}
            </div>
          </div>
        </SearchWrapper>

        <Waypoint onEnter={removeSticky} onLeave={setSticky} />
      </Content>
    </Box>
  );
};
