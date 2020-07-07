import React, { useReducer } from "react";
import { FilterContext } from "./filter.context";
import Cookie from "js-cookie";

const INITIAL_STATE = {
  locationState: localStorage.getItem("location_state") && "",
  locationCity: localStorage.getItem("location_city") && "",
  sort: "",
  searchTerm: "",
};

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

export const FilterProvider: React.FunctionComponent = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(reducer, INITIAL_STATE);
  // const changeLocationState = (newLocale): void => {
  //   setLocale(newLocale);
  //   document.documentElement.lang = newLocale;
  //   Cookie.set("locale", newLocale);
  // };
  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
