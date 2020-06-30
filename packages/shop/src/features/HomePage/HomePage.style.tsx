import styled from "styled-components";
import css from "@styled-system/css";

export const MainWrapper = styled.div`
  height: 100%;

  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-right: 2rem;
  margin-left: 2rem;
  background-color: #fff;
  position: relative;
  font-family: "Lato", sans-serif;
  border-radius: 6px;
  cursor: pointer;
  @media (max-width: 767px) {
    padding: 15px;
  }
`;

export const MainWrapperI = styled.div`
  height: 100%;

  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-right: 10rem;
  margin-left: 10rem;
  background-color: #fff;
  position: relative;
  font-family: "Lato", sans-serif;
  border-radius: 6px;
  cursor: pointer;
  @media (max-width: 767px) {
    padding: 15px;
    margin-right: 1rem;
    margin-left: 1rem;
  }
`;

export const DescriptionP = styled.p(
  css({
    fontSize: [12, 13, 17],
    color: "darkRegular",
  }),
  {
    marginTop: "0.2rem",
    textAlign: "center",
  }
);

export const TitleBox = styled.h2(
  css({
    fontSize: [17, 30, 26],
    color: "#515254",
    textAlign: "center",
  }),
  {
    fontWeight: 700,
    marginBottom: 15,
    textAlign: "center",
  }
);

export const Icon = styled.span({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "flexStart",
});

export const Description = styled.h2({
  color: "#515254",
  fontSize: "1.2rem",
  textAlign: "center",
});

export const Row = styled.div`
  display: flex;
`;

export const Col = styled.div`
  display: none;
`;
