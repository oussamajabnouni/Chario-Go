import React from 'react';
import { NextPage } from 'next';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { SEO } from 'components/seo';
import CartPopUp from 'features/carts/cart-popup';
import { withApollo } from 'utils/apollo';
import { Modal } from '@redq/reuse-modal';

import {
  OfferPageWrapper,
  ProductsRow,
  MainContentArea,
  ProductsCol,
} from 'assets/styles/pages.style';
import GiftCard from 'components/gift-card/gift-card';
import Footer from 'layouts/footer';

const GET_COUPON = gql`
  query {
    coupons {
      id
      code
      image
      discountInPercent
    }
  }
`;
type GiftCardProps = {
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const GiftCardPage: NextPage<GiftCardProps> = ({ deviceType }) => {
  const { data, error } = useQuery(GET_COUPON);
  if (error) return <div>{error.message}</div>;

  return (
    <Modal>
      <SEO title="Offer - Chario Go" description="Offer Details" />
      <OfferPageWrapper>
        <MainContentArea>
          <div style={{ width: '100%' }}>
            <ProductsRow>
              {data && data.coupons
                ? data.coupons.map((coupon) => (
                  <ProductsCol key={coupon.id}>
                    <GiftCard image={coupon.image} code={coupon.code} />
                  </ProductsCol>
                ))
                : null}
            </ProductsRow>
          </div>
        </MainContentArea>

        <Footer />
      </OfferPageWrapper>
      <CartPopUp deviceType={deviceType} />
    </Modal>
  );
};
export default withApollo(GiftCardPage);
