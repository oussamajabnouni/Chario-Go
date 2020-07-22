import React, { useContext } from "react";
import {
  LinkButton,
  Button,
  Wrapper,
  Container,
  Heading,
  SubHeading,
  OfferSection,
  Offer,
  Input,
} from "./authentication-form.style";
import ApolloClient from "apollo-boost";
import Alert from 'react-bootstrap/Alert';
import gql from "graphql-tag";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import { AuthContext } from "contexts/auth/auth.context";
import { FormattedMessage, useIntl } from "react-intl";
import { closeModal } from "@redq/reuse-modal";

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      name
      image
    }
  }
`;

export default function SignInModal() {
  const client: ApolloClient<any> = useApolloClient();
  const [login, { loading }] = useMutation(LOGIN, {
    onCompleted({ login }) {
      localStorage.setItem("access_token", login as string);
      client.writeData({ data: { isLoggedIn: true } });
      authDispatch({ type: "SIGNIN_SUCCESS", payload: { ...login } });
      closeModal();
    },
    onError(error) {
      setError(error.graphQLErrors[0].message)
    }
  });

  const intl = useIntl();
  const { authDispatch } = useContext<any>(AuthContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const toggleSignUpForm = () => {
    authDispatch({
      type: "SIGNUP",
    });
  };

  const toggleForgotPassForm = () => {
    authDispatch({
      type: "FORGOTPASS",
    });
  };

  const loginCallback = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      login({ variables: { email, password } });
    }
  };


  return (
    <Wrapper>
      <Container>
        <Heading>
          <FormattedMessage id="welcomeBack" defaultMessage="Welcome Back" />
        </Heading>

        <SubHeading>
          <FormattedMessage
            id="loginText"
            defaultMessage="Login with your email &amp; password"
          />
        </SubHeading>
        {loading && (
          <Alert variant="primary">Loading ...</Alert>
        )}
        {error && !loading && (
          <Alert variant="danger"
            dismissible>{error}</Alert>
        )}
        <form onSubmit={loginCallback}>
          <Input
            type="email"
            placeholder={intl.formatMessage({
              id: "emailAddressPlaceholder",
              defaultMessage: "Email Address.",
            })}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            type="password"
            placeholder={intl.formatMessage({
              id: "passwordPlaceholder",
              defaultMessage: "Password (min 6 characters)",
            })}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button
            variant="primary"
            size="big"
            style={{ width: "100%" }}
            type="submit"
            isLoading
          >
            <FormattedMessage id="continueBtn" defaultMessage="Continue" />
          </Button>
        </form>


        <Offer style={{ padding: "20px 0" }}>
          <FormattedMessage
            id="dontHaveAccount"
            defaultMessage="Don't have any account?"
          />{" "}
          <LinkButton onClick={toggleSignUpForm}>
            <FormattedMessage id="signUpBtnText" defaultMessage="Sign Up" />
          </LinkButton>
        </Offer>
      </Container>

      <OfferSection>
        <Offer>
          <FormattedMessage
            id="forgotPasswordText"
            defaultMessage="Forgot your password?"
          />{" "}
          <LinkButton onClick={toggleForgotPassForm}>
            <FormattedMessage id="resetText" defaultMessage="Reset It" />
          </LinkButton>
        </Offer>
      </OfferSection>
    </Wrapper>
  );
}
