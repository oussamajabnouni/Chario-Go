import React, { Component } from "react";

import AsyncSelect from "react-select/async";
import Select from "react-select";

const ChooseCity = [
  {
    label: " Choose a city",
  },
];
const colourOptions = [
  {
    key: 1,
    label: " sousse medina",
  },
  {
    key: 2,
    label: " Hamem sousse",
  },
  {
    key: 3,
    label: " Sahloul",
  },
  {
    key: 4,
    label: " Jawhara",
  },
  {
    key: 5,
    label: " Galaa sghira",
  },
  {
    key: 6,
    label: " Galaa Kbira",
  },
];

const customStyles = {
  control: (base) => ({
    ...base,
    height: 53,
    minHeight: 35,
  }),
};
export default class SelectPage extends Component {
  handleInputChange = (newValue: string) => {
    const inputValue = newValue.replace(/\W/g, "");
    this.setState({ inputValue });
    return inputValue;
  };

  render() {
    return (
      <div>
        <Select
          options={colourOptions}
          onInputChange={this.handleInputChange}
          styles={customStyles}
          theme={(theme) => ({
            ...theme,

            borderRadius: 7,

            colors: {
              primary: "#009e7f",
            },
          })}
        />
      </div>
    );
  }
}
