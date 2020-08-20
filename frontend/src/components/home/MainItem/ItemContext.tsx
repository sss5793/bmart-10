import React from "react";

export type ItemContextType = {
  goodId?: string | number;
  title?: string;
  price?: string;
  sale?: string;
  width?: string;
  src?: string;
  fontSize?: string;
  padding?: string;
  children?: React.ReactElement;
};
export const ItemContext = React.createContext<ItemContextType>({});
