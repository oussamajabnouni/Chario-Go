import React, { useReducer } from "react";
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

export const FilterProvider: React.FunctionComponent = ({ children, cookies }) => {
  const INITIAL_STATE = {
    locationState: cookies.location_state || "",
    locationCity: cookies.location_city || "",
    sort: "",
    searchTerm: "",
  };
  const [filterState, filterDispatch] = useReducer(reducer, INITIAL_STATE);
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
