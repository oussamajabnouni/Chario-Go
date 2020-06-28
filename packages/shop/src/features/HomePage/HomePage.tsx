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

const HomePage = ({}) => {
  return (
    <div>
      <MainWrapper>
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

      <MainWrapper></MainWrapper>
      <MainWrapper></MainWrapper>
    </div>
  );
};

export default HomePage;
