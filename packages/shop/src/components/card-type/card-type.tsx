import React from "react";
import { CardTypeWrapper, Title, Description, Icon } from "./type-card.style";

type CardTypeProps = {
  restaurantType: string;
  description: string;
  value: string;
  isActiveStateEmpty: boolean;
  icon: any;
  onClick?: (e: any) => void;
};

const CardType: React.FC<CardTypeProps> = ({
  restaurantType,
  value,
  description,
  icon,
  isActiveStateEmpty,
  onClick,
  ...props
}) => {
  return (
    <CardTypeWrapper
      onClick={() => onClick(value)}
      disabled={isActiveStateEmpty}
    >
      <Title>
        <Icon>{icon}</Icon> {restaurantType}
      </Title>

      <Description>{description}</Description>
    </CardTypeWrapper>
  );
};

export default CardType;
