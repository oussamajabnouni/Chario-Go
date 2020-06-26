import React from 'react';
import { NextPage } from 'next';
import { SEO } from 'components/seo';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import ProductDetails from 'components/product-details/product-details-one/product-details-one';
import ProductDetailsBook from 'components/product-details/product-details-two/product-details-two';
import { Modal } from '@redq/reuse-modal';
import ProductSingleWrapper, {
  ProductSingleContainer,
} from 'assets/styles/product-single.style';
import CartPopUp from 'features/carts/cart-popup';
import { withApollo } from 'utils/apollo';
import { GET_PRODUCT_DETAILS } from 'graphql/query/product.query';

type Props = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const ProductPage: NextPage<Props> = ({ deviceType }) => {
  const {
    query: { slug },
  } = useRouter();

  const { data, error, loading } = useQuery(GET_PRODUCT_DETAILS, {
    variables: { slug },
  });

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) return <div>Error: {error.message}</div>;

  let content;
  switch (data.product.type) {
    case 'BOOK': {
      content = (
        <ProductDetailsBook product={data.product} deviceType={deviceType} />
      );
      break;
    }
    default: {
      content = (
        <ProductDetails product={data.product} deviceType={deviceType} />
      );
    }
  }

  return (
    <>
      <SEO
        title={`${data.product.title} - PickBazar`}
        description={`${data.product.title} Details`}
      />

      <Modal>
        <ProductSingleWrapper>
          <ProductSingleContainer>
            {content}
            <CartPopUp deviceType={deviceType} />
          </ProductSingleContainer>
        </ProductSingleWrapper>
      </Modal>
    </>
  );
};
export default withApollo(ProductPage);
