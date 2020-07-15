import React from 'react';
import {
  RestaurantCardWrapper,
  RestaurantImageWrapper,
  RestaurantInfo,
  SaleTag,
  DiscountPercent,
  Image,
  RestaurantTitle,
  RestaurantWeight,
  RestaurantMeta,
  OrderID,
  RestaurantPriceWrapper,
  RestaurantPrice,
  DiscountedPrice,
} from './RestaurantCard.style';
import { useDrawerDispatch } from '../../context/DrawerContext';

type RestaurantCardProps = {
  id: string;
  name: string;
  thumbnailUrl: any;
  description: string;
  type: string;
  promotion?: string;
  currency?: string;
  owner?: string;
  discountInPercent?: number;
  data: any;
};

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  id,
  name,
  thumbnailUrl,
  type,
  description,
  promotion,
  data,
  owner,
  ...props
}) => {
  const dispatch = useDrawerDispatch();

  const openDrawer = React.useCallback(
    () =>
      dispatch({
        type: 'OPEN_DRAWER',
        drawerComponent: 'PRODUCT_UPDATE_FORM',
        data: data,
      }),
    [dispatch, data]
  );
  return (
    <RestaurantCardWrapper
      {...props}
      className="product-card"
      onClick={openDrawer}
    >
      <RestaurantImageWrapper>
        <Image url={thumbnailUrl} className="product-image" />
      </RestaurantImageWrapper>
      <RestaurantInfo>
        <RestaurantTitle>{name}</RestaurantTitle>
        <RestaurantWeight>{type}</RestaurantWeight>
        <RestaurantMeta>
          <RestaurantPriceWrapper>
            {description}
          </RestaurantPriceWrapper>

          <OrderID>{owner}</OrderID>
        </RestaurantMeta>
      </RestaurantInfo>
    </RestaurantCardWrapper>
  );
};

export default RestaurantCard;
