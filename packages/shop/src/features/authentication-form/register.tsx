import React, { useContext, useState } from "react";
import Link from "next/link";
import {
  Button,
  Wrapper,
  Container,
  Heading,
  SubHeading,
  HelperText,
  Offer,
  Input,
  LinkButton,
} from "./authentication-form.style";
import ApolloClient from "apollo-boost";
import { useForm } from "react-hook-form";
import gql from "graphql-tag";
import Alert from 'react-bootstrap/Alert';
import { AuthContext } from "contexts/auth/auth.context";
import { FormattedMessage, useIntl } from "react-intl";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import { closeModal } from "@redq/reuse-modal";
import { GET_LOGGED_IN_CUSTOMER } from "graphql/query/customer.query";

const SIGN_UP = gql`
  mutation signUp($user: SignUpInput!) {
    signUp(user: $user) {
      id
      email
      name
      image
    }
  }
`;

export default function SignOutModal() {
  const intl = useIntl();
  const client: ApolloClient<any> = useApolloClient();
  const { authDispatch } = useContext<any>(AuthContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");

  const { register, handleSubmit, setValue } = useForm();
  const [signUp, { loading }] = useMutation(SIGN_UP, {
    onCompleted({ signUp }) {
      localStorage.setItem("access_token", signUp as string);
      client.writeData({ data: { isLoggedIn: true } });
      authDispatch({ type: "SIGNIN_SUCCESS", payload: { ...signUp } });
      closeModal();
    },
    update(cache, { data: { signUp } }) {
      // const { me } = cache.readQuery({
      //   query: GET_LOGGED_IN_CUSTOMER,
      // });

      // cache.writeQuery({
      //   query: GET_LOGGED_IN_CUSTOMER,
      //   data: { me: me.concat([signUp]) },
      // });
    },
    onError(error) {
      setError(error.graphQLErrors[0].message)
    }
  });

  const onSubmit = ({ }) => {
    const newUser = {
      name: name,
      password: password,
      email: email,
    };
    signUp({
      variables: { user: newUser },
    });
  };

  const toggleSignInForm = () => {
    authDispatch({
      type: "SIGNIN",
    });
  };

  const succesMessage = () => {
    return (
      <FormattedMessage
        id="succes"
        defaultMessage="Account successfully created"
      />
    );
  };

  return (
    <Wrapper>
      <Container>
        <Heading>
          <FormattedMessage id="signUpBtnText" defaultMessage="Sign Up" />
        </Heading>
        <SubHeading>
          <FormattedMessage
            id="signUpText"
            defaultMessage="Every fill is required in sign up"
          />
        </SubHeading>
        {loading && (
          <Alert variant="primary">Loading ...</Alert>
        )}
        {error && !loading && (
          <Alert variant="danger"
            dismissible>{error}</Alert>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            type="text"
            ref={register({ required: true })}
            placeholder={intl.formatMessage({
              id: "name",
              defaultMessage: "Name",
            })}
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            ref={register({ required: true })}
            placeholder={intl.formatMessage({
              id: "emailAddressPlaceholder",
              defaultMessage: "Email Address or Contact No.",
            })}
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            ref={register({ required: true })}
            placeholder={intl.formatMessage({
              id: "passwordPlaceholder",
              defaultMessage: "Password (min 6 characters)",
            })}
          />
          <HelperText style={{ padding: "20px 0 30px" }}>
            <FormattedMessage
              id="signUpText"
              defaultMessage="By signing up, you agree to Pickbazar's"
            />{" "}
            <Link href="/">
              <a>
                <FormattedMessage
                  id="termsConditionText"
                  defaultMessage="Terms &amp; Condtion"
                />
              </a>
            </Link>
          </HelperText>
          <Button
            variant="primary"
            size="big"
            style={{ width: "100%" }}
            type="submit"
          >
            <FormattedMessage id="continueBtn" defaultMessage="Continue" />
          </Button>
        </form>

        <Offer style={{ padding: "20px 0" }}>
          <FormattedMessage
            id="alreadyHaveAccount"
            defaultMessage="Already have an account?"
          />{" "}
          <LinkButton onClick={toggleSignInForm}>
            <FormattedMessage id="loginBtnText" defaultMessage="Login" />
          </LinkButton>
        </Offer>
      </Container>
    </Wrapper>
  );
}
