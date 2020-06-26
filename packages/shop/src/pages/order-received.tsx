import React from 'react';
import { SEO } from 'components/seo';
import OrderReceived from 'features/order-received/order-received';
import { withApollo } from 'utils/apollo';

const OrderReceivedPage = () => {
  return (
    <>
      <SEO title="Invoice - PickBazar" description="Invoice Details" />
      <OrderReceived />
    </>
  );
};

export default withApollo(OrderReceivedPage);
