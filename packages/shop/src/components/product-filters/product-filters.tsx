import React, { useContext, useState } from "react";
import { FilterContext } from "contexts/filter/filter.context";
import { useQuery } from "@apollo/react-hooks";
import { FiltersWrapper, Row, RowInput } from "./product-filters.style";
import { FormattedMessage } from "react-intl";
import Select from "../select/select";
import Input from "../input/input";
import { Button } from "../button/button";
import { GET_PRODUCTS } from "graphql/query/products.query";

interface Props {
  onEnter: (e: React.SyntheticEvent) => void;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;

  value: string;
  name: string;
  minimal?: boolean;
  className?: string;
  showButtonText?: boolean;
  shadow?: string;
  onClick?: Function;
  [key: string]: unknown;
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

const ProductFilters: React.FC<Props> = ({ onClick }) => {
  const { filterState, changeLocationState, changeLocationCity } = useContext<
    any
  >(FilterContext);

  const { data, error, refetch } = useQuery(GET_PRODUCTS);
  const [priceOrder, setPriceOrder] = useState([]);
  const [search, setSearch] = useState([]);

  function handlePriceSort({ value }) {
    setPriceOrder(value);
    if (value.length) {
      refetch({
        sortByPrice: value[0].value,
      });
    } else {
      refetch({
        sortByPrice: null,
      });
    }
  }

  function handleSearch(event) {
    const value = event.currentTarget.value;
    setSearch(value);
    refetch({ searchText: value });
  }

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
          value={search}
          intlPlaceholderId="searchPlaceholder"
          style={{ height: 57 }}
          onChange={handleSearch}
          clearable
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
          onClick={handleSearch.bind(this)}
        >
          <FormattedMessage id="searchButtonText" defaultMessage="Search" />
        </Button>
      </Row>
    </FiltersWrapper>
  );
};

export default ProductFilters;
