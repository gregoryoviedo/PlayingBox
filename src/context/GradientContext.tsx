import React, {createContext, useState} from 'react';

interface ImageColor {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colors: ImageColor;
  prevColors: ImageColor;
  setMainColors: (colors: ImageColor) => void;
  setPrevMainColors: (colors: ImageColor) => void;
}

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({children}: any) => {
  const [colors, setColors] = useState<ImageColor>({
    primary: 'transparent',
    secondary: 'transparent',
  });
  const [prevColors, setPrevColors] = useState<ImageColor>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setMainColors = (color: ImageColor) => {
    setColors(color);
  };

  const setPrevMainColors = (color: ImageColor) => {
    setPrevColors(color);
  };

  return (
    <GradientContext.Provider
      value={{
        colors,
        prevColors,
        setMainColors,
        setPrevMainColors,
      }}>
      {children}
    </GradientContext.Provider>
  );
};
