import styled from "styled-components";

export const CardTypeWrapper = styled.div`
  /* display: block; */
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;

  padding: 15px 20px;
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.color || "#000"};
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 255, 0.2);
`;
