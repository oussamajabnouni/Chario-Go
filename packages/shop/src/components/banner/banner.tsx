import React, { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
import {
  Box,
  Image,
  Content,
  Title,
  Description,
  SearchWrapper,
  Row,
  Col,
} from "./banner.style";

import Select from "../select/select";
import { Restaurant } from "assets/icons/Restaurant";
import { FruitsVegetable } from "assets/icons/FruitsVegetable";

import { Waypoint } from "react-waypoint";
import { useAppDispatch } from "contexts/app/app.provider";
import Search from "features/search/search";
import CardType from "../card-type/card-type";

interface Props {
  imageUrl: string;
  intlTitleId: string;
  intlDescriptionId: string;
}

export const locationOptions = [
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
  const [activeState, setActiveState] = useState({});
  const [activeCity, setActiveCity] = useState({});
  const [citiesList, setCitiesList] = useState([]);
  const [activeType, setActiveType] = useState("");

  const setSticky = useCallback(() => dispatch({ type: "SET_STICKY" }), [
    dispatch,
  ]);
  const removeSticky = useCallback(() => dispatch({ type: "REMOVE_STICKY" }), [
    dispatch,
  ]);

  const handleStateChange = (item) => {
    setActiveState(item);
    setCitiesList(item.cities);
    setActiveCity(item.cities[0]);
  };
  const handleCityChange = (value) => {
    setActiveCity(value);
  };
  const handleCardTypeClick = (value) => {
    setActiveType(value);
    if (
      Object.getOwnPropertyNames(activeState).length !== 0 &&
      Object.getOwnPropertyNames(activeCity).length !== 0
    )
      router.push(`/${value}`);
  };
  const isActiveStateEmpty =
    Object.getOwnPropertyNames(activeState).length === 0;

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
                isActiveStateEmpty
                  ? { label: "Select your state" }
                  : activeState
              }
              onChange={handleStateChange}
            />
          </Col>
          <Col>
            <Select
              options={citiesList}
              value={activeCity}
              onChange={handleCityChange}
              isDisabled={isActiveStateEmpty}
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
              isActiveStateEmpty={isActiveStateEmpty}
            ></CardType>
          </Col>
          <Col>
            <CardType
              icon={<Restaurant />}
              restaurantType="Restaurants"
              value="restaurant"
              description="Vos plats préférés près de chez vous."
              onClick={handleCardTypeClick}
              isActiveStateEmpty={isActiveStateEmpty}
            ></CardType>
          </Col>
        </Row>

        <Waypoint onEnter={removeSticky} onLeave={setSticky} />
      </Content>
    </Box>
  );
};
