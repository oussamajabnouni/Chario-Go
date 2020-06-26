import React from "react";
import { CardTypeWrapper } from "./type-card.style";

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
      <h3>
        {" "}
        <span>{icon}</span> {restaurantType}
      </h3>

      <h6>{description}</h6>
    </CardTypeWrapper>
  );
};

export default CardType;
