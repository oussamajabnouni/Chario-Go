import React, { useContext, useState, useEffect } from "react";
import Image from "components/image/image";

import CheckoutWrapper, {
  MainWrapper,
  ImageWrapper,
  Info,
  Description,
  DescriptionP,
  TitleBox,
} from "./checkout-two.style";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Location from "assets/images/location.png";
import Shopping from "assets/images/shopping.png";
import Fast from "assets/images/fast.png";
import Back from "assets/images/dummy-img-1.png";
import Back2 from "assets/images/dummy-img-2.png";

const HomePage = ({}) => {
  return (
    <div>
      <MainWrapper>
        <Row>
          <Col xs={6} md={6}>
            <div
              style={{
                height: "445px",
                width: "445px",
              }}
            >
              <img
                src={Back}
                height="545px"
                width="545px"
                style={{
                  display: "flex",
                  overflow: "hidden",
                  height: "100%",
                  borderBottomRightRadius: "80%",
                  borderTopRightRadius: "40%",
                }}
              />
            </div>
          </Col>

          <Col xs={6} md={5}>
            <div style={{ paddingTop: "7rem" }}>
              <Description>Restaurant</Description>
              <DescriptionP>
                Grocery delivery companies will deliver groceries, pre-prep or
                pre-made meals, and more to customers. The companies work with
                brick and mortar stores or their own line of grocery items.
                These orders are typically larger and more expensive than normal
                meal deliveries, and are often not meant to be eaten right away,
                rather they are to replace items someone has run out of, like
                flour or milk.
              </DescriptionP>
            </div>
          </Col>
        </Row>
      </MainWrapper>
      <MainWrapper>
        <Row>
          <Col xs={6} md={7}>
            <div style={{ padding: "7rem" }}>
              <Description>SuperMarché</Description>
              <DescriptionP>
                Grocery delivery companies will deliver groceries, pre-prep or
                pre-made meals, and more to customers. The companies work with
                brick and mortar stores or their own line of grocery items.
                These orders are typically larger and more expensive than normal
                meal deliveries, and are often not meant to be eaten right away,
                rather they are to replace items someone has run out of, like
                flour or milk.
              </DescriptionP>
            </div>
          </Col>

          <Col xs={6} md={5}>
            <div
              style={{
                height: "445px",
                width: "445px",
              }}
            >
              <img
                src={Back2}
                height="545px"
                width="545px"
                style={{
                  display: "flex",
                  overflow: "hidden",
                  height: "100%",
                  borderBottomLeftRadius: "80%",
                  borderTopLeftRadius: "40%",
                }}
              />
            </div>
          </Col>
        </Row>
      </MainWrapper>

      <MainWrapper style={{ padding: "30px" }}>
        <Container>
          <Row>
            <Info>
              <TitleBox>Comment ça marche</TitleBox>
            </Info>
          </Row>

          <Row>
            <Col xs={6} md={4}>
              <Row>
                <Image
                  url={Location}
                  style={{
                    marginTop: "3%",
                    height: "140px",
                    alignItems: "center",
                    width: "140px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "block",
                  }}
                />
              </Row>

              <Description>Sélectionnez votre zone de livraison</Description>
              <DescriptionP>
                Renseignez l'adresse où vous souhaitez être livré
              </DescriptionP>
            </Col>

            <Col xs={6} md={4}>
              <Row>
                <Image
                  url={Shopping}
                  style={{
                    marginTop: "3%",
                    height: "140px",
                    alignItems: "center",
                    width: "140px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "block",
                  }}
                />
              </Row>

              <Description>Choisissez votre produits</Description>
              <DescriptionP>
                Parcourir les enseignes qui livrent près de chez vous
              </DescriptionP>
            </Col>
            <Col xs={6} md={4}>
              <Row>
                <Image
                  url={Fast}
                  style={{
                    marginTop: "3%",
                    height: "140px",
                    alignItems: "center",
                    width: "140px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "block",
                  }}
                />
              </Row>

              <Description>Recevez-le à votre porte</Description>
              <DescriptionP>
                Votre commande vous sera livrée en un rien de temps
              </DescriptionP>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </div>
  );
};

export default HomePage;
