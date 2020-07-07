import styled from "styled-components";
import css from "@styled-system/css";
export const CardTypeWrapper = styled.button`
  /* display: block; */
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
  background-color: ${(props) => props.color || "#fff"};
  padding: 15px 20px;
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;

  border-color: ${(props) => props.color || "#CCCCCC"};
  box-shadow: 1px 1px 0px 0px rgba(0, 0, 255, 0.2);

  &:hover {
    border-width: 2px;
    border-color: ${(props) => props.color || "#009e7f"};
    box-shadow: 0 5px 5px rgba(17, 16, 62, 0.15);
  }

  &:focus {
    border-color: ${(props) => props.color || "#009e7f"};
    border-radius: 6px;
  }
`;

export const Title = styled.h2(
  css({
    fontSize: [15, 23, 20],
    color: "#44444a",
  })
);

export const Icon = styled.span({
  marginRight: "0.2rem",

  color: "#44444a",
});

export const Description = styled.p(
  css({
    fontSize: [12, 13, 17],
    color: "darkRegular",
  }),
  {
    marginTop: "0.2rem",
  }
);
