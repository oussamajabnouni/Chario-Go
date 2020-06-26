import React, { Component } from "react";

import AsyncSelect from "react-select/async";
import Select from "react-select";

export const StateOptions = [
  {
    value: " sousse medina",
    label: " sousse medina",
  },
  {
    value: " Hamem sousse",
    label: " Hamem sousse",
  },
  {
    value: " Sahloul",
    label: " Sahloul",
  },
  {
    value: " Jawhara",
    label: " Jawhara",
  },
  {
    value: " Galaa sghira",
    label: " Galaa sghira",
  },
  {
    value: " Galaa Kbira",
    label: " Galaa Kbira",
  },
];

const customStyles = {
  control: (base) => ({
    ...base,
    height: 57,
    minHeight: 35,
  }),
};

const filterState = (inputValue: string) => {
  return StateOptions.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filterState(inputValue));
  }, 50);
};

export default class SelectPage extends Component {
  state = { inputValue: "" };
  handleInputChange = (newValue: string) => {
    const inputValue = newValue.replace(/\W/g, "");
    this.setState({ inputValue });
    return inputValue;
  };
  render() {
    return (
      <div>
        <AsyncSelect
          cacheOptions
          loadOptions={loadOptions}
          defaultValue={StateOptions[0]}
          defaultOptions
          styles={customStyles}
          theme={(theme) => ({
            ...theme,
            borderRadius: 2,

            colors: {
              ...theme.colors,

              primary: "#009e7f",
            },
          })}
        />
      </div>
    );
  }
}
