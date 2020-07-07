import React from "react";
import Image from "components/image/image";
import Typical from "react-typical";
import { FormattedMessage } from "react-intl";
import { Button } from "components/button/button";
import {
  MainWrapperI,
  Description,
  DescriptionP,
  TitleBox,
} from "./HomePage.style";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import GooglePlay from "assets/images/GooglePlay.png";
import AppStore from "assets/images/AppStore.png";
import Location from "assets/images/location.svg";
import Shopping from "assets/images/Panier.svg";
import Fast from "assets/images/Fast.svg";
import Back from "assets/images/Back.jpg";
import Back2 from "assets/images/superMarcher.jpg";

const HomePage = ({}) => {
  return (
    <div>
      <MainWrapperI style={{ padding: "30px" }}>
        <Container>
          <Row>
            <TitleBox
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "Comment ça marche",
                  10000,
                  "Sélectionnez votre zone de livraison",
                  5000,
                  "Choisissez votre produits",
                  5000,
                  "Recevez-le à votre porte",
                  5000,
                ]}
              />
            </TitleBox>
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

              <DescriptionP>Sélectionnez votre zone de livraison</DescriptionP>
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

              <DescriptionP>Choisissez votre produits</DescriptionP>
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

              <DescriptionP>Recevez-le à votre porte</DescriptionP>
            </Col>
          </Row>
        </Container>
      </MainWrapperI>

      <MainWrapperI>
        <Row>
          <Col xs={6} md={6}>
            <div
              style={{
                height: "100%",
                width: "100%",
                backgroundImage: `url(${Back})`,
              }}
            ></div>
          </Col>

          <Col xs={6} md={6}>
            <div style={{ padding: "4rem" }}>
              <Description>
                <FormattedMessage
                  id={"foodsTitle"}
                  defaultMessage="You order we deliver"
                />
              </Description>

              <DescriptionP>
                <FormattedMessage
                  id={"foodsSubTitle"}
                  defaultMessage="Get your favorite foods in less than an hour"
                />
              </DescriptionP>
              <div style={{ marginLeft: "4rem", marginTop: "1rem" }}>
                <Button
                  variant="primary"
                  borderRadius={100}
                  style={{ width: "220px" }}
                >
                  <FormattedMessage id="Button" defaultMessage="  View  " />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </MainWrapperI>
      <MainWrapperI>
        <Row>
          <Col xs={6} md={6}>
            <div style={{ padding: "4rem" }}>
              <Description>
                <FormattedMessage
                  id={"groceriesTitle"}
                  defaultMessage="Groceries Delivered in 30 Minute"
                  values={{ minute: 90 }}
                />
              </Description>
              <DescriptionP>
                <FormattedMessage
                  id={"groceriesSubTitle"}
                  defaultMessage="Get your healthy foods & snacks delivered at your doorsteps all day everyday"
                  values={{ minute: 90 }}
                />
              </DescriptionP>
              <div style={{ marginLeft: "4rem", marginTop: "1rem" }}>
                <Button
                  variant="secondary"
                  borderRadius={100}
                  style={{ width: "220px" }}
                >
                  <FormattedMessage id="Button" defaultMessage="  View  " />
                </Button>
              </div>
            </div>
          </Col>

          <Col xs={6} md={6}>
            <div
              style={{
                height: "100%",
                width: "100%",
                backgroundImage: `url(${Back2})`,
              }}
            ></div>
          </Col>
        </Row>
      </MainWrapperI>

      <MainWrapperI>
        <Row>
          <Col xs={1} md={6}>
            <div
              style={{
                backgroundColor: "#009e7f",
                width: "100%",
                height: "100%",
                padding: "2rem",
              }}
            >
              <Row>
                <img
                  src={GooglePlay}
                  height="95"
                  width="250"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              </Row>
              <Row>
                <img
                  src={AppStore}
                  height="95"
                  width="250"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              </Row>
            </div>
          </Col>
          <Col xs={1} md={6}>
            <div
              style={{
                padding: "4rem",
              }}
            >
              <DescriptionP>
                L'application CharioFood vous permet d'utiliser votre smartphone
                pour consulter le menu des meilleurs restaurants et épiceries,
                et passer une commande pour la livraison à domicile.
              </DescriptionP>
            </div>
          </Col>
        </Row>
      </MainWrapperI>
    </div>
  );
};

export default HomePage;
