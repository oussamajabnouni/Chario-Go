import React, { useState } from "react";
import { styled, withStyle, createThemedUseStyletron } from "baseui";
import Moment from "react-moment";
import Button, { KIND } from "../../components/Button/Button";
import {
  Grid,
  Row as Rows,
  Col as Column,
} from "../../components/FlexBox/FlexBox";

import Input from "../../components/Input/Input";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Wrapper, Header, Heading } from "../../components/WrapperStyle";

import { StyledHeadCell, StyledCell } from "./Orders.style";
import NoResult from "../../components/NoResult/NoResult";

const GET_ORDERS = gql`
  query getOrders($status: String, $limit: Int, $searchText: String) {
    orders(status: $status, limit: $limit, searchText: $searchText) {
      id

      status
      payment_method
      contact_number
      deliveryTime
      amount
      subtotal
      discount
      deliveryFee
      deliveryAddress
      date
    }
  }
`;

type CustomThemeT = { red400: string; textNormal: string; colors: any };
const themedUseStyletron = createThemedUseStyletron<CustomThemeT>();

const Status = styled("div", ({ $theme }) => ({
  ...$theme.typography.fontBold14,
  color: $theme.colors.textDark,
  display: "flex",
  alignItems: "center",
  lineHeight: "1",
  textTransform: "capitalize",

  ":before": {
    content: '""',
    width: "10px",
    height: "10px",
    display: "inline-block",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
    borderBottomLeftRadius: "10px",
    backgroundColor: $theme.borders.borderE6,
    marginRight: "10px",
  },
}));

const Col = withStyle(Column, () => ({
  "@media only screen and (max-width: 767px)": {
    marginBottom: "20px",

    ":last-child": {
      marginBottom: 0,
    },
  },
}));

const Row = withStyle(Rows, () => ({
  "@media only screen and (min-width: 768px)": {
    alignItems: "center",
  },
}));

const statusSelectOptions = [
  { value: "delivered", label: "Delivered" },
  { value: "pending", label: "Pending" },
  { value: "processing", label: "Processing" },
  { value: "failed", label: "Failed" },
];
const limitSelectOptions = [
  { value: 7, label: "Last 7 orders" },
  { value: 15, label: "Last 15 orders" },
  { value: 30, label: "Last 30 orders" },
];

export default function Orders() {
  const [checkedId, setCheckedId] = useState([]);
  const [checked, setChecked] = useState(false);

  const [useCss, theme] = themedUseStyletron();
  const sent = useCss({
    ":before": {
      content: '""',
      backgroundColor: theme.colors.primary,
    },
  });
  const failed = useCss({
    ":before": {
      content: '""',
      backgroundColor: theme.colors.red400,
    },
  });
  const processing = useCss({
    ":before": {
      content: '""',
      backgroundColor: theme.colors.textNormal,
    },
  });
  const paid = useCss({
    ":before": {
      content: '""',
      backgroundColor: theme.colors.blue400,
    },
  });

  const [status, setStatus] = useState([]);
  const [limit, setLimit] = useState([]);
  const [search, setSearch] = useState([]);

  const { data, error, refetch } = useQuery(GET_ORDERS);
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  function handleStatus({ value }) {
    setStatus(value);
    if (value.length) {
      refetch({
        status: value[0].value,
        limit: limit.length ? limit[0].value : null,
      });
    } else {
      refetch({ status: null });
    }
  }

  function handleLimit({ value }) {
    setLimit(value);
    if (value.length) {
      refetch({
        status: status.length ? status[0].value : null,
        limit: value[0].value,
      });
    } else {
      refetch({
        limit: null,
      });
    }
  }
  function handleSearch(event) {
    const { value } = event.currentTarget;
    setSearch(value);
    refetch({ searchText: value });
  }
  function onAllCheck(event) {
    if (event.target.checked) {
      const idx = data && data.orders.map((order) => order.id);
      setCheckedId(idx);
    } else {
      setCheckedId([]);
    }
    setChecked(event.target.checked);
  }

  function handleCheckbox(event) {
    const { name } = event.currentTarget;
    if (!checkedId.includes(name)) {
      setCheckedId((prevState) => [...prevState, name]);
    } else {
      setCheckedId((prevState) => prevState.filter((id) => id !== name));
    }
  }
  return (
    <Grid fluid={true}>
      <Row>
        <Col md={12}>
          <Header
            style={{
              marginBottom: 30,
              boxShadow: "0 0 8px rgba(0, 0 ,0, 0.1)",
            }}
          >
            <Col md={3} xs={12}>
              <Heading>New Orders</Heading>
            </Col>

            <Col md={9} xs={12}>
              <Row>
                <Col md={6} xs={12}>
                  <Input
                    value={search}
                    placeholder="Ex: Search By Address"
                    onChange={handleSearch}
                    clearable
                  />
                </Col>
              </Row>
            </Col>
          </Header>

          {data ? (
            data.orders.length ? (
              data.orders
                .map((item) => Object.values(item))
                .map((row, index) => (
                  <Wrapper
                    style={{
                      boxShadow: "0 0 5px rgba(0, 0 , 0, 0.05)",
                      marginBottom: "15px",
                    }}
                  >
                    <React.Fragment key={index}>
                      <StyledHeadCell>Order number {row[0]}</StyledHeadCell>

                      <StyledCell>{row[0]}</StyledCell>
                      <StyledCell>{row[1]}</StyledCell>
                      <StyledCell>
                        <Moment format="Do MMM YYYY">{row[2]}</Moment>
                      </StyledCell>
                      <StyledCell>{row[3]}</StyledCell>
                      <StyledCell>${row[4]}</StyledCell>
                      <StyledCell>{row[5]}</StyledCell>
                      <StyledCell>{row[6]}</StyledCell>
                      <StyledCell style={{ justifyContent: "center" }}>
                        <Status
                          className={
                            row[7].toLowerCase() === "processing"
                              ? processing
                              : ""
                          }
                        >
                          Processing
                        </Status>
                      </StyledCell>
                      <Button
                        kind={KIND.secondary}
                        overrides={{
                          BaseButton: {
                            style: ({ $theme }) => ({
                              width: "30%",
                              borderTopLeftRadius: "3px",
                              borderTopRightRadius: "3px",
                              borderBottomRightRadius: "3px",
                              borderBottomLeftRadius: "3px",
                              marginRight: "15px",
                              marginLeft: "15px",
                              marginBottom: "15px",
                              color: $theme.colors.red400,
                            }),
                          },
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        overrides={{
                          BaseButton: {
                            style: ({ $theme }) => ({
                              width: "32%",
                              borderTopLeftRadius: "3px",
                              borderTopRightRadius: "3px",
                              borderBottomRightRadius: "3px",
                              borderBottomLeftRadius: "3px",
                              marginRight: "15px",
                              marginBottom: "15px",
                            }),
                          },
                        }}
                      >
                        Validate
                      </Button>
                      <Button
                        overrides={{
                          BaseButton: {
                            style: ({ $theme }) => ({
                              width: "32%",
                              borderTopLeftRadius: "3px",
                              borderTopRightRadius: "3px",
                              borderBottomRightRadius: "3px",
                              borderBottomLeftRadius: "3px",

                              marginBottom: "15px",
                            }),
                          },
                        }}
                      >
                        Validate and print
                      </Button>
                    </React.Fragment>
                  </Wrapper>
                ))
            ) : (
              <NoResult
                hideButton={false}
                style={{
                  gridColumnStart: "1",
                  gridColumnEnd: "one",
                }}
              />
            )
          ) : null}
        </Col>
      </Row>
    </Grid>
  );
}
