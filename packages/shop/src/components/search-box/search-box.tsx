import React from "react";
import {
  StyledForm,
  StyledInput,
  StyledCategoryName,
  StyledSearchButton,
} from "./search-box.style";
import { SearchIcon } from "assets/icons/SearchIcon";
import DropDown from "../dropdown/dropdown";

interface Props {
  onEnter: (e: React.SyntheticEvent) => void;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  name: string;
  minimal?: boolean;
  className?: string;
  showButtonText?: boolean;
  shadow?: string;
  [key: string]: unknown;
}

export const SearchBox: React.FC<Props> = ({
  onEnter,
  onChange,
  value,
  name,
  minimal,
  categoryType,
  buttonText,
  className,
  showButtonText = true,
  shadow,
  ...rest
}) => {
  return (
    <StyledForm
      onSubmit={onEnter}
      className={className}
      boxShadow={shadow}
      minimal={minimal}
    >
      <div style={{ width: 325, marginLeft: "50px" }}>
      </div>

      <div style={{ width: 325, marginLeft: "50px" }}>
      </div>
    </StyledForm>
  );
};
