import React, { useState, useCallback } from "react";
import { styled, withStyle } from "baseui";
import { useDrawerDispatch } from "../../context/DrawerContext";
import Button from "../../components/Button/Button";
import { useDrawerDispatch } from "../../context/DrawerContext";

import {
  Grid,
  Row as Rows,
  Col as Column,
} from "../../components/FlexBox/FlexBox";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Header, Heading } from "../../components/WrapperStyle";
import Fade from "react-reveal/Fade";
import ProductCard from "../../components/ProductCard/ProductCard";
import NoResult from "../../components/NoResult/NoResult";
import { CURRENCY } from "../../settings/constants";
import Placeholder from "../../components/Placeholder/Placeholder";
import {
  Plus
} from "../../components/AllSvgIcon";

export const ProductsRow = styled("div", ({ $theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  marginTop: "25px",
  backgroundColor: $theme.colors.backgroundF7,
  position: "relative",
  zIndex: "1",

  "@media only screen and (max-width: 767px)": {
    marginLeft: "-7.5px",
    marginRight: "-7.5px",
    marginTop: "15px",
  },
}));

export const Col = withStyle(Column, () => ({
  "@media only screen and (max-width: 767px)": {
    marginBottom: "20px",

    ":last-child": {
      marginBottom: 0,
    },
  },
}));

const Row = withStyle(Rows, () => ({
  "@media only screen and (min-width: 768px) and (max-width: 991px)": {
    alignItems: "center",
  },
}));

export const ProductCardWrapper = styled("div", () => ({
  height: "100%",
}));

export const LoaderWrapper = styled("div", () => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexWrap: "wrap",
}));

export const LoaderItem = styled("div", () => ({
  width: "25%",
  padding: "0 15px",
  marginBottom: "30px",
}));

const GET_PRODUCTS = gql`
  query getProducts(
    $type: String
    $searchText: String
    $sortByPrice: String
    $category: String
    $offset: Int
    $limit: Int
    $locationState: String
    $locationCity: String
  ) {
    products(
      type: $type
      searchText: $searchText
      sortByPrice: $sortByPrice
      locationState: $locationState
      locationCity: $locationCity
      category: $category
      offset: $offset
      limit: $limit
    ) {
      items {
        id
        title
        unit
        price
        description
        discountInPercent
        type
        image
        gallery {
          url
        }
        categories {
          id
          title
          slug
        }
      }
      hasMore
    }
  }
`;

const typeSelectOptions = [
  { value: "grocery", label: "Grocery" },
  { value: "foods", label: "foods" },
];

const locationStateOptions = [
  { value: "sousse", label: "sousse" },
  { value: "tunis", label: "tunis" },
];

const locationCityOptions = [
  { value: "grocery", label: "Grocery" },
  { value: "foods", label: "foods" },
];

const priceSelectOptions = [
  { value: "highestToLowest", label: "Highest To Lowest" },
  { value: "lowestToHighest", label: "Lowest To Highest" },
];

export default function Products() {
  const { data, error, refetch, fetchMore } = useQuery(GET_PRODUCTS);
  const [loadingMore, toggleLoading] = useState(false);
  const [type, setType] = useState([]);
<<<<<<< HEAD
  const [locationState, setLocationState] = useState([]);
  const [locationCity, setLocationCity] = useState([]);
=======
  const dispatch = useDrawerDispatch();
>>>>>>> 8c78b072829de8c72a54252b5853b74a8a347cd9
  const [priceOrder, setPriceOrder] = useState([]);
  const [search, setSearch] = useState([]);
  const dispatch = useDrawerDispatch();
  const openDrawer = useCallback(
    () => dispatch({ type: "OPEN_DRAWER", drawerComponent: "PRODUCT_FORM" }),
    [dispatch]
  );

  const openDrawer = useCallback(
    () => dispatch({ type: "OPEN_DRAWER", drawerComponent: "PRODUCT_FORM" }),
    [dispatch]
  );

  if (error) {
    return <div>Error! {error.message}</div>;
  }
  function loadMore() {
    toggleLoading(true);
    fetchMore({
      variables: {
        offset: data.products.items.length,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        toggleLoading(false);
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          products: {
            __typename: prev.products.__typename,
            items: [...prev.products.items, ...fetchMoreResult.products.items],
            hasMore: fetchMoreResult.products.hasMore,
          },
        });
      },
    });
  }
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
  function handleCategoryType({ value }) {
    setType(value);
    if (value.length) {
      refetch({
        type: value[0].value,
      });
    } else {
      refetch({
        type: null,
      });
    }
  }

  function handleChangeState({ value }) {
    setLocationState(value);
    if (value.length) {
      refetch({
        type: value[0].value,
      });
    } else {
      refetch({
        type: null,
      });
    }
  }
  function handleChangeCity({ value }) {
    setLocationCity(value);
    if (value.length) {
      refetch({
        type: value[0].value,
      });
    } else {
      refetch({
        type: null,
      });
    }
  }

  function handleSearch(event) {
    const value = event.currentTarget.value;
    setSearch(value);
    refetch({ searchText: value });
  }

  return (
    <Grid fluid={true}>
      <Row>
        <Col md={12}>
          <Header style={{ marginBottom: 15 }}>
            <Col md={2} xs={12}>
              <Heading>Products</Heading>
            </Col>

            <Col md={10} xs={12}>
              <Row>
                <Col md={3} xs={12}>
                  <Select
                    options={typeSelectOptions}
                    labelKey="label"
                    valueKey="value"
                    placeholder="Category Type"
                    value={type}
                    searchable={false}
                    onChange={handleCategoryType}
                  />
                </Col>

                <Col md={3} xs={12}>
                  <Select
                    options={priceSelectOptions}
                    labelKey="label"
                    valueKey="value"
                    value={priceOrder}
                    placeholder="Price"
                    searchable={false}
                    onChange={handlePriceSort}
                  />
                </Col>

                <Col md={3} xs={12}>
                  <Input
                    value={search}
                    placeholder="Ex: Search By Name"
                    onChange={handleSearch}
                    clearable
                  />
                </Col>

                <Col md={3} lg={3}>
                  <Button
                    onClick={openDrawer}
                    startEnhancer={() => <Plus />}
                    overrides={{
                      BaseButton: {
                        style: () => ({
                          width: "100%",
                          borderTopLeftRadius: "3px",
                          borderTopRightRadius: "3px",
                          borderBottomLeftRadius: "3px",
                          borderBottomRightRadius: "3px",
                        }),
                      },
                    }}
                  >
                    Add Product
                  </Button>
                </Col>
              </Row>
            </Col>
          </Header>

          <Row>
            {data ? (
              data.products && data.products.items.length !== 0 ? (
                data.products.items.map((item: any, index: number) => (
                  <Col
                    md={4}
                    lg={3}
                    sm={6}
                    xs={12}
                    key={index}
                    style={{ margin: "15px 0" }}
                  >
                    <Fade bottom duration={800} delay={index * 10}>
                      <ProductCard
                        title={item.title}
                        unit={item.unit}
                        image={item.image}
                        currency={CURRENCY}
                        price={item.price}
                        discountInPercent={item.discountInPercent}
                        data={item}
                      />
                    </Fade>
                  </Col>
                ))
              ) : (
                <NoResult />
              )
            ) : (
              <LoaderWrapper>
                <LoaderItem>
                  <Placeholder />
                </LoaderItem>
                <LoaderItem>
                  <Placeholder />
                </LoaderItem>
                <LoaderItem>
                  <Placeholder />
                </LoaderItem>
                <LoaderItem>
                  <Placeholder />
                </LoaderItem>
              </LoaderWrapper>
            )}
          </Row>
          {data && data.products && data.products.hasMore && (
            <Row>
              <Col
                md={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button onClick={loadMore} isLoading={loadingMore}>
                  Load More
                </Button>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </Grid>
  );
}
