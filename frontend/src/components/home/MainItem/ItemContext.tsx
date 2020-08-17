import React from "react";

export type ItemContextType = {
  title?: string;
  price?: string;
  sale?: string;
  width?: string;
  src?: string;
  fontSize?: string;
};
export const ItemDispatch = React.createContext<ItemContextType>({});
