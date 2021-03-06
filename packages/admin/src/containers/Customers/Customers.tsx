import React, { useState } from 'react';
import Moment from 'react-moment';
import { styled, withStyle } from 'baseui';
import { Avatar } from "baseui/avatar";
import {
  Grid,
  Row as Rows,
  Col as Column,
} from '../../components/FlexBox/FlexBox';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Wrapper, Header, Heading } from '../../components/WrapperStyle';

import {
  TableWrapper,
  StyledTable,
  StyledHeadCell,
  StyledBodyCell,
} from './Customers.style';
import NoResult from '../../components/NoResult/NoResult';

const GET_CUSTOMERS = gql`
  query getUsers($email: String, $role: String) {
    users(email: $email, role: $role) {
      id
      image
      name
      email
      createdAt
    }
  }
`;

const Col = withStyle(Column, () => ({
  '@media only screen and (max-width: 767px)': {
    marginBottom: '20px',

    ':last-child': {
      marginBottom: 0,
    },
  },
}));

const Row = withStyle(Rows, () => ({
  '@media only screen and (min-width: 768px)': {
    alignItems: 'center',
  },
}));


const sortByOptions = [
  { value: 'highestToLowest', label: 'Highest To Lowest' },
  { value: 'lowestToHighest', label: 'Lowest To Highest' },
];

export default function Customers() {
  const { data, error, refetch } = useQuery(GET_CUSTOMERS);
  const [stock, setStock] = useState([]);
  const [search, setSearch] = useState("");

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  function handleSort({ value }) {
    setStock(value);
    if (value.length) {
      refetch({
        sortBy: value[0].value,
      });
    } else {
      refetch({
        sortBy: null,
      });
    }
  }
  function handleSearch(event) {
    const value = event.currentTarget.value;
    setSearch(value);
    refetch({ email: value });
  }

  return (
    <Grid fluid={true}>
      <Row>
        <Col md={12}>
          <Header
            style={{
              marginBottom: 30,
              boxShadow: '0 0 5px rgba(0, 0 ,0, 0.05)',
            }}
          >
            <Col md={3}>
              <Heading>Customers</Heading>
            </Col>

            <Col md={9}>
              <Row>
                <Col md={9}>
                  <Input
                    value={search}
                    placeholder='Ex: Search By Name'
                    onChange={handleSearch}
                    clearable
                  />
                </Col>

                <Col md={3}>
                  <Select
                    options={sortByOptions}
                    labelKey='label'
                    valueKey='value'
                    placeholder='Order Amount'
                    value={stock}
                    searchable={false}
                    onChange={handleSort}
                  />
                </Col>
              </Row>
            </Col>
          </Header>

          <Wrapper style={{ boxShadow: '0 0 5px rgba(0, 0 , 0, 0.05)' }}>
            <TableWrapper>
              <StyledTable $gridTemplateColumns='minmax(70px, 70px) minmax(70px, 70px) minmax(200px, auto) minmax(150px, auto) minmax(150px, max-content)'>
                <StyledHeadCell>ID</StyledHeadCell>
                <StyledHeadCell>Image</StyledHeadCell>
                <StyledHeadCell>Name</StyledHeadCell>
                <StyledHeadCell>Email</StyledHeadCell>
                <StyledHeadCell>Created At</StyledHeadCell>

                {data ? (
                  data.users.length ? (
                    data.users
                      .map((item) => Object.values(item))
                      .map((row, index) => (
                        <React.Fragment key={index}>
                          <StyledBodyCell>{row[0]}</StyledBodyCell>
                          <StyledBodyCell>
                            <Avatar
                              name={row[2]}
                              size="scale1000"
                              src={row[1]}
                            />
                          </StyledBodyCell>
                          <StyledBodyCell>{row[2]}</StyledBodyCell>
                          <StyledBodyCell>{row[3]}</StyledBodyCell>
                          <StyledBodyCell>
                            <Moment format='Do MMM YYYY'>{row[4]}</Moment>
                          </StyledBodyCell>
                        </React.Fragment>
                      ))
                  ) : (
                      <NoResult
                        hideButton={false}
                        style={{
                          gridColumnStart: '1',
                          gridColumnEnd: 'one',
                        }}
                      />
                    )
                ) : null}
              </StyledTable>
            </TableWrapper>
          </Wrapper>
        </Col>
      </Row>
    </Grid>
  );
}
