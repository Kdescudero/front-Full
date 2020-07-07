import React, { useReducer, createContext, useContext } from "react";

const initalState = {
  data: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addProduct": {
      return {
        ...state,
        data: [...state.data, action.data],
      };
    }

    case "deleteProduct": {
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.data),
      };
    }

    default: {
      return state;
    }
  }
};

const StorageContext = createContext();

const Storage = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <StorageContext.Provider value={{ state, dispatch }}>
      {children}
    </StorageContext.Provider>
  );
};

export const useStorage = () => useContext(StorageContext);

export default Storage;
