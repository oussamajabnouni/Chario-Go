import React, { useCallback, useState, useContext } from "react";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
import { FilterContext } from "contexts/filter/filter.context";

import {
  Box,
  Image,
  Content,
  Title,
  Description,
  Row,
  Col,
} from "./banner.style";

import Select from "../select/select";
import { Restaurant } from "assets/icons/Restaurant";
import { FruitsVegetable } from "assets/icons/FruitsVegetable";

import { Waypoint } from "react-waypoint";
import { useAppDispatch } from "contexts/app/app.provider";
import CardType from "../card-type/card-type";

interface Props {
  imageUrl: string;
  intlTitleId: string;
  intlDescriptionId: string;
}

const locationOptions = [
  {
    value: "Sousse",
    label: "Sousse",
    cities: [
      { label: "sousse medina", value: "sousse medina" },
      { label: "Sahloul", value: "Sahloul" },
      { label: "Kalaa", value: "Kalaa" },
    ],
  },
  {
    value: "Tunis",
    label: "Tunis",
    cities: [
      { label: "Lac", value: "Lac" },
      { label: "Lafayette", value: "Lafayette" },
    ],
  },
];

export const Banner: React.FC<Props> = ({
  imageUrl,
  intlTitleId,
  intlDescriptionId,
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { filterState, changeLocationState, changeLocationCity } = useContext<any>(FilterContext);

  const setSticky = useCallback(() => dispatch({ type: "SET_STICKY" }), [
    dispatch,
  ]);
  const removeSticky = useCallback(() => dispatch({ type: "REMOVE_STICKY" }), [
    dispatch,
  ]);


  const handleCardTypeClick = (value) => {
    if (
      filterState.locationState &&
      filterState.locationCity
    )
      router.push(`/${value}`);
  };

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
        <Row>
          <Col>
            <Select
              options={locationOptions}
              value={
                !filterState.locationState
                  ? { label: "Select your state" }
                  : { label: filterState.locationState, value: filterState.locationState }
              }
              onChange={changeLocationState}
            />
          </Col>
          <Col>
            <Select
              options={filterState.cityOptions}
              value={
                !filterState.locationCity
                  ? { label: "Select your city" }
                  : { label: filterState.locationCity, value: filterState.locationCity }
              }
              onChange={changeLocationCity}
              isDisabled={!filterState.locationState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <CardType
              icon={<FruitsVegetable />}
              restaurantType="Superarché"
              value="grocery"
              description="Supermarchés, Épiceries Fines."
              onClick={handleCardTypeClick}
              isActiveStateEmpty={filterState.locationCity === ""}
            ></CardType>
          </Col>
          <Col>
            <CardType
              icon={<Restaurant />}
              restaurantType="Restaurants"
              value="restaurant"
              description="Vos plats préférés près de chez vous."
              onClick={handleCardTypeClick}
              isActiveStateEmpty={filterState.locationCity === ""}
            ></CardType>
          </Col>
        </Row>

        <Waypoint onEnter={removeSticky} onLeave={setSticky} />
      </Content>
    </Box>
  );
};
