import React, { useContext } from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, Form } from 'formik';
import { closeModal } from '@redq/reuse-modal';
import TextField from 'components/text-field/text-field';
import { Button } from 'components/button/button';
import { useMutation } from '@apollo/react-hooks';
import { ADD_ADDRESS } from 'graphql/mutation/address';
import { FieldWrapper, Heading } from './address-card.style';
import { ProfileContext } from 'contexts/profile/profile.context';
import { AuthContext } from 'contexts/auth/auth.context';
import { FormattedMessage } from 'react-intl';

// Shape of form values
interface FormValues {
  id?: number | null;
  state?: string;
  city?: string;
  info?: string;
}

// The type of props MyForm receives
interface MyFormProps {
  item?: any | null;
}

// Wrap our form with the using withFormik HoC
const FormEnhancer = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    return {
      state: props.item.state || '',
      name: props.item.name || '',
      info: props.item.info || '',
    };
  },
  validationSchema: Yup.object().shape({
    state: Yup.string().required('Title is required!'),
    city: Yup.string().required('Title is required!'),
    info: Yup.string().required('Address is required'),
  }),
  handleSubmit: (values) => {
    console.log(values, 'values');
    // do submitting things
  },
});

const UpdateAddress = (props: FormikProps<FormValues> & MyFormProps) => {
  const {
    isValid,
    item,
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
  } = props;
  const addressValue = {
    city: values.city,
    state: values.state,
    info: values.info,
  };
  const { state, dispatch } = useContext(ProfileContext);
  const {
    authState: { id },
  } = useContext(AuthContext);
  const [addressMutation, { data }] = useMutation(ADD_ADDRESS);

  const handleSubmit = async () => {
    if (isValid) {
      const addressData = await addressMutation({
        variables: { userId: id, addressInput: addressValue },
      });
      console.log(addressData, 'address data');
      dispatch({ type: 'ADD_OR_UPDATE_ADDRESS', payload: addressValue });
      closeModal();
    }
  };
  return (
    <Form>
      <Heading>{item && item.id ? 'Edit Address' : 'Add New Address'}</Heading>
      <FieldWrapper>
        <TextField
          id='state'
          type='text'
          placeholder='Enter State'
          error={touched.state && errors.state}
          value={values.state}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FieldWrapper>
      <FieldWrapper>
        <TextField
          id='city'
          type='text'
          placeholder='Enter City'
          error={touched.city && errors.city}
          value={values.city}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FieldWrapper>

      <FieldWrapper>
        <TextField
          id='info'
          as='textarea'
          placeholder='Enter Address'
          error={touched.info && errors.info}
          value={values.info}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FieldWrapper>

      <Button
        onClick={handleSubmit}
        type='submit'
        style={{ width: '100%', height: '44px' }}
      >
        <FormattedMessage id='savedAddressId' defaultMessage='Save Address' />
      </Button>
    </Form>
  );
};

export default FormEnhancer(UpdateAddress);
