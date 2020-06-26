import React from "react";
import { FiltersWrapper, Row } from "./product-filters.style";
import Select from "../select/select";

interface Props {
  onEnter: (e: React.SyntheticEvent) => void;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  name: string;
  minimal?: boolean;
  className?: string;
  showButtonText?: boolean;
  shadow?: string;
  [key: string]: unknown;
}

const ProductFilters: React.FC<Props> = () => {
  return (
    <FiltersWrapper>
      <Row>
        <Select inputValue="" />
      </Row>
      <Row>
        <Select inputValue="" />
      </Row>
      <Row>
        <Select inputValue="" />
      </Row>
      <Row>
        <Select inputValue="Trier" />
      </Row>
    </FiltersWrapper>
  );
};

export default ProductFilters;
