import React, { useContext, useState } from "react";
import Link from "next/link";
import {
  Button,
  IconWrapper,
  Wrapper,
  Container,
  LogoWrapper,
  Heading,
  SubHeading,
  HelperText,
  Offer,
  Input,
  Divider,
  LinkButton,
} from "./authentication-form.style";
import { useForm } from "react-hook-form";
import gql from "graphql-tag";
import { Facebook } from "assets/icons/Facebook";
import { Google } from "assets/icons/Google";
import { AuthContext } from "contexts/auth/auth.context";
import { FormattedMessage, useIntl } from "react-intl";
import { useMutation } from "@apollo/react-hooks";

import { GET_LOGGED_IN_CUSTOMER } from "graphql/query/customer.query";

const SIGN_UP = gql`
  mutation signUp($user: SignUpInput!) {
    signUp(user: $user) {
      id
      email
      name
    }
  }
`;

export default function SignOutModal() {
  const intl = useIntl();
  const { authDispatch } = useContext<any>(AuthContext);
  const [user, setUser] = useState([]);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  const { register, handleSubmit, setValue } = useForm();
  const [signUp] = useMutation(SIGN_UP, {
    update(cache, { data: { signUp } }) {
      const { me } = cache.readQuery({
        query: GET_LOGGED_IN_CUSTOMER,
      });

      cache.writeQuery({
        query: GET_LOGGED_IN_CUSTOMER,
        data: { me: me.concat([signUp]) },
      });
    },
  });

  const onSubmit = ({}) => {
    const newUser = {
      name: name,
      password: password,
      email: email,
    };
    console.log("new user", newUser);
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            value={name}
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
        <Divider>
          <span>
            <FormattedMessage id="orText" defaultMessage="or" />
          </span>
        </Divider>
        <Button
          variant="primary"
          size="big"
          style={{
            width: "100%",
            backgroundColor: "#4267b2",
            marginBottom: 10,
          }}
        >
          <IconWrapper>
            <Facebook />
          </IconWrapper>
          <FormattedMessage
            id="continueFacebookBtn"
            defaultMessage="Continue with Facebook"
          />
        </Button>
        <Button
          variant="primary"
          size="big"
          style={{ width: "100%", backgroundColor: "#4285f4" }}
        >
          <IconWrapper>
            <Google />
          </IconWrapper>
          <FormattedMessage
            id="continueGoogleBtn"
            defaultMessage="Continue with Google"
          />
        </Button>
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
