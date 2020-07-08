import React from "react";
import { FiltersWrapper, Row, RowInput } from "./restaurant-filters.style";
import { FormattedMessage } from "react-intl";
import Select from "../select/select";
import Input from "../input/input";
import { Button } from "../button/button";
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
  [key: string]: unknown;
}

const RestaurantFilters: React.FC<Props> = () => {
  return (
    <FiltersWrapper>
      <Row>
        <Select inputValue="" />
      </Row>
      <Row>
        <Select inputValue="" />
      </Row>
      <RowInput>
        <Input
          type="text"
          intlPlaceholderId="searchPlaceholder"
          style={{ height: 57 }}
        />
      </RowInput>
      <Row>
        <Select inputValue="Trier" />
      </Row>
      <Row>
        <Button variant="outlined" style={{ height: "100%", width: "100%" }}>
          <FormattedMessage id="searchButtonText" defaultMessage="Search" />
        </Button>
      </Row>
    </FiltersWrapper>
  );
};

export default RestaurantFilters;
