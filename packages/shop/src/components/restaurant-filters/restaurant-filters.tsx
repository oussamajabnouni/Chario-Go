import React, { useContext } from "react";
import { FilterContext } from "contexts/filter/filter.context";

import { FiltersWrapper, Row, RowInput } from "./restaurant-filters.style";
import { FormattedMessage } from "react-intl";
import Select from "../select/select";
import Input from "../input/input";
import { Button } from "../button/button";



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

const RestaurantFilters: React.FC = () => {
  const {
    filterDispatch,
    filterState,
    changeLocationState,
    changeLocationCity,
  } = useContext<any>(FilterContext);

  const handleSearchInput = (event) => {
    const value = event.currentTarget.value;
    filterDispatch({
      type: "SET_SEARCH_TERM",

      payload: value,
    });
  };

  return (
    <FiltersWrapper>
      <Row>
        <Select
          options={locationOptions}
          value={
            !filterState.locationState
              ? { label: "Select your state" }
              : {
                label: filterState.locationState,
                value: filterState.locationState,
              }
          }
          onChange={changeLocationState}
        />
      </Row>
      <Row>
        <Select
          options={filterState.cityOptions}
          value={
            !filterState.locationCity
              ? { label: "Select your city" }
              : {
                label: filterState.locationCity,
                value: filterState.locationCity,
              }
          }
          onChange={changeLocationCity}
          isDisabled={!filterState.locationState}
        />
      </Row>
      <RowInput>
        <Input
          type="text"
          intlPlaceholderId="searchPlaceholder"
          style={{ height: 57 }}
          onChange={handleSearchInput}
        />
      </RowInput>
      <Row>
        <Select inputValue="Trier" />
      </Row>
      <Row>
        <Button
          variant="outlined"
          style={{ height: "100%", width: "100%" }}
          disabled={filterState.locationCity === ""}
        >
          <FormattedMessage id="searchButtonText" defaultMessage="Search" />
        </Button>
      </Row>
    </FiltersWrapper>
  );
};

export default RestaurantFilters;
