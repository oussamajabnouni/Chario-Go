import { styled, withStyle } from "baseui";
import {
  StyledTable as BaseStyledTable,
  StyledBodyCell as BaseStyledCell,
} from "baseui/table-grid";

export const TableWrapper = styled("div", () => ({
  width: "100%",
  height: "450px",
}));

export const StyledTable = withStyle(BaseStyledTable, () => ({
  borderTopLeftRadius: "0 !important",
  borderTopRightRadius: "0 !important",
  borderBottomLeftRadius: "0 !important",
  borderBottomRightRadius: "0 !important",
  alignContent: "start",
}));

export const StyledHeadCell = styled("div", () => ({
  fontFamily: "'Lato', sans-serif",
  fontWeight: 700,
  height: "40px",
  color: "#161F6A !important",

  textAlign: "center",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  borderTopColor: "rgba(0, 0, 0, 0.12)",
  borderRightColor: "rgba(0, 0, 0, 0.12)",
  borderBottomColor: "rgba(0, 0, 0, 0.12)",
  borderLeftColor: "rgba(0, 0, 0, 0.12)",
}));

export const StyledCell = withStyle(BaseStyledCell, () => ({
  fontFamily: "'Lato', sans-serif",
  fontWeight: 400,
  color: "#161F6A !important",
  alignSelf: "center",
}));

export const StyledHeadCellCenter = styled("div", () => ({
  fontFamily: "'Lato', sans-serif",
  fontWeight: 700,
  color: "#161F6A !important",
  alignItems: "center",
  alignText: "center",
  height: 57,
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  borderTopColor: "rgba(0, 0, 0, 0.12)",
  borderRightColor: "rgba(0, 0, 0, 0.12)",
  borderBottomColor: "rgba(0, 0, 0, 0.12)",
  borderLeftColor: "rgba(0, 0, 0, 0.12)",
  alignSelf: "start",
  justifyContent: "center",
}));

export const StyledCellCenter = withStyle(BaseStyledCell, () => ({
  fontFamily: "'Lato', sans-serif",
  fontWeight: 400,
  color: "#161F6A !important",
  alignSelf: "center",
  justifyContent: "center",
}));
