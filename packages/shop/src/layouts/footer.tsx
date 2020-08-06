import styled from "styled-components";
import css from "@styled-system/css";
import { FormattedMessage } from "react-intl";
import Row from "react-bootstrap/Row";
import VisaIcon from "assets/images/visa.png";
import PosteIcon from "assets/images/laposte.png";
import MasterCardIcon from "assets/images/master-card.png";
import { Facebook } from "assets/icons/Facebook";
import { Google } from "assets/icons/Google";
const Box = styled.div(
  css({
    fontSize: 13,
    fontWeight: 400,
    color: "#77798C",
    backgroundColor: "#f7f7f7",
    px: 20,

    a: {
      color: "primary",
    },
  }),
  {
    marginTop: 50,
    width: "100%",
    height: 47,
    fontFamily: "Lato, sans-serif",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
);

const Title = styled.div(
  css({
    fontSize: 15,
    fontWeight: 400,
    color: "#55576C",
    px: 20,
  }),
  {
    fontFamily: "Lato, sans-serif",
  }
);

const TitleLink = styled.a(
  css({
    fontSize: 13,
    fontWeight: 400,
    color: "#55576C",
    px: 20,
  }),
  {
    fontFamily: "Lato, sans-serif",
  }
);

const Icon = styled.div(
  css({
    marginLeft: "20%",
  })
);

const FooterContainer = styled.div(
  css({
    fontSize: 13,
    fontWeight: 400,
    color: "#77798C",
    backgroundColor: "#fCfCfC",
    px: 20,

    a: {
      color: "outlined",
    },
  }),
  {
    marginTop: 30,
  }
);

const Col = styled.div(
  css({
    flex: "1",
    marginTop: "50px",
    marginLeft: "50px",
    marginRight: "50px",
  })
);

const Footer = () => {
  return (
    <FooterContainer>
      <Row>
        <Col>
          <Row style={{ marginBottom: "30px" }}>
            <Title>
              <FormattedMessage
                id="PaimentMethod"
                defaultMessage="Paiment Method"
              />
            </Title>
          </Row>
          <Row>
            <Icon>
              <img
                src={PosteIcon}
                alt=""
                width="32"
                height="30"
                style={{ marginBottom: "15px" }}
              />
            </Icon>
          </Row>
          <Row>
            <Icon>
              <img
                src={MasterCardIcon}
                alt=""
                width="30"
                height="18"
                style={{ marginBottom: "15px" }}
              />
            </Icon>
          </Row>
          <Row>
            <Icon>
              <img src={VisaIcon} alt="" width="30" height="10" />
            </Icon>
          </Row>
        </Col>
        <Col>
          <Row style={{ marginBottom: "30px" }}>
            <Title>
              <FormattedMessage
                id="PaimentMethod"
                defaultMessage="Let Us Help You"
              />
            </Title>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <TitleLink>
              <FormattedMessage
                id="PaimentMethod"
                defaultMessage="Account details"
              />
            </TitleLink>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <TitleLink>
              <FormattedMessage
                id="PaimentMethod"
                defaultMessage="Order History"
              />
            </TitleLink>
          </Row>
          <Row>
            <TitleLink>
              <FormattedMessage id="PaimentMethod" defaultMessage="Help" />
            </TitleLink>
          </Row>
        </Col>
        <Col>
          <Row style={{ marginBottom: "30px" }}>
            <Title>
              <FormattedMessage
                id="PaimentMethod"
                defaultMessage="Get to know us"
              />
            </Title>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <TitleLink>
              <FormattedMessage id="PaimentMethod" defaultMessage="About us" />
            </TitleLink>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <TitleLink>
              <FormattedMessage id="PaimentMethod" defaultMessage="Careers" />
            </TitleLink>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <TitleLink>
              <FormattedMessage
                id="PaimentMethod"
                defaultMessage="Gift cards"
              />
            </TitleLink>
          </Row>
          <Row>
            <TitleLink>
              <FormattedMessage id="PaimentMethod" defaultMessage="Blog" />
            </TitleLink>
          </Row>
        </Col>
        <Col>
        
          <Row style={{ marginBottom: "30px" }}>
            <Title>
              <FormattedMessage
                id="PaimentMethod"
                defaultMessage="Social Media"
              />
            </Title>
          </Row>

          <Row style={{ marginBottom: "10px" }}>
            <Icon>
              <Facebook />
            </Icon>
          </Row>

          <Row>
            <Icon>
              <Google />
            </Icon>
          </Row>

        </Col>
      </Row>
      <Row>
        <Box>
          <FormattedMessage
            id="siteFooter"
          />
          &nbsp;
          <a href="#" target="_blank">
            Chario, Inc.
          </a>
        </Box>
      </Row>
    </FooterContainer>
  );
};
export default Footer;
