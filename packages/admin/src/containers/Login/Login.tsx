import React, { useContext, useState } from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Notification, KIND } from 'baseui/notification';

import { AuthContext } from "../../context/auth";
import {
  FormFields,
  FormLabel,
  FormTitle,
  Error,
} from "../../components/FormFields/FormFields";
import { Wrapper, FormWrapper, LogoImage, LogoWrapper } from "./Login.style";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Logoimage from "../../assets/image/chariogoAdmin.png";

const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    id
    email
    role{
      name
    }
  }
}
`;

const initialValues = {
  username: "",
  password: "",
};

const getLoginValidationSchema = () => {
  return Yup.object().shape({
    username: Yup.string().required("Username is Required!"),
    password: Yup.string().required("Password is Required!"),
  });
};

const MyInput = ({ field, form, ...props }) => {
  return <Input {...field} {...props} />;
};

export default () => {
  let history = useHistory();
  let location = useLocation();

  const { authenticate, isAuthenticated } = useContext(AuthContext);
  const [mutationError, setMutationError] = useState(null);

  let { from } = (location.state as any) || { from: { pathname: "/" } };

  const [login, { loading: mutationLoading }] = useMutation(LOGIN, {
    async onCompleted({ login }) {
      if (login.role.name === "CLIENT") {
        setMutationError("Permission denied")
      } else {
        await authenticate({ token: login.email });
        history.replace(from);
      }
    }
  });

  let handleLogin = async ({ username, password }) => {
    try {
      await login({ variables: { email: username, password } });
    } catch (e) {
      setMutationError(e.message);
    }
  };

  if (isAuthenticated) return <Redirect to={{ pathname: "/" }} />;
  return (
    <Wrapper>
      <FormWrapper>
        <Formik
          initialValues={initialValues}
          onSubmit={handleLogin}
          render={({ errors, status, touched }) => (
            <Form>
              <FormFields>
                <LogoWrapper>
                  <LogoImage src={Logoimage} alt="pickbazar-admin" />
                </LogoWrapper>
                <FormTitle>Log in to admin</FormTitle>
              </FormFields>
              {mutationError && (
                <Notification overrides={{
                  Body: { style: { width: 'auto' } },
                }} kind={KIND.negative} closeable> {mutationError}</Notification>
              )}
              <FormFields>
                <FormLabel>Username</FormLabel>
                <Field
                  type="email"
                  name="username"
                  component={MyInput}
                  placeholder="Ex: demo@demo.com"
                />
                {errors.username && touched.username && (
                  <Error>{errors.username}</Error>
                )}
              </FormFields>
              <FormFields>
                <FormLabel>Password</FormLabel>
                <Field
                  type="password"
                  name="password"
                  component={MyInput}
                  placeholder="Ex: demo"
                />
                {errors.password && touched.password && (
                  <Error>{errors.password}</Error>
                )}
              </FormFields>
              <Button
                type="submit"
                isLoading={mutationLoading}
                overrides={{
                  BaseButton: {
                    style: ({ $theme }) => ({
                      width: "100%",
                      marginLeft: "auto",
                      borderTopLeftRadius: "3px",
                      borderTopRightRadius: "3px",
                      borderBottomLeftRadius: "3px",
                      borderBottomRightRadius: "3px",
                    }),
                  },
                }}
              >
                Submit
              </Button>
            </Form>
          )}
          validationSchema={getLoginValidationSchema}
        />
      </FormWrapper>
    </Wrapper>
  );
};
