import React, { useState } from "react";
import { styled, withStyle } from "baseui";
import Button from "../../components/Button/Button";
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
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import NoResult from "../../components/NoResult/NoResult";
import { CURRENCY } from "../../settings/constants";
import Placeholder from "../../components/Placeholder/Placeholder";

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

const GET_VENDORS = gql`
  query getVendors(
    $type: String
    $text: String
    $category: String
    $offset: Int
    $limit: Int
  ) {
    vendors(
      type: $type
      text: $text
      category: $category
      offset: $offset
      limit: $limit
    ) {
      items {
        id
        slug
        type
        name
        thumbnailUrl
        description
        promotion
      }
      totalCount
      hasMore
    }
  }
`;
const typeSelectOptions = [
  { value: "grocery", label: "Grocery" },
  { value: "women-cloths", label: "Women Cloths" },
  { value: "bags", label: "Bags" },
  { value: "makeup", label: "Makeup" },
];

export default function Restaurants() {
  const { data, error, refetch, fetchMore } = useQuery(GET_VENDORS);
  const [loadingMore, toggleLoading] = useState(false);
  const [type, setType] = useState([]);
  const [search, setSearch] = useState([]);

  if (error) {
    return <div>Error! {error.message}</div>;
  }
  function loadMore() {
    toggleLoading(true);
    fetchMore({
      variables: {
        offset: data.vendors.items.length,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        toggleLoading(false);
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          vendors: {
            __typename: prev.vendors.__typename,
            items: [...prev.vendors.items, ...fetchMoreResult.vendors.items],
            hasMore: fetchMoreResult.vendors.hasMore,
          },
        });
      },
    });
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
  function handleSearch(event) {
    const value = event.currentTarget.value;
    setSearch(value);
    refetch({ text: value });
  }

  return (
    <Grid fluid={true}>
      <Row>
        <Col md={12}>
          <Header style={{ marginBottom: 15 }}>
            <Col md={2} xs={12}>
              <Heading>Restaurants</Heading>
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

                <Col md={9} xs={12}>
                  <Input
                    value={search}
                    placeholder="Ex: Search By Name"
                    onChange={handleSearch}
                    clearable
                  />
                </Col>
              </Row>
            </Col>
          </Header>

          <Row>
            {data ? (
              data.vendors && data.vendors.items.length !== 0 ? (
                data.vendors.items.map((item: any, index: number) => (
                  <Col
                    md={4}
                    lg={4}
                    sm={6}
                    xs={12}
                    key={index}
                    style={{ margin: "15px 0" }}
                  >
                    <Fade bottom duration={800} delay={index * 10}>
                      <RestaurantCard
                        id={item.id}
                        name={item.name}
                        type={item.type}
                        thumbnailUrl={item.thumbnailUrl}
                        description={item.description}
                        promotion={item.promotion}
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
          {data && data.vendors && data.vendors.hasMore && (
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
