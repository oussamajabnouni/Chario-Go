import React from "react";
import {
  ProductCardWrapper,
  ProductImageWrapper,
  ProductInfo,
  SaleTag,
  DiscountPercent,
  Image,
  ProductTitle,
  ProductWeight,
  ProductMeta,
  OrderID,
  ProductPriceWrapper,
  ProductPrice,
  DiscountedPrice,
} from "./ProductCard.style";
import Button, { KIND } from "../Button/Button";
import { useDrawerDispatch } from "../../context/DrawerContext";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/react-hooks";
const REMOVE_PRODUCT = gql`
  mutation($id: String = "__eq") {
    deleteProduct(id: $id) {
      id
    }
  }
`;
const GET_PRODUCTS = gql`
  query getProducts(
    $type: String
    $sortByPrice: String
    $searchText: String
    $offset: Int
    $locationState: String
    $locationCity: String
  ) {
    products(
      type: $type
      sortByPrice: $sortByPrice
      searchText: $searchText
      offset: $offset
    ) {
      items {
        id
        title
        image
        type
        price
        unit
        deliverTo {
          state
          city
        }
        discountInPercent
      }
      totalCount
      hasMore
    }
  }
`;

type ProductCardProps = {
  title: string;
  image: any;
  unit?: string;
  currency?: string;
  description?: string;
  price: number;
  salePrice?: number;
  orderId?: number;
  discountInPercent?: number;
  data: any;
  onClick?: (e: any) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  unit,
  price,
  salePrice,
  discountInPercent,
  currency,
  data,
  orderId,
  onClick,
  ...props
}) => {
  const dispatch = useDrawerDispatch();
  const [
    deleteProduct,
    { loading: deleting },
  ] = useMutation(REMOVE_PRODUCT);
  const openDrawer = React.useCallback(
    () =>
      dispatch({
        type: "OPEN_DRAWER",
        drawerComponent: "PRODUCT_UPDATE_FORM",
        data: data,
      }),
    [dispatch, data]
  );

  const remove = () => {
    if (deleting) return;
    deleteProduct({
      variables: { id: data.id },
    });
  };

  return (
    <ProductCardWrapper {...props} className="product-card">
      <ProductImageWrapper>
        <Image url={image} className="product-image" />
        {discountInPercent && discountInPercent !== 0 ? (
          <>
            <SaleTag>Sale</SaleTag>
            <DiscountPercent>{discountInPercent}% Off</DiscountPercent>
          </>
        ) : null}
      </ProductImageWrapper>
      <ProductInfo>
        <ProductTitle>{title}</ProductTitle>
        <ProductWeight>{unit}</ProductWeight>
        <ProductMeta>
          <ProductPriceWrapper>
            <ProductPrice>
              {currency}
              {salePrice && salePrice !== 0 ? salePrice : price}
            </ProductPrice>

            {discountInPercent && discountInPercent !== 0 ? (
              <DiscountedPrice>
                {currency}
                {price}
              </DiscountedPrice>
            ) : null}
          </ProductPriceWrapper>

          <OrderID>{orderId}</OrderID>
        </ProductMeta>

        <Button
          kind={KIND.secondary}
          onClick={remove}
          overrides={{
            BaseButton: {
              style: ({ $theme }) => ({
                width: "41%",
                borderTopLeftRadius: "3px",
                borderTopRightRadius: "3px",
                borderBottomRightRadius: "3px",
                borderBottomLeftRadius: "3px",
                marginRight: "15px",
                color: $theme.colors.red400,
              }),
            },
          }}
        >
          Delete
        </Button>
        <Button
          kind={KIND.primary}
          style={{ marginLeft: "17px" }}
          onClick={openDrawer}
          overrides={{
            BaseButton: {
              style: ({ $theme }) => ({
                width: "43%",
                borderTopLeftRadius: "3px",
                borderTopRightRadius: "3px",
                borderBottomRightRadius: "3px",
                borderBottomLeftRadius: "3px",
              }),
            },
          }}
        >
          Update
        </Button>
      </ProductInfo>
    </ProductCardWrapper>
  );
};

export default ProductCard;
