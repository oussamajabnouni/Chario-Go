import React, { useReducer, useEffect } from "react";
import { FilterContext } from "./filter.context";
import Cookie from "js-cookie";


function reducer(state: any, action: any) {
  console.log("filter", state);

  switch (action.type) {
    case "SET_LOCATION_STATE":
      return {
        ...state,
        locationState: action.payload,
      };
    case "SET_LOCATION_CITY":
      return {
        ...state,
        locationCity: action.payload,
      };
    case "SET_CITY_OPTIONS":
      return {
        ...state,
        cityOptions: action.payload,
      };
    case "SET_SORT":
      return {
        ...state,
        locationState: action.payload,
      };
    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
}

const locationOptions = [
  {
    value: "Sousse",
    label: "Sousse",
    cities: [
      { label: "sousse medina", value: "sousse medina" },
      { label: "Sahloul", value: "Sahloul" },
      { label: "Kalaa", value: "Kalaa" },
    ],
  },
  {
    value: "Tunis",
    label: "Tunis",
    cities: [
      { label: "Lac", value: "Lac" },
      { label: "Lafayette", value: "Lafayette" },
    ],
  },
];

type Props = {
  cookies: {
    location_state: string;
    location_city: string;
  };
};

export const FilterProvider: React.FunctionComponent<Props> = ({ children, cookies }) => {
  const INITIAL_STATE = {
    locationState: cookies.location_state || "",
    locationCity: cookies.location_city || "",
    sort: "",
    cityOptions: [],
    searchTerm: "",
  };
  const [filterState, filterDispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    const filteredOptions = locationOptions.filter(option => option.value === INITIAL_STATE.locationState)
    if (filteredOptions.length > 0) {
      filterDispatch({ type: 'SET_CITY_OPTIONS', payload: filteredOptions[0].cities });
    }
  }, [])

  const changeLocationCity = (newLocationCity): void => {
    filterDispatch({ type: 'SET_LOCATION_CITY', payload: newLocationCity.value });
    Cookie.set("location_city", newLocationCity.value);
  };

  const changeLocationState = (newLocationState): void => {
    filterDispatch({ type: 'SET_LOCATION_STATE', payload: newLocationState.value });
    Cookie.set("location_state", newLocationState.value);
    filterDispatch({ type: 'SET_CITY_OPTIONS', payload: newLocationState.cities });
    if (filterState.locationState !== newLocationState.value) {
      changeLocationCity({ value: "" });
    }
  };
  return (
    <FilterContext.Provider value={{ filterState, filterDispatch, changeLocationState, changeLocationCity }}>
      {children}
    </FilterContext.Provider>
  );
};
