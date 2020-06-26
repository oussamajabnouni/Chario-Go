import React from "react";
import { CardTypeWrapper, Title, Description, Icon } from "./type-card.style";

type CardTypeProps = {
  restaurantType: string;
  description: string;
  icon: any;
  onClick?: (e: any) => void;
};

const CardType: React.FC<CardTypeProps> = ({
  restaurantType,
  description,
  icon,
  onClick,
  ...props
}) => {
  return (
    <CardTypeWrapper>
      <Title>
        <Icon>{icon}</Icon> {restaurantType}
      </Title>

      <Description>{description}</Description>
    </CardTypeWrapper>
  );
};

export default CardType;
